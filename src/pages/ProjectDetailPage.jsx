import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyImage } from "../components/ui/LazyImage";

// Project data (would typically come from API)
const projectsData = [
  {
    id: 1,
    title: "Riverfront Office Complex",
    category: "commercial",
    type: "Construction",
    location: "Seattle, WA",
    year: "2022",
    description:
      "A modern 12-story office building with sustainable features including solar panels, rainwater collection, and energy-efficient systems.",
    longDescription: `The Riverfront Office Complex represents a new standard in sustainable commercial architecture. This 12-story development provides over 250,000 square feet of Class A office space along Seattle's revitalized waterfront district.

Key features include a comprehensive rainwater collection system that reduces water consumption by up to 60%, integrated solar panels that generate approximately 15% of the building's energy needs, and a state-of-the-art building management system that optimizes energy usage throughout the day.

The construction utilized sustainable and locally-sourced materials where possible, and over 90% of construction waste was diverted from landfills through recycling and reuse programs. The building's glass façade is engineered to maximize natural light while minimizing heat gain, reducing reliance on artificial lighting and HVAC systems.`,
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622126806142-50b9fb26dba8?q=80&w=1470&auto=format&fit=crop",
    ],
    client: "Pacific Northwest Development Corp.",
    duration: "24 months",
    completion: "June 2022",
    services: ["Construction Management", "Sustainable Design", "Engineering"],
    awards: ["2022 Sustainable Building Award", "Green Building Excellence"],
  },
  {
    id: 2,
    title: "Smart Building Management System",
    category: "software",
    type: "Software Development",
    location: "Remote",
    year: "2023",
    description:
      "Custom software solution for monitoring and controlling building systems including HVAC, lighting, security, and energy usage in real-time.",
    longDescription: `The Smart Building Management System (SBMS) is a comprehensive software platform designed to centralize control and monitoring of all building systems. This cloud-based solution provides facility managers with real-time data and control capabilities for HVAC, lighting, security, energy usage, and other critical building functions.

The system features an intuitive dashboard that displays key performance indicators and alerts, allowing for quick identification of issues and optimization opportunities. Advanced analytics provide insights into energy usage patterns, helping identify potential savings and efficiency improvements.

Key modules include:
- Energy Management: Monitors consumption across all systems and identifies optimization opportunities
- Security Integration: Centralized control of access systems, surveillance, and alarm systems
- Maintenance Scheduling: Predictive maintenance based on equipment performance data
- Occupancy Analytics: Tracks building usage patterns to optimize space and resources
- Mobile Application: Allows for remote monitoring and control from any location

The SBMS integrates with existing building systems through standard protocols and custom APIs, making it adaptable to virtually any modern facility. The platform has demonstrated energy savings of 15-30% in buildings where it has been implemented.`,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580130732478-4e339fb6836f?q=80&w=1470&auto=format&fit=crop",
    ],
    client: "Multiple Clients",
    duration: "18 months (development)",
    completion: "January 2023",
    services: [
      "Custom Software Development",
      "Systems Integration",
      "UI/UX Design",
      "Mobile App Development",
    ],
    awards: ["2023 PropTech Innovation Award"],
  },
  {
    id: 4,
    title: "Solar Farm Installation",
    category: "energy",
    type: "Renewable Energy",
    location: "Phoenix, AZ",
    year: "2023",
    description:
      "Installation of a 15-acre solar farm with tracking panels, producing enough energy to power 1,200 homes annually.",
    longDescription: `The Phoenix Solar Farm project encompasses a 15-acre installation of cutting-edge solar technology designed to maximize energy production in the abundant Arizona sunlight. This utility-scale solar installation features over 12,000 photovoltaic panels mounted on single-axis tracking systems that follow the sun throughout the day, increasing energy production by approximately 25% compared to fixed systems.

The solar farm has a generation capacity of 5.8 MW, producing enough clean energy to power approximately 1,200 homes annually. This translates to a reduction of roughly 5,900 tons of CO2 emissions per year compared to conventional energy sources.

Key project components included:
- Site selection and environmental impact assessment
- Engineering and electrical system design
- Procurement of high-efficiency photovoltaic panels
- Installation of tracking systems and mounting infrastructure
- Grid connection and power management systems
- Monitoring and maintenance protocols

The project was completed on an accelerated timeline of just 9 months from initial design to grid connection, demonstrating our ability to efficiently manage large-scale renewable energy installations. The solar farm is expected to operate for at least 25 years with minimal maintenance requirements.`,
    image:
      "https://images.unsplash.com/photo-1509391366360-2959dba8436c?q=80&w=1974&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1559087316-b0e30cf8b8db?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509391618207-32b67e06e92d?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1374&auto=format&fit=crop",
    ],
    client: "Arizona Clean Energy Partners",
    duration: "9 months",
    completion: "March 2023",
    services: [
      "Renewable Energy Installation",
      "Engineering",
      "Project Management",
    ],
    awards: ["2023 Sustainable Energy Project Award"],
  },
];

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simulate API fetch
    setTimeout(() => {
      const projectId = parseInt(id);
      const selectedProject = projectsData.find((p) => p.id === projectId);
      setProject(selectedProject);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Project not found
        </h2>
        <p className="text-gray-600 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
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
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">{project.description}</p>
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
                Project Overview
              </h2>
              <div className="prose max-w-none prose-lg prose-blue mb-12">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>

              {/* Gallery */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Gallery
                </h3>
                <div className="mb-4">
                  <div className="w-full h-[400px] rounded-xl overflow-hidden">
                    <LazyImage
                      src={project.gallery[activeImage] || project.image}
                      alt={`${project.title} gallery main image`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer h-24 rounded-lg overflow-hidden border-2 ${
                        activeImage === index
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <LazyImage
                        src={img}
                        alt={`${project.title} gallery thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
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
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Project Details
              </h3>
              <div className="w-12 h-0.5 bg-blue-500 mb-6"></div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider">
                    Client
                  </h4>
                  <p className="text-gray-800 font-medium">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider">
                    Location
                  </h4>
                  <p className="text-gray-800 font-medium">
                    {project.location}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider">
                    Project Duration
                  </h4>
                  <p className="text-gray-800 font-medium">
                    {project.duration}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider">
                    Completion Date
                  </h4>
                  <p className="text-gray-800 font-medium">
                    {project.completion}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider">
                    Services Provided
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {project.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                        <span className="text-gray-700 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {project.awards && project.awards.length > 0 && (
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider">
                      Awards
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {project.awards.map((award, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                          <span className="text-gray-700 text-sm">{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  Interested in a similar project?
                </h4>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-md transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Explore Similar Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData
              .filter(
                (p) => p.category === project.category && p.id !== project.id
              )
              .slice(0, 3)
              .map((relatedProject) => (
                <motion.div
                  key={relatedProject.id}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link to={`/projects/${relatedProject.id}`}>
                    <div className="h-48 overflow-hidden relative">
                      <LazyImage
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {relatedProject.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-blue-500 mb-3"></div>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {relatedProject.description}
                      </p>
                      <div className="text-blue-600 font-medium inline-flex items-center text-sm">
                        View Project
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
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
