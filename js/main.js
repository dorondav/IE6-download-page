
window.onload = function () {
    // ==Events==

    // Activate sticky sidenav  
    addStickySidenav();

    // ==Methods==
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
            var topScroll = document.documentElement.scrollTop
            if (topScroll < 1550 && topScroll > 200) {
                stickyDiv.style.top = topScroll + "px";
                stickyDiv.style.marginTop = "-190px";
            }
        }
        // AddStickySidenav function configurations if addEventListener doesn't exists 

        function stickyNavbarIe() {
            var topScroll = document.documentElement.scrollTop
            if (topScroll < 1550 && topScroll > 300) {
                stickyDiv.style.top = topScroll + "px";
                stickyDiv.style.marginTop = "-280px";
            }
        }
    }


}