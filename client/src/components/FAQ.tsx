import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 24 hours in advance to ensure availability, especially for airport transfers or hourly service. For same-day service, please call us directly to check availability."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards, and mobile payment options including Apple Pay and Google Pay. Payment is collected at the end of your ride."
  },
  {
    question: "What if my plans change after booking?",
    answer: "We understand plans change. You can modify or cancel your booking up to 2 hours before the scheduled pickup without any charge. For changes less than 2 hours before pickup, please call us directly."
  },
  {
    question: "Do you provide child seats?",
    answer: "Yes, we can provide child seats upon request. Please mention this in the special instructions when booking or call us directly to arrange. There is a small additional fee of $5 per child seat."
  },
  {
    question: "Is your vehicle wheelchair accessible?",
    answer: "Our current vehicle is not specially equipped for wheelchair access. However, we can assist with folding wheelchairs that can fit in the trunk. For fully accessible transportation needs, we can refer you to specialized services."
  }
];

export default function FAQ() {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-secondary">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Find answers to common questions about our service.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-muted-foreground">Still have questions? Contact us directly.</p>
          <Button 
            asChild
            className="mt-4 bg-primary hover:bg-primary/90 text-secondary font-bold py-3 px-8 transition-all transform hover:scale-105"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
