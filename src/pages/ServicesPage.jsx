import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import Service3DCard from "../components/ui/Service3DCard";
import FlipCard from "../components/ui/FlipCard";
import { MovingCards } from "../components/ui/moving-cards";
import { LazyImage } from "../components/ui/LazyImage";

// Custom link component to handle scrolling to top
const ServiceLink = ({ to, children, className }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const mainServices = [
    {
      id: "construction",
      title: "General Construction",
      description:
        "From commercial buildings to residential homes, we ensure top-quality construction tailored to your needs.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
      category: "construction",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: "project-management",
      title: "Project Management",
      description:
        "We manage your projects from inception to completion, optimizing resources and mitigating risks effectively.",
      image:
        "https://constructionreviewonline.com/knowhow/wp-content/uploads/2018/02/Engineering-project-management.jpg",
      category: "construction",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      id: "software",
      title: "Software & IT Services",
      description:
        "From software development to IT consulting, we deliver tailored technology solutions for businesses.",
      image:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
      category: "software",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: "design",
      title: "Interior & Exterior Design",
      description:
        "Experience exceptional interior and exterior designs that blend aesthetics with functionality.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      category: "design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy Solutions",
      description:
        "We provide advanced solutions for renewable energy, ensuring a greener and more sustainable future.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
      category: "energy",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: "equipment",
      title: "Electrical Equipment Supply",
      description:
        "From smart meters to transformers, we supply electrical equipment tailored to your specifications.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop",
      category: "energy",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
  ];

  const additionalServices = [
    {
      id: "bim",
      title: "Building Information Modeling (BIM)",
      description:
        "Advanced 3D modeling to improve planning and construction efficiency.",
    },
    {
      id: "solar",
      title: "Solar Panel Installation",
      description:
        "Professional installation of high-efficiency solar panels for homes and businesses.",
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      description:
        "Tailor-made software solutions designed to address specific business challenges.",
    },
    {
      id: "sustainable-architecture",
      title: "Sustainable Architecture",
      description:
        "Environmentally conscious architectural designs that reduce carbon footprint.",
    },
    {
      id: "smart-home",
      title: "Smart Home Integration",
      description:
        "Innovative solutions that transform ordinary homes into connected, intelligent living spaces.",
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "construction", name: "Construction" },
    { id: "software", name: "Software & IT" },
    { id: "design", name: "Design" },
    { id: "energy", name: "Energy" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? mainServices
      : mainServices.filter((service) => service.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <SectionHeading
          subtitle="Our Services"
          title="What We Offer"
          description="Discover our comprehensive range of services designed to meet your needs across construction, software development, and renewable energy sectors."
        />

        {/* Featured Services Grid */}
        {/* <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {mainServices.slice(0, 3).map((service) => (
            <div key={service.id} className="relative h-[300px]">
              <FlipCard
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                slug={service.id}
              />
              {service.id === "construction" && (
                <div className="absolute -top-2 -right-2 z-10">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    Featured
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div> */}

        {/* Category Filter */}
        <div className="mt-20">
          {/* <h3 className="text-2xl font-bold text-gray-800 text-center mb-8"></h3> */}

          <motion.h3
            className="text-2xl font-bold text-gray-800 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Explore Our Services
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => {
                  setActiveCategory(category.id);
                  if (category.id !== "all") {
                    const element = document.getElementById(category.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="h-[400px]"
            >
              <Link
                to={`/services/${service.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <FlipCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  icon={service.icon}
                  slug={service.id}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Moving Cards for Additional Services */}
        <div className="mt-24 mb-12">
          <motion.h3
            className="text-2xl font-bold text-gray-800 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Additional Specialized Services
          </motion.h3>

          <MovingCards
            items={additionalServices.map((service, index) => (
              <div
                key={index}
                className="w-[300px] h-[200px] rounded-xl bg-white border border-gray-200 p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              >
                <h4 className="text-lg font-bold text-gray-800">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-4 text-blue-600 text-sm font-medium inline-flex items-center"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            ))}
            direction="left"
            speed="slow"
            className="py-4"
          />
        </div>

        {/* Consultation CTA */}
        <motion.div
          className="mt-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-10 text-white text-center shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-900/0 to-slate-800/80 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
              Our team of experts is ready to help you with a personalized
              service package tailored to your specific requirements.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
