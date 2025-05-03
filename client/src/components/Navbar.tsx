import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { CarTaxiFront, Menu, X } from "lucide-react";

interface NavbarProps {
  isFixed: boolean;
}

export default function Navbar({ isFixed }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navClasses = `w-full py-4 z-50 transition-all duration-300 ${
    isFixed ? "fixed top-0 bg-white shadow-md" : "relative bg-white shadow-md"
  }`;

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Book Now", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={navClasses}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <CarTaxiFront className="text-primary h-7 w-7 mr-2" />
          <Link href="#home" className="font-bold text-2xl text-secondary">
            Akhilesh<span className="text-primary">Cab</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav>
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-medium hover:text-primary transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMobileMenuOpen && (
        <div className="container mt-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 px-4 hover:bg-muted rounded font-medium hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
