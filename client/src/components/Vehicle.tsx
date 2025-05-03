import { Car, Check, UserCircle } from "lucide-react";

const vehicleDetails = [
  { label: "Make & Model:", value: "Toyota Camry Hybrid" },
  { label: "Year:", value: "2022" },
  { label: "Passenger:", value: "Up to 4 passengers" },
  { label: "Luggage:", value: "Up to 3 medium suitcases" }
];

const vehicleFeatures = [
  "Air Conditioning",
  "Leather Seats",
  "USB Charging",
  "Bottled Water",
  "Phone Mounts",
  "Sanitized Interior"
];

export default function Vehicle() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-secondary">
            Our <span className="text-primary">Vehicle</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            We take pride in providing a clean, comfortable, and well-maintained vehicle for your journey.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1569240651740-76ebbf1d8560?auto=format&fit=crop&w=800&h=500&q=80" 
              alt="Our comfortable sedan cab" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
              width="800" 
              height="500"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-secondary flex items-center">
                <Car className="text-primary mr-2 h-5 w-5" />
                Vehicle Details
              </h3>
              <ul className="space-y-3">
                {vehicleDetails.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-medium w-32">{detail.label}</span>
                    <span>{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-secondary flex items-center">
                <Check className="text-primary mr-2 h-5 w-5" />
                Vehicle Features
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {vehicleFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-secondary flex items-center">
                <UserCircle className="text-primary mr-2 h-5 w-5" />
                Your Driver
              </h3>
              <p className="mb-3">
                Professional driver with 10+ years of experience and perfect safety record. 
                Licensed, background-checked, and committed to providing exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
