// JavaScript for redirecting to Login Page
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginBtn").addEventListener("click", function() {
      window.location.href = "login.html"; // Redirect to login page
  });
});


// JavaScript for toggling the sidebar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
