
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/520f915c-6d61-490c-9ad3-87ad606b1d93.png"
                alt="Old Glory Dental Clinic"
                className="h-10 mr-3"
              />
              <div>
                <h3 className="font-poppins font-bold text-lg text-dental-blue">Old Glory</h3>
                <p className="text-sm text-dental-green">Dental Clinic</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Providing exceptional dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dental-blue flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dental-blue flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dental-blue flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-dental-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-gray-800">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-dental-blue transition-colors">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-dental-blue transition-colors">
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-dental-blue mr-3 mt-1 shrink-0" size={18} />
                <span className="text-gray-600">
                  123 Dental Street, Suite 101<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-dental-blue mr-3 shrink-0" size={18} />
                <a href="tel:+11234567890" className="text-gray-600 hover:text-dental-blue">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-dental-blue mr-3 shrink-0" size={18} />
                <a href="mailto:info@oldglorydental.com" className="text-gray-600 hover:text-dental-blue">
                  info@oldglorydental.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="text-dental-blue mr-3 mt-1 shrink-0" size={18} />
                <span className="text-gray-600">
                  Mon-Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 4:00 PM<br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Old Glory Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
