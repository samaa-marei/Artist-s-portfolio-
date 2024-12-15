function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

document.getElementById("contact-button").addEventListener("click", function() 
{
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
