import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "\"The driver was punctual, professional, and the car was immaculate. Best cab service I've used in years. Highly recommended!\"",
    name: "Michael Roberts",
    role: "Regular customer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=48&h=48&q=80",
    rating: 5
  },
  {
    text: "\"I use SwiftCab for my weekly airport trips. Always on time, and the consistent driver means I get personalized service every time.\"",
    name: "Sarah Johnson",
    role: "Business traveler",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=48&h=48&q=80",
    rating: 4.5
  },
  {
    text: "\"Booked the hourly service for a day of appointments. The driver was courteous, the car comfortable, and the fixed pricing meant no surprises.\"",
    name: "David Chen",
    role: "New customer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=48&h=48&q=80",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-secondary">
            Happy <span className="text-primary">Clients</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            See what our customers have to say about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="text-primary flex">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                      <Star key={i} className="fill-current h-4 w-4" />
                    ))}
                    {testimonial.rating % 1 > 0 && (
                      <div className="relative">
                        <Star className="text-gray-300 h-4 w-4" />
                        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${(testimonial.rating % 1) * 100}%` }}>
                          <Star className="fill-current text-primary h-4 w-4" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
