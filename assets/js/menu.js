// ==========================================================
// CME Curaçao - Hoofdscript (Header + Menu + Hero Slider)
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {

  // --- Header scroll effect ---
  const header = document.getElementById("header");
  function handleScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // --- Mobiel menu ---
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector("#navmenu ul");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("bi-list");
      navToggle.classList.toggle("bi-x");
    });

    // Sluit menu bij klik op link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.add("bi-list");
        navToggle.classList.remove("bi-x");
      });
    });
  }

  // --- Hero slideshow alleen op indexpagina ---
  if (document.body.classList.contains("index-page")) {
    const slides = document.querySelectorAll("#hero img");
    if (slides.length) {
      let index = 0;
      let timer = null;

      const showSlide = (i) => {
        slides.forEach((img, k) => img.classList.toggle("active", k === i));
      };

      const nextSlide = () => {
        index = (index + 1) % slides.length;
        showSlide(index);
      };

      const prevSlide = () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      };

      // Start automatisch
      showSlide(index);
      timer = setInterval(nextSlide, 6000);

      // Handmatige controls
      document.querySelector(".hero-next")?.addEventListener("click", () => {
        nextSlide();
        clearInterval(timer);
        timer = setInterval(nextSlide, 6000);
      });

      document.querySelector(".hero-prev")?.addEventListener("click", () => {
        prevSlide();
        clearInterval(timer);
        timer = setInterval(nextSlide, 6000);
      });
    }
  }

  // --- Init animaties (AOS) ---
  if (typeof AOS !== "undefined") {
    AOS.init({ once: true });
  }

  // --- Body fix: juiste achtergrond per pagina ---
  if (document.body.classList.contains("index-page")) {
    document.body.style.backgroundColor = "#000"; // zwart op homepage
  } else {
    document.body.style.backgroundColor = "#fff"; // wit op andere pagina’s
  }
});
