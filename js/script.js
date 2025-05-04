removeEventListener// Check if CONFIG is defined, otherwise create an empty object
if (typeof CONFIG === 'undefined') {
  console.warn('CONFIG object not found. Using default empty configuration.');
  window.CONFIG = {
    GOOGLE_MAPS_API_KEY: "",
    WEBSITE_VERSION: "3.60"
  };
} else {
  console.log('CONFIG loaded successfully with version:', CONFIG.WEBSITE_VERSION);
  console.log('Google Maps API Key status:', CONFIG.GOOGLE_MAPS_API_KEY ? 'Provided (length: ' + CONFIG.GOOGLE_MAPS_API_KEY.length + ')' : 'Missing');
}

// Function to dynamically load the Google Maps API
function loadGoogleMapsScript() {
  // Debug - log the key length for troubleshooting (safe, doesn't reveal the actual key)
  console.log('API Key check - key exists:', !!CONFIG.GOOGLE_MAPS_API_KEY);
  if (CONFIG.GOOGLE_MAPS_API_KEY) {
    console.log('API Key check - key length:', CONFIG.GOOGLE_MAPS_API_KEY.length);
    console.log('API Key check - first 4 chars:', CONFIG.GOOGLE_MAPS_API_KEY.substring(0, 4));
    console.log('API Key check - has whitespace:', /\s/.test(CONFIG.GOOGLE_MAPS_API_KEY));
  }
  
  // Only load if the API key is provided
  if (CONFIG.GOOGLE_MAPS_API_KEY && CONFIG.GOOGLE_MAPS_API_KEY.trim() !== "" && 
      CONFIG.GOOGLE_MAPS_API_KEY !== "YOUR_GOOGLE_MAPS_API_KEY_HERE") {
    
    console.log('Loading Google Maps API...');
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Add timestamp to URL to prevent caching issues
    script.src += `&v=${new Date().getTime()}`;
    
    // Handle loading errors
    script.onerror = function(error) {
      console.error('Failed to load Google Maps API. Check your API key.', error);
      console.log('Attempted to load from URL:', script.src.replace(CONFIG.GOOGLE_MAPS_API_KEY, 'API_KEY_HIDDEN'));
      handleMapError();
    };
    
    // Add load event for debugging
    script.onload = function() {
      console.log('Google Maps API script loaded successfully');
    };
    
    document.body.appendChild(script);
    console.log('Google Maps API script added to page');
  } else {
    console.warn('Google Maps API key not provided in config.js or invalid');
    // Show the fallback map image if no API key
    handleMapError();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Load Google Maps after the page is ready
  loadGoogleMapsScript();
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

  // Form submission handling for GitHub Pages (static site)
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

  // Function to format form data for email
  function formatFormDataForEmail(formData, formType) {
    let subject = '';
    let body = '';
    
    if (formType === 'booking') {
      subject = 'New Booking Request from ' + formData.name;
      body = 'Booking Details:%0D%0A';
      body += '-----------------%0D%0A';
      body += 'Name: ' + formData.name + '%0D%0A';
      body += 'Email: ' + formData.email + '%0D%0A';
      body += 'Phone: ' + formData.phone + '%0D%0A';
      body += 'Date: ' + formData.date + '%0D%0A';
      body += 'Time: ' + formData.time + '%0D%0A';
      body += 'Service Type: ' + formData['service-type'] + '%0D%0A';
      body += 'Pickup Location: ' + formData.pickup + '%0D%0A';
      body += 'Destination: ' + formData.dropoff + '%0D%0A';
      body += 'Passengers: ' + formData.passengers + '%0D%0A';
      body += 'Notes: ' + (formData.notes || 'None') + '%0D%0A';
    } else if (formType === 'contact') {
      subject = 'New Contact Message from ' + formData.name;
      body = 'Contact Message:%0D%0A';
      body += '---------------%0D%0A';
      body += 'Name: ' + formData.name + '%0D%0A';
      body += 'Email: ' + formData.email + '%0D%0A';
      body += 'Phone: ' + (formData.phone || 'Not provided') + '%0D%0A';
      body += 'Message: ' + formData.message + '%0D%0A';
    }
    
    return { subject, body };
  }

  // Handle the booking form submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = serializeForm(bookingForm);
      console.log('Booking form submitted', formData);
      
      // Store data in localStorage for demo purposes
      localStorage.setItem('lastBooking', JSON.stringify(formData));
      
      // Option 1: Open email client (fallback for static site)
      const { subject, body } = formatFormDataForEmail(formData, 'booking');
      const mailtoLink = `mailto:booking@akhileshcab.com?subject=${subject}&body=${body}`;
      
      // Show confirmation before opening email client
      if (confirm('Since this is a static website hosted on GitHub Pages, we will open your email client to send this booking request. Click OK to proceed.')) {
        window.location.href = mailtoLink;
      }
      
      // Display success message
      successModal.style.display = 'block';
      
      // Clear form
      bookingForm.reset();
    });
  }

  // Handle the contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = serializeForm(contactForm);
      console.log('Contact form submitted', formData);
      
      // Store data in localStorage for demo purposes
      localStorage.setItem('lastContact', JSON.stringify(formData));
      
      // Option 1: Open email client (fallback for static site)
      const { subject, body } = formatFormDataForEmail(formData, 'contact');
      const mailtoLink = `mailto:contact@akhileshcab.com?subject=${subject}&body=${body}`;
      
      // Show confirmation before opening email client
      if (confirm('Since this is a static website hosted on GitHub Pages, we will open your email client to send this message. Click OK to proceed.')) {
        window.location.href = mailtoLink;
      }
      
      // Display success message
      successModal.style.display = 'block';
      
      // Clear form
      contactForm.reset();
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
        this.src = 'images/car-placeholder.svg';
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

  // Google Maps initialization function
  // This function is called when the Google Maps API script has loaded
  window.initMap = function() {
    const mapElement = document.getElementById('map');
    const fallbackImage = document.getElementById('map-fallback');
    
    // Only initialize map if the container exists
    if (mapElement) {
      try {
        // Varanasi, India coordinates
        const varanasi = { lat: 25.3176, lng: 82.9739 };
        
        // Create the map centered on Varanasi
        const map = new google.maps.Map(mapElement, {
          zoom: 12,
          center: varanasi,
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: true,
          mapTypeId: 'roadmap'
        });
        
        // Add a marker for AkhileshCab's location
        const businessLocation = { lat: 25.3176, lng: 82.9739 }; // Center of Varanasi
        const mainMarker = new google.maps.Marker({
          position: businessLocation,
          map: map,
          title: 'AkhileshCab',
          animation: google.maps.Animation.DROP
        });
        
        // Define service area markers
        const serviceLocations = [
          { position: { lat: 25.3108, lng: 83.0107 }, title: 'Dashashwamedh Ghat' },
          { position: { lat: 25.2839, lng: 82.9984 }, title: 'Assi Ghat' },
          { position: { lat: 25.3151, lng: 83.0105 }, title: 'Manikarnika Ghat' },
          { position: { lat: 25.2677, lng: 82.9913 }, title: 'Banaras Hindu University' },
          { position: { lat: 25.3090, lng: 83.0106 }, title: 'Kashi Vishwanath Temple' },
          { position: { lat: 25.4430, lng: 82.8592 }, title: 'Lal Bahadur Shastri Airport' },
          { position: { lat: 25.3319, lng: 82.9730 }, title: 'Varanasi Junction Railway Station' },
          { position: { lat: 25.3791, lng: 83.0322 }, title: 'Sarnath' },
          { position: { lat: 25.2587, lng: 83.0179 }, title: 'Ramnagar' }
        ];
        
        // Add markers for all service locations
        serviceLocations.forEach(location => {
          const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#4285F4',
              fillOpacity: 0.7,
              strokeWeight: 1,
              strokeColor: '#FFFFFF'
            }
          });
          
          // Add info window to each marker
          const infowindow = new google.maps.InfoWindow({
            content: `<div style="font-weight:bold;">${location.title}</div><div>AkhileshCab Service Area</div>`
          });
          
          marker.addListener('click', () => {
            infowindow.open(map, marker);
          });
        });
        
        // Add info window to main marker
        const mainInfoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 200px;">
              <h3 style="margin-top: 0; color: #3366cc;">AkhileshCab</h3>
              <p>Varanasi's Premier Cab Service</p>
              <p>Call: +91 94561 78901</p>
              <a href="#booking" 
                style="display: inline-block; background: #3366cc; color: white; padding: 5px 10px; 
                text-decoration: none; border-radius: 4px; margin-top: 5px;">
                Book Now
              </a>
            </div>
          `
        });
        
        mainMarker.addListener('click', () => {
          mainInfoWindow.open(map, mainMarker);
        });
        
        // Open the main info window by default
        mainInfoWindow.open(map, mainMarker);
        
        // Draw a circle to show the approximate service area
        const cityCircle = new google.maps.Circle({
          strokeColor: '#FF6B6B',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF6B6B',
          fillOpacity: 0.1,
          map: map,
          center: varanasi,
          radius: 15000  // 15km radius - approximate service area
        });
        
        console.log('Google Maps initialized successfully');
        
      } catch (error) {
        console.error('Error initializing Google Maps:', error);
        handleMapError();
      }
    }
  };
  
  // Function to handle map errors and show fallback image
  function handleMapError() {
    const mapElement = document.getElementById('map');
    const fallbackImage = document.getElementById('map-fallback');
    
    if (mapElement && fallbackImage) {
      // Show the fallback image
      fallbackImage.style.display = 'block';
      mapElement.style.height = 'auto';
      console.log('Fallback map image displayed');
    }
  }
  
  // Handle case where Google Maps fails to load
  window.addEventListener('error', function(e) {
    if (e.target.src && e.target.src.includes('maps.googleapis.com')) {
      console.error('Google Maps failed to load');
      handleMapError();
    }
  }, true);
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