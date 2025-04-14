
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-poppins font-bold text-dental-blue mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-10">
          We're sorry, the page you're looking for cannot be found. It may have been moved or doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          Back to Homepage
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
