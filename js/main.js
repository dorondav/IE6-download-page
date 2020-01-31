
window.onload = function () {
    var btn = document.getElementById('test');

    if (btn.addEventListener) {
        btn.addEventListener("click", test, false);
    } else {
        document.getElementById('test').attachEvent("onclick", test);
    }

    function test() {
        alert('sdg')
    }
}

