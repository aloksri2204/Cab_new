// Configuration with user prompt for API key
(function() {
  // Check if we already have a stored API key
  let apiKey = localStorage.getItem('akhileshcab_maps_api_key');
  
  // If no API key is stored, prompt the user
  if (!apiKey) {
    // Only prompt if we're on the actual site, not during development
    if (window.location.hostname !== 'localhost' && 
        window.location.hostname !== '127.0.0.1') {
      
      setTimeout(() => {
        const userKey = prompt(
          "Please enter your Google Maps API key to view the interactive map.\n" +
          "This will be stored locally on your device and not shared with anyone else."
        );
        
        if (userKey && userKey.trim() !== '') {
          localStorage.setItem('akhileshcab_maps_api_key', userKey);
          apiKey = userKey;
          // Reload the page to apply the key
          window.location.reload();
        }
      }, 1000); // Slight delay to let the page load first
    }
  }
  
  // Set up the configuration
  window.CONFIG = {
    GOOGLE_MAPS_API_KEY: apiKey || "",
    WEBSITE_VERSION: "1.0.0"
  };
})();