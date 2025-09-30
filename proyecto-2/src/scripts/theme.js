document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeToggleBtn");
  const body = document.body;

  themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      themeBtn.textContent = "Modo Oscuro";
    } else {
      themeBtn.textContent = "Modo Claro";
    }
  });
});
