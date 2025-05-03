document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when link is clicked
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Sticky header on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Form submission handling with AJAX
  const bookingForm = document.getElementById('booking-form');
  const contactForm = document.getElementById('contact-form');
  const successModal = document.getElementById('success-message');
  const closeModalBtn = document.querySelector('.close');

  // Helper function to serialize form data
  function serializeForm(form) {
    const formData = new FormData(form);
    const serialized = {};
    
    for (let [key, value] of formData.entries()) {
      serialized[key] = value;
    }
    
    return serialized;
  }

  // Helper function for AJAX requests
  function sendFormData(url, data, callback) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      callback(null, data);
    })
    .catch(error => {
      console.error('Error:', error);
      callback(error);
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = serializeForm(bookingForm);
      console.log('Booking form submitted', formData);
      
      // AJAX request
      sendFormData('/api/booking', formData, function(error, data) {
        if (error) {
          alert('There was an error submitting your booking. Please try again later.');
          return;
        }
        
        // Display success message
        successModal.style.display = 'block';
        
        // Clear form
        bookingForm.reset();
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = serializeForm(contactForm);
      console.log('Contact form submitted', formData);
      
      // AJAX request
      sendFormData('/api/contact', formData, function(error, data) {
        if (error) {
          alert('There was an error submitting your message. Please try again later.');
          return;
        }
        
        // Display success message
        successModal.style.display = 'block';
        
        // Clear form
        contactForm.reset();
      });
    });
  }

  // Close modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      successModal.style.display = 'none';
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === successModal) {
      successModal.style.display = 'none';
    }
  });

  // Update service price based on service type selection
  const serviceTypeSelect = document.getElementById('service-type');
  if (serviceTypeSelect) {
    serviceTypeSelect.addEventListener('change', function() {
      // In a real scenario, you would update pricing dynamically
      console.log('Service type changed to: ' + this.value);
    });
  }

  // Create placeholder images if real ones fail to load
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      if (!this.src.includes('placeholder')) {
        console.log('Image failed to load: ' + this.src);
        this.src = '/images/placeholder.jpg';
      }
    });
  });

  // Implement a simple date validation
  const dateInput = document.getElementById('date');
  if (dateInput) {
    dateInput.addEventListener('change', function() {
      const selectedDate = new Date(this.value);
      const today = new Date();
      
      if (selectedDate < today) {
        alert('Please select a future date');
        this.value = '';
      }
    });
  }

  // Initialize map (if available) - simplified for this example
  // In a real application, you would use Google Maps or Leaflet.js
  if (document.getElementById('map')) {
    console.log('Map container exists - would initialize map here');
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Calculate header height with a small buffer
        const headerHeight = document.querySelector('header').offsetHeight + 20;
        
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});