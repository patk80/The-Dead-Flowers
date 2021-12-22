let mobileToggleIcon = document.querySelector("#mobile-toggle-icon");
let navLinks         = document.querySelectorAll(".nav-link");
let navbarCollapse   = document.querySelector(".navbar-collapse");
// Looping through all navLinks and adding an event listener to close navbar & change icon when clicked (made for mobile) //
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
        mobileToggleIcon.innerHTML = '<i class="fas fa-bars"></i>'
    });
});
// Change navbar icon depending on navbar state //
mobileToggleIcon.addEventListener("click", () => {
    if( !mobileToggleIcon.classList.contains('collapsed') ||  navbarCollapse.classList.contains('show') ) {
        mobileToggleIcon.innerHTML = '<i class="fas fa-times"></i>'
    } else {
        mobileToggleIcon.innerHTML = '<i class="fas fa-bars"></i>'
    }
});