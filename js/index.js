const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu__visible");

    if (navMenu.classList.contains("nav-menu__visible")) {
        navToggle.setAttribute("arial.label", "Cerrar menu");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menu")
    }
});