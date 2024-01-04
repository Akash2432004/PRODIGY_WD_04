// Add any JavaScript functionality you need here
// For example, you can add an interactive navigation menu, form validation, or dynamic content loading.

// Example: Interactive navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(sectionId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
