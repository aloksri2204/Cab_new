import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Circle } from "lucide-react";

const pricingPlans = [
  {
    title: "City Rides",
    price: "₹800",
    unit: "/ride",
    features: [
      "Up to 10 km within Varanasi city limits",
      "No waiting charges for first 5 minutes",
      "Direct route to destination",
      "Comfortable air-conditioned ride"
    ],
    popular: false
  },
  {
    title: "Ghat & Temple Tour",
    price: "₹2,500",
    unit: "/4 hours",
    features: [
      "Visit main ghats and temples",
      "Unlimited stops within Varanasi",
      "Wait time included",
      "Perfect for sightseeing",
      "Complimentary bottled water"
    ],
    popular: true
  },
  {
    title: "Airport Transfer",
    price: "₹1,200",
    unit: "/one-way",
    features: [
      "Any location to/from Lal Bahadur Shastri Airport",
      "Flight monitoring",
      "30 minutes waiting time included",
      "Luggage assistance"
    ],
    popular: false
  }
];

const additionalCharges = [
  "Extra distance: ₹50 per kilometer",
  "Waiting time: ₹25 per minute",
  "Late night (10 PM - 6 AM): +₹300 surcharge",
  "Additional stops: ₹150 per stop"
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-secondary">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Transparent fares with no hidden charges or surge pricing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`overflow-hidden transition-transform hover:scale-105 ${
                plan.popular ? "scale-105 z-10 border-2 border-primary" : ""
              }`}
            >
              <CardHeader className="bg-primary py-6 px-6 text-center relative">
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-3">
                    POPULAR
                  </span>
                )}
                <h3 className="font-bold text-2xl text-secondary">{plan.title}</h3>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-green-600 mt-1 mr-2 h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  className={`w-full ${
                    plan.popular 
                      ? "bg-accent hover:bg-accent/90 text-white" 
                      : "bg-secondary hover:bg-secondary/90 text-white"
                  }`}
                >
                  <a href="#booking">Book Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-xl mb-4 text-secondary">Additional Charges:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalCharges.map((charge, index) => (
              <div key={index} className="flex items-start">
                <Circle className="text-xs text-primary mt-2 mr-2 h-3 w-3" />
                <span>{charge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
