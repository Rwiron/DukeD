import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "../ui/ImageCarousel";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel images with custom content for each slide
  const carouselSlides = [
    {
      url: "/images/carousel-1.jpg",
      alt: "Construction site with engineers",
      subtitle: "General Construction",
      title: "Building Sustainable Infrastructure",
      description:
        "Duke Developers delivers comprehensive construction solutions with quality craftsmanship and innovative approaches for residential, commercial, and industrial projects.",
    },
    {
      url: "/images/carousel-2.jpg",
      alt: "Project management team",
      subtitle: "Project Management",
      title: "Delivering Excellence On Time",
      description:
        "Our expert project managers ensure seamless execution from planning to completion, optimizing resources and maintaining the highest standards of quality.",
    },
    {
      url: "/images/carousel-4.png",
      alt: "Interior and exterior design",
      subtitle: "Interior & Exterior Design",
      title: "Creating Inspiring Spaces",
      description:
        "We transform environments with thoughtful interior and exterior designs that balance aesthetics, functionality, and client vision for lasting impact.",
    },
    {
      url: "/images/it.png",
      alt: "Software and IT services",
      subtitle: "Software & IT Services",
      title: "Digital Solutions For Growth",
      description:
        "Our technology team develops custom software applications, IT infrastructure, and digital systems that drive efficiency and competitive advantage.",
    },
    {
      url: "/images/enrgy.png",
      alt: "Renewable energy solutions",
      subtitle: "Renewable Energy Solutions",
      title: "Sustainable Power Systems",
      description:
        "We implement innovative renewable energy solutions including solar, wind, and hybrid systems that reduce costs while promoting environmental sustainability.",
    },
    {
      url: "/images/elec.png",
      alt: "Electrical equipment installation",
      subtitle: "Electrical Equipment",
      title: "Powering Your Infrastructure",
      description:
        "From installation to maintenance, our electrical services ensure reliable, efficient, and safe power systems for all your project requirements.",
    },
  ];

  // Handle slide change
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Carousel taking full width */}
      <div className="absolute inset-0 w-full h-full">
        <ImageCarousel
          images={carouselSlides}
          autoSlideInterval={6000}
          className="w-full h-full"
          overlayClassName="bg-gradient-to-b from-black/70 via-black/60 to-black/70"
          onSlideChange={handleSlideChange}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-white"
            >
              <motion.p
                className="text-blue-400 font-semibold text-xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {carouselSlides[currentSlide].subtitle}
              </motion.p>
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {carouselSlides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {carouselSlides[currentSlide].description}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  to="/services"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 hover:scale-105 transform"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition duration-300 hover:scale-105 transform"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
