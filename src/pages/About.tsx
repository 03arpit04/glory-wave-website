
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6 text-center">
              About Our Clinic
            </h1>
            <p className="text-lg text-gray-600 mb-10 text-center">
              Learn more about Old Glory Dental Clinic and our commitment to exceptional dental care.
            </p>
          </div>
          
          {/* This is a placeholder - the full About page will be implemented later */}
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600">
              This page is coming soon with complete information about our clinic, our history, team, and mission.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
