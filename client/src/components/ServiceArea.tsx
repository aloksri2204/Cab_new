import { useEffect, useRef } from "react";
import { Check, MapPin, Info } from "lucide-react";

// Define Leaflet types to avoid TypeScript errors
declare global {
  interface Window {
    L: any; // Leaflet global object
  }
}

// Coverage areas in Varanasi
const coverageAreas = [
  "Varanasi Ghats Area",
  "Banaras Hindu University",
  "Sarnath",
  "Dashashwamedh Ghat",
  "Lal Bahadur Shastri Airport",
  "Varanasi Cantt Railway Station",
  "Kashi Vishwanath Temple Area",
  "Assi Ghat & Lanka"
];

export default function ServiceArea() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if leaflet is available
    if (window.L && mapContainerRef.current) {
      try {
        // Initialize the map with Varanasi coordinates
        // Varanasi coordinates: 25.3176, 83.0059
        const map = window.L.map(mapContainerRef.current).setView([25.3176, 83.0059], 13);
        
        // Add tile layer (OpenStreetMap)
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Add a marker for the cab service location (near Godowlia, a central location in Varanasi)
        const marker = window.L.marker([25.3109, 83.0107]).addTo(map);
        marker.bindPopup("<b>AkhileshCab Headquarters</b><br>Near Godowlia, Varanasi").openPopup();
        
        // Add markers for key locations in Varanasi
        const dashashwamedh = window.L.marker([25.3065, 83.0156]).addTo(map);
        dashashwamedh.bindPopup("<b>Dashashwamedh Ghat</b><br>Popular tourist spot");
        
        const kashi = window.L.marker([25.3109, 83.0107]).addTo(map);
        kashi.bindPopup("<b>Kashi Vishwanath Temple</b><br>Sacred Hindu temple");
        
        const bhu = window.L.marker([25.2677, 82.9913]).addTo(map);
        bhu.bindPopup("<b>Banaras Hindu University</b>");
        
        const sarnath = window.L.marker([25.3824, 83.0256]).addTo(map);
        sarnath.bindPopup("<b>Sarnath</b><br>Buddhist pilgrimage site");
        
        // Add a circle to show the service area (15 km radius)
        window.L.circle([25.3109, 83.0107], {
          color: '#FFCC00',
          fillColor: '#FFCC00',
          fillOpacity: 0.2,
          radius: 15000 // 15 km in meters
        }).addTo(map);
        
        return () => {
          // Clean up the map when component unmounts
          map.remove();
        };
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    }
  }, []);
  
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-secondary">
            Service <span className="text-primary">Area</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            We provide service throughout the city and surrounding areas.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Map Container */}
          <div id="map" ref={mapContainerRef} className="h-80 bg-gray-200 relative">
            {/* Fallback content if map doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center p-6">
                <MapPin className="text-primary h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Loading Map...</p>
                <p className="text-muted-foreground">
                  We service the entire metropolitan area and up to 30 miles outside city limits.
                </p>
              </div>
            </div>
            
            {/* Add Leaflet CSS */}
            <link 
              rel="stylesheet" 
              href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
              integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
              crossOrigin=""
            />
            
            {/* Add Leaflet JS */}
            <script
              src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
              integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
              crossOrigin=""
            ></script>
          </div>
          
          <div className="p-6">
            <h3 className="font-semibold text-xl mb-4 text-secondary">Coverage Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coverageAreas.map((area, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="flex items-start">
                <Info className="text-primary mt-1 mr-2 h-5 w-5" />
                <span>
                  For destinations beyond our standard service area, please contact us for availability and special rates.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
