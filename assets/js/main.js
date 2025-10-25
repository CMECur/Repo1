// CME Curaçao - Custom Main JS
/**
 * apply .scrolled class to body as page is scrolled
 */
function toggleScrolled() {
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  if (window.scrollY > 100) {
    selectBody.classList.add('scrolled');
    selectHeader.classList.add('scrolled');
  } else {
    selectBody.classList.remove('scrolled');
    selectHeader.classList.remove('scrolled');
  }
}
window.addEventListener('load', toggleScrolled);
document.addEventListener('scroll', toggleScrolled);

/**
 * Initiate PureCounter (voor eventuele cijfers animatie)
 */
new PureCounter();

// ... (overige functies voor o.a. glightbox, isotope, swiper initialisatie) ...
AOS.init({ once: true });

const header = document.querySelector('#header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

document.addEventListener('DOMContentLoaded', () => {
  // Hero slider (indien aanwezig)
  const slides = document.querySelectorAll('#hero img');
  if (slides.length > 0) {
    const next = document.querySelector('.hero-next');
    const prev = document.querySelector('.hero-prev');
    let current = 0;
    let interval;
    function showSlide(i) {
      slides.forEach((img, idx) => img.classList.toggle('active', idx === i));
    }
    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }
    function prevSlideFunc() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }
    function startAuto() {
      interval = setInterval(nextSlide, 6000);
    }
    function resetAuto() {
      clearInterval(interval);
      startAuto();
    }
    next.addEventListener('click', () => {
      nextSlide();
      resetAuto();
    });
    prev.addEventListener('click', () => {
      prevSlideFunc();
      resetAuto();
    });
    showSlide(current);
    startAuto();
  }

  // Mobiel menu toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('#navmenu ul');
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });
  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.add('bi-list');
      navToggle.classList.remove('bi-x');
    });
  });

  // Initialiseer GLightbox
  GLightbox({ selector: '.glightbox' });
  
// === HEADER EN MENU FIX GLOBAAL ===
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header");
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navList = document.querySelector("#navmenu ul");

  // Hamburger menu toggle
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("show");
      navToggle.classList.toggle("bi-list");
      navToggle.classList.toggle("bi-x");
    });
  }

  // Toon/verberg hamburger alleen op mobiel
  function handleResize() {
    if (window.innerWidth > 991) {
      navList.classList.remove("show");
      navToggle.style.display = "none";
      navList.style.display = "flex";
    } else {
      navToggle.style.display = "block";
      navList.style.display = "none";
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  // Scroll effect voor header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });
});
