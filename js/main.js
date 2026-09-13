window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      
      const collapse = document.querySelector('.navbar-collapse');
      if (collapse.classList.contains('show')) {
        new bootstrap.Collapse(collapse).hide();
      }
    }
  });
});

const roadmapObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.timeline-item-modern').forEach((item, i) => {
        setTimeout(() => item.classList.add('show'), i * 300);
      });
      roadmapObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

roadmapObserver.observe(document.querySelector('#roadmap'));