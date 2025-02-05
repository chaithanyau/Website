document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sideButtons = document.querySelectorAll(".side-button");
    const container = document.querySelector(".container");

    function slideToSection(index) {
        container.style.transform = `translateX(-${index * 100}vw)`;

        navLinks.forEach(nav => nav.classList.remove("active"));
        if (navLinks[index]) navLinks[index].classList.add("active");
    }

    navLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            slideToSection(index);
        });
    });

    sideButtons.forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            slideToSection(index);
        });
    });
});