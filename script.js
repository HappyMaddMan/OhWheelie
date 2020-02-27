function toggleMenu(e) {
    let menu = document.querySelector(".burger-menu");
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
    e.preventDefault();
}

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".burger-menu__toolbar a").addEventListener("click", toggleMenu);
    document.querySelector(".burger-menu-icon a").addEventListener("click", toggleMenu);
});



function readFunction(e) {
    var Btn = e.target;
    var blogText = Btn.closest(".blogText");
    var dots = blogText.querySelector(".dots");
    var moreText = blogText.querySelector(".more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        Btn.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        Btn.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
