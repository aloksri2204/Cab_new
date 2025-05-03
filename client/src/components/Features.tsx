import { Check, Clock, Tag, Shield } from "lucide-react";

const features = [
  {
    icon: <Check className="feature-icon" />,
    title: "Premium Service",
    description: "Clean, comfortable vehicle with professional and courteous driver."
  },
  {
    icon: <Clock className="feature-icon" />,
    title: "Always On Time",
    description: "Punctual service guaranteed to get you to your destination on schedule."
  },
  {
    icon: <Tag className="feature-icon" />,
    title: "Fixed Pricing",
    description: "Transparent pricing with no hidden fees or surge charges."
  },
  {
    icon: <Shield className="feature-icon" />,
    title: "Safe Travel",
    description: "Regular vehicle maintenance and safety protocols for your peace of mind."
  }
];

export default function Features() {
  return (
    <section id="services" className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-secondary">
            Why Choose <span className="text-primary">AkhileshCab</span>?
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Experience premium transportation with our professional service tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="service-icon">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
