// CME Curaçao - Custom Main JS
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
});
