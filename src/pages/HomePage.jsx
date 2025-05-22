import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Services from "../components/sections/Services";
import AboutSection from "../components/sections/AboutSection";
import Testimonials from "../components/sections/Testimonials";
import Stats from "../components/sections/Stats";
import CTA from "../components/sections/CTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
