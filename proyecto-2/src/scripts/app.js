document.addEventListener("DOMContentLoaded", () => {
  const appBtn = document.getElementById("appBtn");
  const appContent = document.getElementById("appContent");

  const contactBtn = document.getElementById("contactBtn");
  const contactContent = document.getElementById("contactContent");

  const projectsBtn = document.getElementById("projectsBtn");
  const projectsContent = document.getElementById("projectsContent");

  // Toggle para "Sobre mí"
  appBtn.addEventListener("click", () => {
    appContent.classList.toggle("show");
    appBtn.classList.toggle("active");

    contactContent.classList.remove("show");
    contactBtn.classList.remove("active");

    projectsContent.classList.remove("show");
    projectsBtn.classList.remove("active");
  });

  // Toggle para "Contáctame"
  contactBtn.addEventListener("click", () => {
    contactContent.classList.toggle("show");
    contactBtn.classList.toggle("active");

    appContent.classList.remove("show");
    appBtn.classList.remove("active");

    projectsContent.classList.remove("show");
    projectsBtn.classList.remove("active");
  });

  // Toggle para "Proyectos"
  projectsBtn.addEventListener("click", () => {
    projectsContent.classList.toggle("show");
    projectsBtn.classList.toggle("active");

    appContent.classList.remove("show");
    appBtn.classList.remove("active");

    contactContent.classList.remove("show");
    contactBtn.classList.remove("active");
  });
});
