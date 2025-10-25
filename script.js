// Event Promo JavaScript
// Add any interactive functionality here

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      this.textContent = mobileNav.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        mobileMenuToggle.textContent = '☰';
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('active');
        mobileMenuToggle.textContent = '☰';
      }
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll effect to header
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.backgroundColor = 'var(--bg-dark)';
      header.style.backdropFilter = 'none';
    }
  });

  // Add animation to cards on scroll
  const cards = document.querySelectorAll('.card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const cardObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
  });

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const message = formData.get('message');
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Simulate form submission (in a real app, you'd send this to a server)
      console.log('Form submitted:', {
        name: name,
        email: email,
        phone: phone,
        message: message
      });
      
      // Show success message
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
      
      // Reset form after 3 seconds (optional)
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.style.display = 'none';
      }, 5000);
    });
  }

  // Interactive CTA button effects
  const ctaButtons = document.querySelectorAll('.cta-btn');
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Parallax effect for hero sections
  const heroSections = document.querySelectorAll('.hero, .about-hero, .contact-hero');
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    heroSections.forEach(hero => {
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  });

  // Interactive learning cards
  const learningCards = document.querySelectorAll('.learning-card');
  learningCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    });
  });

  // Interactive instructor cards
  const instructorCards = document.querySelectorAll('.instructor-card');
  instructorCards.forEach(card => {
    card.addEventListener('click', function() {
      // Toggle a "selected" state
      instructorCards.forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      
      // Add a subtle animation
      this.style.transform = 'scale(1.02)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });

  // Schedule item interactions
  const scheduleItems = document.querySelectorAll('.schedule-item');
  scheduleItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'rgba(255, 204, 0, 0.1)';
      this.style.borderLeft = '4px solid var(--accent)';
      this.style.paddingLeft = 'calc(4rem - 4px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
      this.style.borderLeft = 'none';
      this.style.paddingLeft = '4rem';
    });
  });

  // Form field focus animations
  const formInputs = document.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });

  // Loading animation for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
      this.style.transform = 'scale(1)';
    });
    
    // Set initial state
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });

  // Add typing effect to hero text
  const heroText = document.querySelector('.hero-text h2');
  if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    heroText.style.borderRight = '2px solid var(--accent)';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        heroText.style.borderRight = 'none';
      }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
  }

  // Add scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), #990000);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
});
