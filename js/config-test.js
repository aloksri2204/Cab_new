// Config test file for AkhileshCab website
// This file uses your direct API key from environment variables

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// Write the actual key to the document for testing purposes
document.addEventListener('DOMContentLoaded', function() {
  // Create a test div
  const testDiv = document.createElement('div');
  testDiv.style.padding = '20px';
  testDiv.style.margin = '20px';
  testDiv.style.border = '1px solid #ccc';
  testDiv.style.borderRadius = '5px';
  
  // Add a heading
  const heading = document.createElement('h2');
  heading.textContent = 'Google Maps API Key Test';
  testDiv.appendChild(heading);
  
  // Create result paragraph
  const resultPara = document.createElement('p');
  if (GOOGLE_MAPS_API_KEY) {
    resultPara.textContent = `API Key exists and has length: ${GOOGLE_MAPS_API_KEY.length}`;
    resultPara.style.color = 'green';
    
    // Show first and last few chars
    const keyPreview = document.createElement('p');
    keyPreview.textContent = `Key preview: ${GOOGLE_MAPS_API_KEY.substring(0, 4)}...${GOOGLE_MAPS_API_KEY.substring(GOOGLE_MAPS_API_KEY.length - 4)}`;
    testDiv.appendChild(keyPreview);
    
    // Add a test button
    const testButton = document.createElement('button');
    testButton.textContent = 'Test API Key';
    testButton.style.padding = '8px 16px';
    testButton.style.marginTop = '10px';
    testButton.style.cursor = 'pointer';
    
    testButton.onclick = function() {
      testMapsAPI(GOOGLE_MAPS_API_KEY);
    };
    
    testDiv.appendChild(testButton);
  } else {
    resultPara.textContent = 'API Key is missing or empty';
    resultPara.style.color = 'red';
  }
  
  testDiv.appendChild(resultPara);
  
  // Add to document
  document.body.appendChild(testDiv);
});

function testMapsAPI(apiKey) {
  const resultDiv = document.createElement('div');
  resultDiv.id = 'api-test-result';
  resultDiv.style.marginTop = '10px';
  resultDiv.style.padding = '10px';
  resultDiv.style.border = '1px solid #ddd';
  resultDiv.innerHTML = 'Testing API key...';
  
  // Remove any existing result div
  const existingResult = document.getElementById('api-test-result');
  if (existingResult) {
    existingResult.remove();
  }
  
  // Add the new result div
  document.body.appendChild(resultDiv);
  
  // Test the API by loading the script
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=testMapCallback`;
  script.async = true;
  script.defer = true;
  
  // Handle errors
  script.onerror = function() {
    resultDiv.innerHTML = 'Error: Failed to load Google Maps API. The API key may be invalid.';
    resultDiv.style.color = 'red';
  };
  
  // Define the callback
  window.testMapCallback = function() {
    resultDiv.innerHTML = 'Success! The Google Maps API loaded successfully.';
    resultDiv.style.color = 'green';
    
    // Try to create a map as additional verification
    const mapDiv = document.createElement('div');
    mapDiv.style.height = '200px';
    mapDiv.style.marginTop = '10px';
    resultDiv.appendChild(mapDiv);
    
    try {
      const map = new google.maps.Map(mapDiv, {
        center: { lat: 25.3176, lng: 82.9739 }, // Varanasi
        zoom: 10
      });
      
      // Add a success message
      const successMsg = document.createElement('p');
      successMsg.textContent = '✓ Map created successfully!';
      successMsg.style.color = 'green';
      resultDiv.appendChild(successMsg);
    } catch (error) {
      const errorMsg = document.createElement('p');
      errorMsg.textContent = `Error creating map: ${error.message}`;
      errorMsg.style.color = 'red';
      resultDiv.appendChild(errorMsg);
    }
  };
  
  document.body.appendChild(script);
}