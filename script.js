function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  function toggleDivDarkMode() {
    document.div.classList.toggle("dark-mode");
  }