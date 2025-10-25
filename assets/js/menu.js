
// Menu + hero slider (clean)
document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect (optional)
  const header = document.getElementById('header');
  function onScroll(){ header && header.classList.toggle('scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll); onScroll();

  // Mobile menu
  const toggle = document.querySelector('.mobile-nav-toggle');
  const list = document.querySelector('#navmenu ul');
  if(toggle && list){
    toggle.addEventListener('click', () => {
      list.classList.toggle('active');
      toggle.classList.toggle('bi-list');
      toggle.classList.toggle('bi-x');
    });
    // close when clicking link
    list.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
      list.classList.remove('active'); toggle.classList.add('bi-list'); toggle.classList.remove('bi-x');
    }));
  }

  // Hero slideshow
  const slides = document.querySelectorAll('#hero img');
  if(slides.length){
    let i=0; let t=null;
    const show = idx => slides.forEach((im, k)=> im.classList.toggle('active', k===idx));
    const next = () => { i=(i+1)%slides.length; show(i); };
    const prev = () => { i=(i-1+slides.length)%slides.length; show(i); };
    show(i);
    t = setInterval(next, 6000);
    document.querySelector('.hero-next')?.addEventListener('click', ()=>{ next(); clearInterval(t); t=setInterval(next,6000); });
    document.querySelector('.hero-prev')?.addEventListener('click', ()=>{ prev(); clearInterval(t); t=setInterval(next,6000); });
  }
});
