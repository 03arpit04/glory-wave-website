
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    text: "I've been going to Old Glory Dental for years, and I've always had a positive experience. The staff is friendly, the facilities are clean, and Dr. Thompson is incredibly skilled and gentle. Highly recommend!",
  },
  {
    name: "Michael Roberts",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "After a bad experience at another dental office, I was nervous about finding a new dentist. Old Glory Dental exceeded my expectations. They took the time to address all my concerns and the procedure was painless!",
  },
  {
    name: "Jennifer Martinez",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    text: "The entire team at Old Glory Dental is exceptional! From the front desk staff to the hygienists and dentists, everyone is professional and caring. My kids actually look forward to their dental visits now.",
  },
  {
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4,
    text: "I had a dental emergency and Old Glory Dental got me in the same day. Dr. Anderson was thorough in explaining my options and the procedure went smoothly. I'm grateful for their prompt and expert care.",
  },
];

const TestimonialsPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. See what our patients have to say about their experience at Old Glory Dental Clinic.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="rounded-full border-4 border-dental-lightBlue object-cover w-full h-full"
                      />
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <h4 className="font-poppins font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md rounded-full p-2 text-gray-600 hover:text-dental-blue focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md rounded-full p-2 text-gray-600 hover:text-dental-blue focus:outline-none"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-dental-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/testimonials" className="btn-secondary">
            Read More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
