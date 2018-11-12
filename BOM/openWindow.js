window.onload = function () {
    const windowButton = document.getElementById("newWindow");

    windowButton.addEventListener("click", openWindow, false);

    function openWindow() {
        //open("", "", "width = " + screen.availWidth + ", height = "+ screen.availHeight);
        open("", "", "width = 400, height = 600");
    }

    console.log(navigator.userProfile);

}

