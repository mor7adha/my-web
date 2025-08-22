// Theme toggle, year, scroll reveals
const applyTheme = (mode) => {
  if (mode === 'light'){ document.body.classList.add('light'); localStorage.setItem('theme','light'); }
  else { document.body.classList.remove('light'); localStorage.setItem('theme','dark'); }
};
applyTheme(localStorage.getItem('theme') || 'dark');
document.querySelector('#themeToggle')?.addEventListener('click', ()=> {
  const light = document.body.classList.contains('light');
  applyTheme(light ? 'dark' : 'light');
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));


// Stagger delays inside each section
document.querySelectorAll('.section').forEach(sec=>{
  const items = sec.querySelectorAll('.reveal, .card.hoverlift, .service, .proj');
  items.forEach((el, i)=> el.setAttribute('data-delay', Math.min(4, i) ));
});

