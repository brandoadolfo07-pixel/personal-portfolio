// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");

  // Tell screen readers whether the menu is open or closed.
  const isOpen = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after clicking a navigation link.
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically display the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Demo contact form: validates required fields but does not send an email.
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const visitorName = document.getElementById("visitorName").value.trim();
  const visitorEmail = document.getElementById("visitorEmail").value.trim();
  const visitorMessage = document.getElementById("visitorMessage").value.trim();

  if (!visitorName || !visitorEmail || !visitorMessage) {
    formNote.textContent = "Please complete all fields.";
    return;
  }

  formNote.textContent = "Thank you, " Branscute at your service:) "! This demo form works, but it is not connected to an email service yet.";
  contactForm.reset();
});
