document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".navmenu");
  const header = document.querySelector(".header");

  if (navToggle && navMenu) {
    // open/sluit menu
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-nav-active");
      navToggle.classList.toggle("bi-x");
    });

    // sluit menu bij klik op link
    document.querySelectorAll(".navmenu a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-nav-active");
        navToggle.classList.remove("bi-x");
      });
    });
  }

  // Header transparant of wit bij scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
