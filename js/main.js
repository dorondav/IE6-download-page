
window.onload = function () {
    // ==Events==

    // Activate sticky sidenav  
    addStickySidenav();
    // Add responsive classes for IE
    responsiveViewIe();
    formSubmission();
    // ==Methods==

    function formSubmission() {

        var submit = document.getElementById("form-btn");


        if (submit.addEventListener) {
            submit.addEventListener("click", formValidations, false);
        } else {
            submit.attachEvent("onclick", formValidations);
        }

    }
    function formValidations(event) {
        var isIE = /*@cc_on!@*/false || !!document.documentMode;

        var name = document.getElementById('name').value;
        var message = document.getElementById('message').value;
        var email = document.getElementById('email').value;
        var errorMsg = document.getElementById('asterisk-msg');
        var formData = document.getElementById('formData');

        // var formData = null;

        // Email Regex
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (event.preventDefault) { event.preventDefault() };
        if (window.event) { window.event.returnValue = false; }

        if (name == "" || email == "" || message == "") {
            return errorMsg.innerText = '*Mandatory Fields';

        } else {

            if (name.length < 3) {
                return errorMsg.innerText = 'Name to Short. Name must have more then 2 characters';
            }
            if (message.length < 9) {
                return errorMsg.innerHTML = 'Message To Short. Message must have more then 10 characters';
            }
            if (!re.test(email.toLowerCase())) {
                return errorMsg.innerHTML = 'Email is invalid';
            }

            return formData.innerHTML = " <h3 class=\"main-section_titles\" >Form Information</h3><table id=\"formData-table\"><tr><td>Name:</td><td>" + name + "</td></tr ><tr><td>Email: </td><td> " + email + " </td> </tr><tr><td>Message: </td><td>" + message + "</td> </tr><\/table >";
            // return formData.innerHTML '<div> '
        }
    }

    function responsiveViewIe() {
        // check if browser is IE 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;

        // Screen Under  1150px
        var row = document.getElementById('row');
        var rightSizePanel = document.getElementById('sidebar');
        var rightSize = document.getElementById('right-size');
        var mainSection = document.getElementById('main-section');
        var sidebarTable = document.getElementById('sidebar-table');

        if (isIE) {
            window.attachEvent("onresize", function (event) {
                if (document.body.clientWidth < 1150) {
                    // Add CSS classes
                    rightSizePanel.className += " right-size_resp-class";
                    mainSection.className += " main-section_resp-class";
                    rightSize.className += " sidebar_resp-class";
                    row.className += " row_resp-class";
                    sidebarTable.className += " sidebar_table_resp-class"
                } else {
                    // Remove CSS classes
                    rightSizePanel.className = rightSizePanel.className.replace(/\right-size_resp-class\b/g, "");
                    mainSection.className = mainSection.className.replace(/\main-section_resp-class\b/g, "");
                    rightSize.className = rightSize.className.replace(/\sidebar_resp-class\b/g, "");
                    row.className = row.className.replace(/\sidebar_resp-class\b/g, "");
                    sidebarTable.className = sidebarTable.className.replace(/\sidebar_table_resp-class\b/g, "");
                }
            });
        }
    }


    // Check if  addEventListener is supported in browser 
    function addStickySidenav() {
        var stickyDiv = document.getElementById("sidebar");
        if (window.addEventListener) {
            window.addEventListener("scroll", stickyNavbar);
        } else {
            window.attachEvent("onscroll", stickyNavbarIe);
        }
        // AddStickySidenav function configurations if addEventListener exists 
        function stickyNavbar() {
            var browserWidth = document.body.offsetWidth;
            var topScroll = document.documentElement.scrollTop
            if (browserWidth > 860) {
                if (topScroll < 1550 && topScroll > 200) {
                    stickyDiv.style.top = topScroll + "px";
                    stickyDiv.style.marginTop = "-190px";
                } else {
                    stickyDiv.style.marginTop = 0;
                }
                if (topScroll < 200) {
                    stickyDiv.style.top = 0;
                }
            }
        }
        // AddStickySidenav function configurations if addEventListener doesn't exists 

        function stickyNavbarIe() {
            var browserWidth = document.body.offsetWidth;
            var topScroll = document.documentElement.scrollTop;
            if (browserWidth > 1150) {
                if (topScroll < 1550 && topScroll > 300) {
                    stickyDiv.style.top = topScroll + "px";
                    stickyDiv.style.marginTop = "-280px";
                }
            } else {
                stickyDiv.style.marginTop = 0;

            }
        }
    }

}