
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Book Appointment", path: "/book" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/520f915c-6d61-490c-9ad3-87ad606b1d93.png"
              alt="Old Glory Dental Clinic"
              className="h-12 mr-3"
            />
            <div className="hidden md:block">
              <h1 className="font-poppins font-bold text-xl text-dental-blue">
                Old Glory
              </h1>
              <p className="text-sm text-dental-green font-medium">
                Dental Clinic
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md font-medium text-sm transition-colors hover:text-dental-blue",
                  location.pathname === item.path
                    ? "text-dental-blue"
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:+11234567890"
              className="flex items-center text-dental-blue font-medium mr-6"
            >
              <Phone size={18} className="mr-2" />
              <span>(123) 456-7890</span>
            </a>
            <Link to="/book" className="btn-primary">
              Book Appointment
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-50 flex flex-col pt-20 px-4 lg:hidden transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 border-b border-gray-100 font-medium",
                  location.pathname === item.path
                    ? "text-dental-blue"
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col space-y-4">
            <a
              href="tel:+11234567890"
              className="flex items-center justify-center text-dental-blue font-medium py-3"
            >
              <Phone size={18} className="mr-2" />
              <span>(123) 456-7890</span>
            </a>
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
