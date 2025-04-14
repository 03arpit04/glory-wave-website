
import Layout from "@/components/Layout";

const Testimonials = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6 text-center">
              Patient Testimonials
            </h1>
            <p className="text-lg text-gray-600 mb-10 text-center">
              Read what our patients have to say about their experience at Old Glory Dental Clinic.
            </p>
          </div>
          
          {/* This is a placeholder - the full Testimonials page will be implemented later */}
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600">
              This page is coming soon with our complete collection of patient reviews and testimonials.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
