
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-dental-lightBlue py-16 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
              Your Healthy Smile <br />
              <span className="text-gradient">Starts Here</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              At Old Glory Dental Clinic, we combine advanced technology with compassionate care
              to provide you with the best dental experience possible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book" className="btn-primary">
                Book an Appointment
              </Link>
              <Link
                to="/services"
                className="flex items-center text-dental-blue font-medium px-6 py-3 hover:underline"
              >
                Our Services
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-dental-blue opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-dental-green opacity-10 blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop"
                alt="Dental Care"
                className="w-full h-auto transform scale-105 transition-transform duration-700 hover:scale-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L60,64C120,64,240,64,360,53.3C480,43,600,21,720,26.7C840,32,960,64,1080,80C1200,96,1320,96,1380,96L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
