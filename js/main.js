window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const progressBars = document.querySelectorAll('.progress-bar');

const startProgressAnimation = () => {
  progressBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
  });
};

const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startProgressAnimation();
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 });

observer.observe(skillsSection);

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


const roadmapItems = document.querySelectorAll('.timeline-item-modern');

const roadmapObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.timeline-item-modern').forEach((item, i) => {
        setTimeout(() => item.classList.add('show'), i * 300);
      });
    }
  });
}, { threshold: 0.2 });

roadmapObserver.observe(document.querySelector('#roadmap'));