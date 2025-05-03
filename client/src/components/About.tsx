import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Professional Driver",
  "Clean Vehicle",
  "Air Conditioned",
  "24/7 Availability"
];

export default function About() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1617196701537-7329482cc9fe?auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Our cab service" 
              className="rounded-lg shadow-xl w-full h-auto" 
              width="600" 
              height="400"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-bold text-3xl md:text-4xl text-secondary mb-6">
              About Our <span className="text-primary">Service</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              SwiftCab is a premium cab service offering reliable transportation with just one well-maintained vehicle 
              operated by a professional driver with years of experience.
            </p>
            <p className="text-muted-foreground mb-6">
              We pride ourselves on personalized service, punctuality, and a comfortable ride at reasonable rates. 
              Our single-cab approach ensures consistent quality and a familiar face for all your transportation needs.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-primary mr-2 h-5 w-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-secondary font-bold py-3 px-8 transition-all transform hover:scale-105"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
