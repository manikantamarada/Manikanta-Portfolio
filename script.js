
// ===============================
// MOBILE MENU
// ===============================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ===============================
// FOOTER YEAR
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been received.");

    contactForm.reset();

});
