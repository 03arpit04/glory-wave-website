
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dental-blue to-dental-green text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
          Ready to Schedule Your Visit?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-10 opacity-90">
          Contact us today to book your appointment with our expert dental team.
          We look forward to helping you achieve your best smile!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/book"
            className="bg-white text-dental-blue font-poppins font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
          >
            Book an Appointment
          </Link>
          <a
            href="tel:+11234567890"
            className="flex items-center text-white font-medium hover:underline"
          >
            <Phone size={20} className="mr-2" />
            (123) 456-7890
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
