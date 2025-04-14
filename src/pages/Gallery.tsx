
import Layout from "@/components/Layout";

const Gallery = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6 text-center">
              Our Gallery
            </h1>
            <p className="text-lg text-gray-600 mb-10 text-center">
              Browse through images of our clinic, our team, and beautiful smile transformations.
            </p>
          </div>
          
          {/* This is a placeholder - the full Gallery page will be implemented later */}
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600">
              This page is coming soon with our complete gallery of dental work and clinic photos.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
