import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyImage } from "../components/ui/LazyImage";

// This would typically come from an API or database
const serviceDetails = {
  construction: {
    title: "General Construction",
    description:
      "From commercial buildings to residential homes, we ensure top-quality construction tailored to your needs.",
    longDescription:
      "Our General Construction services cover everything from large commercial projects to custom residential homes. With decades of experience in the industry, our team of certified professionals ensures that every project is completed to the highest standards of quality and safety. We manage the entire process from initial planning and design to the final inspection, making sure your vision becomes reality while staying within budget and timeline constraints.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Commercial building construction",
      "Residential home building",
      "Renovations and remodeling",
      "Construction management",
      "Design-build services",
      "Green building practices",
    ],
    benefits: [
      "Expert craftmanship and attention to detail",
      "Timely project completion",
      "Transparent communication throughout the process",
      "Adherence to safety standards and building codes",
      "Sustainable construction methods",
    ],
    caseStudyImages: [
      "https://constructiontoday.co.ke/wp-content/uploads/2021/05/GettyImages-153937471.jpg",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  "project-management": {
    title: "Project Management",
    description:
      "We manage your projects from inception to completion, optimizing resources and mitigating risks effectively.",
    longDescription:
      "Our Project Management services provide comprehensive oversight for construction and development projects of all sizes. We coordinate every aspect of your project, from planning and budgeting to scheduling and quality control. Our experienced project managers act as your advocate throughout the process, ensuring that all work meets specifications and is completed efficiently. We focus on communication, cost management, and risk mitigation to deliver successful outcomes.",
    image:
      "https://constructionreviewonline.com/knowhow/wp-content/uploads/2018/02/Engineering-project-management.jpg",
    features: [
      "Project planning and scheduling",
      "Budget development and management",
      "Contract administration",
      "Quality control processes",
      "Risk assessment and mitigation",
      "Stakeholder communication",
    ],
    benefits: [
      "Reduced project costs through efficient resource allocation",
      "Minimized delays with proactive problem-solving",
      "Consistent quality control throughout the project",
      "Transparent reporting and documentation",
      "Streamlined communication between all parties",
    ],
    caseStudyImages: [
      "https://images.unsplash.com/photo-1664574654529-b60630f33fdb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  software: {
    title: "Software & IT Services",
    description:
      "From software development to IT consulting, we deliver tailored technology solutions for businesses.",
    longDescription:
      "Our Software & IT Services team develops custom digital solutions that drive business growth and operational efficiency. Whether you need a mobile application, enterprise software, or IT infrastructure support, we deliver technology solutions that align with your business objectives. Our development process is collaborative and transparent, ensuring that the final product meets your specific requirements while providing an exceptional user experience.",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Custom software development",
      "Mobile application development",
      "Web development and design",
      "IT consulting and strategy",
      "System integration",
      "Cloud solutions and migration",
    ],
    benefits: [
      "Tailored solutions that address specific business challenges",
      "Improved operational efficiency through automation",
      "Enhanced customer engagement with intuitive interfaces",
      "Scalable architecture that grows with your business",
      "Ongoing support and maintenance",
    ],
    caseStudyImages: [
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  design: {
    title: "Interior & Exterior Design",
    description:
      "Experience exceptional interior and exterior designs that blend aesthetics with functionality.",
    longDescription:
      "Our Interior & Exterior Design services transform spaces into beautiful, functional environments that reflect your unique style and meet your specific needs. Our team of experienced designers works closely with clients to understand their vision, preferences, and requirements, then creates comprehensive design plans that balance aesthetics with practicality. From concept development to material selection and final implementation, we handle all aspects of the design process.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Interior space planning and design",
      "Exterior facade and landscape design",
      "Commercial and residential design",
      "Sustainable design solutions",
      "Material and finish selection",
      "3D visualization and modeling",
    ],
    benefits: [
      "Spaces that align perfectly with your lifestyle or brand",
      "Enhanced functionality and flow in your environment",
      "Increased property value through professional design",
      "Access to exclusive materials and products",
      "Cohesive aesthetic throughout your space",
    ],
    caseStudyImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  "renewable-energy": {
    title: "Renewable Energy Solutions",
    description:
      "We provide advanced solutions for renewable energy, ensuring a greener and more sustainable future.",
    longDescription:
      "Our Renewable Energy Solutions help businesses and homeowners reduce their carbon footprint while saving on energy costs. We specialize in the design, installation, and maintenance of solar, wind, and other renewable energy systems. Our team conducts thorough assessments to determine the most efficient and cost-effective solutions for your specific location and energy needs, then manages the entire implementation process from permitting to final connection.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Solar panel installation and maintenance",
      "Wind energy solutions",
      "Energy storage systems",
      "Energy efficiency audits and upgrades",
      "Smart energy management systems",
      "Off-grid power solutions",
    ],
    benefits: [
      "Reduced energy costs and long-term savings",
      "Decreased environmental impact",
      "Energy independence and reliability",
      "Potential tax incentives and rebates",
      "Increased property value",
    ],
    caseStudyImages: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  equipment: {
    title: "Electrical Equipment Supply",
    description:
      "From smart meters to transformers, we supply electrical equipment tailored to your specifications.",
    longDescription:
      "Our Electrical Equipment Supply service provides high-quality electrical components and systems for commercial, industrial, and residential applications. We source equipment from leading manufacturers and offer expert guidance to help you select the right products for your specific needs. Our comprehensive inventory includes everything from basic electrical supplies to specialized equipment for renewable energy systems and smart building technology.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Smart meters and monitoring equipment",
      "Transformers and power distribution equipment",
      "Lighting systems and controls",
      "Generators and backup power solutions",
      "Renewable energy components",
      "Electrical safety equipment",
    ],
    benefits: [
      "Access to high-quality equipment from trusted manufacturers",
      "Expert guidance in product selection",
      "Competitive pricing through established supplier relationships",
      "Reliable delivery and logistics management",
      "Technical support for installed equipment",
    ],
    caseStudyImages: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop",
      "https://www.eprmagazine.com/wp-content/uploads/2021/04/Distribution-Transformer.jpg",
      "https://images.unsplash.com/photo-1495954380655-01609180eda3?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  // Additional specialized services
  bim: {
    title: "Building Information Modeling (BIM)",
    description:
      "Advanced 3D modeling to improve planning and construction efficiency.",
    longDescription:
      "Our Building Information Modeling (BIM) service creates detailed 3D digital representations of buildings and infrastructure. This advanced technology allows stakeholders to visualize, plan, and manage projects more effectively. BIM increases coordination between different disciplines, reduces errors and clashes, improves cost estimates, and enables better decision-making throughout the construction process.",
    image:
      "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&w=1000&auto=format&fit=crop",
    features: [
      "3D visualization and design coordination",
      "Clash detection and resolution",
      "Construction sequence simulation",
      "Quantity takeoff and cost estimation",
      "Facility management integration",
      "Project lifecycle documentation",
    ],
    benefits: [
      "Reduced design errors and construction rework",
      "Improved project cost forecasting and control",
      "Enhanced collaboration among project teams",
      "Optimized construction sequencing and scheduling",
      "Valuable asset data for long-term facility management",
    ],
    caseStudyImages: [
      // "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  solar: {
    title: "Solar Panel Installation",
    description:
      "Professional installation of high-efficiency solar panels for homes and businesses.",
    longDescription:
      "Our Solar Panel Installation service provides end-to-end solutions for residential and commercial properties. We handle everything from initial site assessment and system design to installation and ongoing maintenance. Our team uses only high-quality, efficient solar panels and components to ensure maximum energy production and system longevity.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Site assessment and solar potential analysis",
      "Custom system design and engineering",
      "High-efficiency panel selection and installation",
      "Inverter and battery storage integration",
      "Permitting and utility interconnection",
      "Monitoring system setup and maintenance",
    ],
    benefits: [
      "Significant reduction in electricity bills",
      "Return on investment typically within 5-10 years",
      "Increased property value",
      "Protection against rising energy costs",
      "Reduced carbon footprint and environmental impact",
    ],
    caseStudyImages: [
      "https://images.unsplash.com/photo-1559302995-f65e857daa3a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545209463-0d1500fb5477?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  "custom-software": {
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions designed to address specific business challenges.",
    longDescription:
      "Our Custom Software Development service creates bespoke applications tailored to your unique business requirements. We follow an agile development process, working closely with clients from initial concept and requirements gathering through development, testing, and deployment. Our software solutions are designed to streamline operations, increase efficiency, and provide a competitive advantage.",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Requirements analysis and solution design",
      "Agile development methodology",
      "Cross-platform compatibility",
      "Scalable architecture",
      "Comprehensive testing and quality assurance",
      "Ongoing support and maintenance",
    ],
    benefits: [
      "Solutions perfectly aligned with your specific needs",
      "Improved operational efficiency and productivity",
      "Enhanced data security and compliance",
      "Integration with existing systems and workflows",
      "Long-term scalability to accommodate business growth",
    ],
    caseStudyImages: [
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  "sustainable-architecture": {
    title: "Sustainable Architecture",
    description:
      "Environmentally conscious architectural designs that reduce carbon footprint.",
    longDescription:
      "Our Sustainable Architecture service creates environmentally responsible buildings that minimize energy consumption and environmental impact. We integrate passive design strategies, renewable energy systems, sustainable materials, and efficient water management to create structures that are both environmentally friendly and aesthetically pleasing. Our approach considers the entire lifecycle of the building, from construction to operation and eventual decommissioning.",
    image:
      "https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Passive solar design and natural ventilation",
      "Energy modeling and performance optimization",
      "Sustainable material selection",
      "Water conservation and management systems",
      "Green roof and living wall integration",
      "LEED and other certification guidance",
    ],
    benefits: [
      "Reduced operational energy costs",
      "Healthier indoor environment for occupants",
      "Minimized environmental impact",
      "Compliance with green building standards",
      "Enhanced reputation and property value",
    ],
    caseStudyImages: [
      "https://images.unsplash.com/photo-1489171078254-c3365a7e8afd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  "smart-home": {
    title: "Smart Home Integration",
    description:
      "Innovative solutions that transform ordinary homes into connected, intelligent living spaces.",
    longDescription:
      "Our Smart Home Integration service transforms regular homes into intelligent, connected environments that enhance comfort, convenience, security, and energy efficiency. We design and install comprehensive systems that allow homeowners to control lighting, climate, entertainment, security, and more through intuitive interfaces and voice commands. Our solutions are customized to each client's lifestyle and preferences, with a focus on reliability and ease of use.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Centralized control systems and intuitive interfaces",
      "Lighting automation and scene setting",
      "Climate control optimization",
      "Smart security and surveillance",
      "Entertainment system integration",
      "Voice and mobile app control",
    ],
    benefits: [
      "Enhanced comfort and convenience",
      "Increased energy efficiency and cost savings",
      "Improved home security and peace of mind",
      "Seamless integration of multiple systems",
      "Future-proof technology that can evolve with needs",
    ],
    caseStudyImages: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570222094288-84f5a0a511cf?q=80&w=1000&auto=format&fit=crop",
    ],
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts or slug changes
    window.scrollTo(0, 0);

    // Simulate API fetch
    setTimeout(() => {
      setService(serviceDetails[slug]);
      setLoading(false);
    }, 500);
  }, [slug]);

  // Function to handle navigation to another service
  const handleServiceNavigation = (serviceKey) => {
    navigate(`/services/${serviceKey}`);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Service not found
        </h2>
        <p className="text-gray-600 mb-8">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/services"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-slate-900/40 to-slate-900/70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <motion.span
              className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full inline-block mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")}
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">{service.description}</p>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </motion.div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.longDescription}
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Approach
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Duke Developers, we believe in a collaborative approach that
                prioritizes your needs and preferences. Our{" "}
                {service.title.toLowerCase()} service follows a structured
                methodology that ensures quality results:
              </p>

              <ol className="list-decimal pl-6 mb-10 space-y-2 text-gray-600">
                <li className="pl-2">
                  Comprehensive consultation to understand your specific
                  requirements
                </li>
                <li className="pl-2">
                  Detailed planning and strategy development
                </li>
                <li className="pl-2">
                  Transparent execution with regular progress updates
                </li>
                <li className="pl-2">Rigorous quality control and testing</li>
                <li className="pl-2">
                  Final delivery with ongoing support as needed
                </li>
              </ol>
            </motion.div>

            {/* Case Studies/Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.caseStudyImages.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <LazyImage
                      src={image}
                      alt={`${service.title} project ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-gray-100 rounded-xl p-8 shadow-md sticky top-28"
            >
              {" "}
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {" "}
                Key Features{" "}
              </h3>{" "}
              <div className="w-12 h-0.5 bg-blue-500 mb-6"></div>{" "}
              <ul className="mb-10 space-y-3">
                {" "}
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-3 flex-shrink-0"></span>{" "}
                    <span className="text-gray-600 text-sm">{feature}</span>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
              <h3 className="text-xl font-bold text-gray-800 mb-6">Benefits</h3>{" "}
              <div className="w-12 h-0.5 bg-green-500 mb-6"></div>{" "}
              <ul className="mb-10 space-y-3">
                {" "}
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-3 flex-shrink-0"></span>{" "}
                    <span className="text-gray-600 text-sm">{benefit}</span>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 rounded-lg">
                {" "}
                <h4 className="font-bold text-lg mb-3">
                  {" "}
                  Ready to get started?{" "}
                </h4>{" "}
                <p className="mb-6 text-sm text-gray-300">
                  {" "}
                  Contact us today for a free consultation about your{" "}
                  {service.title.toLowerCase()} needs.{" "}
                </p>{" "}
                <button className="w-full py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300">
                  {" "}
                  Request a Quote{" "}
                </button>{" "}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Related Services */}
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Explore Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(serviceDetails)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relService]) => (
                <motion.div
                  key={key}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    onClick={() => handleServiceNavigation(key)}
                    className="cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <LazyImage
                        src={relService.image}
                        alt={relService.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full">
                          {key.charAt(0).toUpperCase() +
                            key.slice(1).replace(/-/g, " ")}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {relService.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-blue-500 mb-3"></div>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {relService.description}
                      </p>
                      <div className="text-blue-600 font-medium inline-flex items-center text-sm">
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
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
