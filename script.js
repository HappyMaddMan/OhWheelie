function toggleMenu(e) {
    let menu = document.querySelector(".burger-menu");
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
    e.preventDefault();
}

window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".burger-menu__toolbar a").addEventListener("click", toggleMenu);
    document.querySelector(".burger-menu-icon a").addEventListener("click", toggleMenu);
});
