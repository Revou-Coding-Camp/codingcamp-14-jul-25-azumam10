// Navigasi halaman
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetPage = link.getAttribute('data-page');
    navLinks.forEach(nl => nl.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active'));
    link.classList.add('active');
    document.getElementById(targetPage).classList.add('active');
    navLinksContainer.classList.remove('active');
  });
});

mobileMenu.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

// Form Contact
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };
  window.contactMessages = window.contactMessages || [];
  window.contactMessages.push({ ...data, timestamp: new Date().toISOString() });
  alert(`Terima kasih ${data.name}! Pesan Anda telah dikirim.`);
  contactForm.reset();
});

// Animasi saat scroll
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  const cards = document.querySelectorAll('.skill-card, .project-card, .social-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
});

// Efek ketik di halaman home
function typeWriter(element, text, delay = 100) {
  element.innerHTML = '';
  let i = 0;
  const timer = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, delay);
}

const heroTitle = document.querySelector('.hero h1');
const heroText = document.querySelector('.hero p');

if (document.getElementById('home').classList.contains('active')) {
  setTimeout(() => {
    typeWriter(heroTitle, 'Azkiya Zahrul Umam', 80);
    setTimeout(() => {
      typeWriter(heroText, 'Full-Stack Developer | Laravel Enthusiast | Badminton Player', 50);
    }, 2000);
  }, 500);
}
