import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center taxi-pattern">
      <div className="absolute inset-0 bg-secondary bg-opacity-75"></div>
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Your <span className="text-primary">Reliable Ride</span>, Just a Click Away
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Professional cab service with fixed rates and comfortable rides, serving the entire city area 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              variant="destructive" 
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 transition-all transform hover:scale-105"
            >
              <a href="#booking">Book Your Ride Now</a>
            </Button>
            <Button 
              asChild
              size="lg" 
              className="bg-primary text-secondary font-bold py-3 px-8 transition-all hover:bg-primary/90 transform hover:scale-105"
            >
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
