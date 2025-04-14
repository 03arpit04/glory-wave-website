
import { Link } from "react-router-dom";
import {
  Smile,
  Sparkles,
  Scissors,
  Baby,
  Stethoscope,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Smile className="h-8 w-8" />,
    title: "General Dentistry",
    description:
      "Regular check-ups, cleanings, and preventative care to maintain your oral health.",
    color: "bg-blue-100",
    textColor: "text-dental-blue",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with our teeth whitening, veneers, and cosmetic bonding services.",
    color: "bg-green-100",
    textColor: "text-dental-green",
  },
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking replacements for missing teeth to restore your smile.",
    color: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Orthodontics",
    description:
      "Straighten your teeth and correct your bite with our orthodontic treatments.",
    color: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Pediatric Dentistry",
    description:
      "Gentle, specialized dental care for your children in a kid-friendly environment.",
    color: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Emergency Care",
    description:
      "Urgent dental care when you need it most with same-day appointments available.",
    color: "bg-red-100",
    textColor: "text-red-600",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive dental care services to meet all your oral
            health needs with a gentle and personalized approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-5",
                  service.color
                )}
              >
                <div className={cn(service.textColor)}>{service.icon}</div>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-dental-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center text-dental-blue font-medium hover:underline"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
