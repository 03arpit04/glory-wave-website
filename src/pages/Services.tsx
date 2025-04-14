
import Layout from "@/components/Layout";

const Services = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6 text-center">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 mb-10 text-center">
              Comprehensive dental services tailored to meet all your oral health needs.
            </p>
          </div>
          
          {/* This is a placeholder - the full Services page will be implemented later */}
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600">
              This page is coming soon with detailed information about all our dental services.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
