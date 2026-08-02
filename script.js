
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.style.color = active ? '#0b74c9' : '';
    });
  });
}, { threshold: 0.35 });

sections.forEach((section) => observer.observe(section));
