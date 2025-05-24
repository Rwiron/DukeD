import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import FeaturedProjectCard from "../components/ui/FeaturedProjectCard";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Project data
  const projectsData = [
    {
      id: 1,
      title: "Riverfront Office Complex",
      category: "commercial",
      type: "Construction",
      location: "Africa",
      year: "2022",
      description:
        "A modern 12-story office building with sustainable features including solar panels, rainwater collection, and energy-efficient systems.",
      image:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: true,
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
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: true,
    },
    {
      id: 3,
      title: "Oak Hills Residential Community",
      category: "residential",
      type: "Construction",
      location: "Africa, Liberia",
      year: "2021",
      description:
        "Development of 45 single-family homes with a focus on energy efficiency and community-centered design with shared green spaces.",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false,
    },
    {
      id: 4,
      title: "Solar Farm Installation",
      category: "energy",
      type: "Renewable Energy",
      location: "Africa, Liberia",
      year: "2023",
      description:
        "Installation of a 15-acre solar farm with tracking panels, producing enough energy to power 1,200 homes annually.",
      image:
        "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: true,
    },
    {
      id: 5,
      title: "Lakeside Hotel & Resort",
      category: "commercial",
      type: "Construction & Design",
      location: "Africa",
      year: "2022",
      description:
        "A luxury 120-room hotel with conference facilities, spa, and restaurant, designed to blend with the natural surroundings.",
      image:
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false,
    },
    {
      id: 6,
      title: "Healthcare Facility Management App",
      category: "software",
      type: "Software Development",
      location: "Remote",
      year: "2022",
      description:
        "Mobile application for healthcare facilities to manage patient scheduling, staff resources, and inventory tracking.",
      image:
        "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false,
    },
    {
      id: 7,
      title: "Urban Mixed-Use Development",
      category: "commercial",
      type: "Construction",
      location: "Africa",
      year: "2023",
      description:
        "A six-block urban renewal project featuring retail, office space, apartments, and public plazas with sustainable design principles.",
      image:
        "https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false,
    },
    {
      id: 8,
      title: "Smart Home Integration",
      category: "residential",
      type: "Technology Integration",
      location: "Multiple Locations",
      year: "2023",
      description:
        "Implementation of smart home systems in a residential development, including automated lighting, climate control, and security.",
      image:
        "https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false,
    },
    {
      id: 9,
      title: "Corporate Headquarters Redesign",
      category: "commercial",
      type: "Interior Design",
      location: "Africa",
      year: "2022",
      description:
        "Complete redesign of a 50,000 sq ft corporate headquarters focusing on collaborative workspaces and employee wellness.",
      image:
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false,
    },
    {
      id: 10,
      title: "Community Wind Turbine Project",
      category: "energy",
      type: "Renewable Energy",
      location: "Africa",
      year: "2021",
      description:
        "Installation of five community-owned wind turbines providing clean energy to a rural area with energy co-op structure.",
      image:
        "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false,
    },
    {
      id: 11,
      title: "Modular Affordable Housing",
      category: "residential",
      type: "Construction",
      location: "Africa",
      year: "2022",
      description:
        "Development of 120 units of affordable housing using modular construction techniques to reduce costs and construction time.",
      image:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false,
    },
    {
      id: 12,
      title: "Construction Project Management Platform",
      category: "software",
      type: "Software Development",
      location: "Remote",
      year: "2023",
      description:
        "Cloud-based software platform for construction project management, including scheduling, resource allocation, and document control.",
      image:
        "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "residential", name: "Residential" },
    { id: "software", name: "Software" },
    { id: "energy", name: "Energy" },
  ];

  useEffect(() => {
    // Initialize projects
    setProjects(projectsData);

    // Filter projects based on active category
    if (activeCategory === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            subtitle="Our Projects"
            title="Recent Work"
            description="Explore our portfolio of successful projects across construction, software development, renewable energy, and design."
          />
        </motion.div>

        {/* Featured Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mt-24">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-10 text-white text-center shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-900/0 to-slate-800/80 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
            <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
              Our team is ready to bring your vision to life. Whether it's a new
              construction project, software development, or renewable energy
              solution, we have the expertise to make it happen.
            </p>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300">
              Request a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
