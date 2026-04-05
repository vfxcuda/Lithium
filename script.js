/* ── Scroll reveal ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) en.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Smooth scroll for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 60;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── Nav background on scroll ── */
const nav = document.querySelector('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(255,255,255,.1)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,.08)';
  }
  lastScroll = scrollY;
}, { passive: true });
