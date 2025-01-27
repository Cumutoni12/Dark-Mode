const themeToggleBtn = document.querySelector(".theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "switch to light mode";
  } else {
    themeToggleBtn.textContent = "Switch to Dark Mode";
  }
});
