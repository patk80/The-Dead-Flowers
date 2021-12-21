let navLinks       = document.querySelectorAll(".nav-link");
let navbarCollapse = document.querySelector(".navbar-collapse");
// Looping through all navLinks and adding an event listener to close navbar when clicked (made for mobile) //
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
    });
});