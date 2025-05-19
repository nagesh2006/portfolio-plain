// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
const isDark = document.body.classList.contains('dark-mode');
document.body.style.color = isDark ? '#ffffff' : '#333333';
});

// Scroll animations
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});
revealElements.forEach(el => observer.observe(el));

// Preloader
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
