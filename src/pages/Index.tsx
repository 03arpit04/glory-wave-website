
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CallToAction />
    </Layout>
  );
};

export default Index;
