import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { Card, HoverCard } from "../components/ui/Card";
import { LazyImage } from "../components/ui/LazyImage";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("story");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries Served" },
  ];

  const milestones = [
    {
      year: "2013",
      title: "Company Founded",
      description:
        "Duke Developers was established with a vision to transform the construction industry.",
    },
    {
      year: "2015",
      title: "Software Division",
      description:
        "Expanded our services to include custom software solutions for businesses.",
    },
    {
      year: "2018",
      title: "Renewable Energy Focus",
      description:
        "Incorporated renewable energy solutions into our service offerings.",
    },
    {
      year: "2020",
      title: "International Expansion",
      description:
        "Began expanding our services to international markets across Europe and Asia.",
    },
    {
      year: "2023",
      title: "Sustainability Milestone",
      description:
        "Achieved carbon neutrality in all our operations and project implementations.",
    },
  ];

  return (
    <div className="pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <SectionHeading
            subtitle="About Us"
            title="Our Story"
            description="Learn more about Duke Developers and our mission to provide innovative solutions across multiple industries."
          />
        </motion.div>

        {/* Tabs navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {["story", "mission"].map((tab, index) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-8">
          {/* Story Tab */}
          {activeTab === "story" && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.h3
                    className="text-2xl font-bold text-gray-800"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    A Decade of Excellence
                  </motion.h3>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Founded in 2013, Duke Developers began as a visionary
                    startup with a mission to disrupt traditional development
                    paradigms. Our founder, Alex Johnson, recognized an
                    opportunity to blend construction expertise with
                    cutting-edge technology, creating a company that stands at
                    the intersection of physical and digital innovation.
                  </motion.p>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Today, we're a multidisciplinary powerhouse with expertise
                    spanning construction, software development, and renewable
                    energy. This unique convergence enables us to tackle complex
                    challenges with integrated solutions that leverage the
                    latest technologies and sustainable practices.
                  </motion.p>
                </div>

                <div className="space-y-6">
                  <motion.h3
                    className="text-2xl font-bold text-gray-800"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Our Impact
                  </motion.h3>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Over the past decade, we've completed over 200 projects
                    across 15 countries, building a diverse portfolio that
                    showcases our versatility and commitment to excellence. Our
                    team of 50+ experts brings diverse perspectives and
                    specialized knowledge to every challenge, ensuring
                    innovative solutions that exceed expectations.
                  </motion.p>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    As we look to the future, we remain committed to pushing
                    boundaries and embracing emerging technologies. From
                    AI-powered project management to sustainable building
                    materials, we're constantly exploring new ways to deliver
                    exceptional value while minimizing environmental impact.
                  </motion.p>
                </div>
              </div>

              {/* Stats Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Timeline Chart */}
              <motion.div
                className="mt-16"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">
                  Our Journey
                </h3>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 rounded-full"></div>

                  {/* Timeline Items */}
                  <div className="space-y-16">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={index}
                        className={`relative flex items-center ${
                          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Content */}
                        <div
                          className={`w-5/12 ${
                            index % 2 === 0
                              ? "text-right pr-8"
                              : "text-left pl-8"
                          }`}
                        >
                          <h4 className="text-xl font-bold text-gray-800">
                            {milestone.title}
                          </h4>
                          <p className="text-gray-600 mt-2">
                            {milestone.description}
                          </p>
                        </div>

                        {/* Year Marker */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                            <span className="text-white font-bold text-sm">
                              {milestone.year}
                            </span>
                          </div>
                        </div>

                        {/* Empty Space for even distribution */}
                        <div className="w-5/12"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Mission Tab */}
          {activeTab === "mission" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <motion.h3
                className="text-2xl font-bold mb-4 text-center text-gray-800"
                variants={fadeInUp}
                custom={0}
              >
                Our Mission
              </motion.h3>
              <motion.p
                className="text-xl text-gray-800 text-center max-w-3xl mx-auto"
                variants={fadeInUp}
                custom={1}
              >
                "To transform visions into reality through innovative design,
                sustainable practices, and cutting-edge technology, creating
                spaces and solutions that enrich lives and communities."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <BentoGrid className="max-w-full">
                  {/* First item - takes col span 3 (full width) on larger screens */}
                  <BentoGridItem
                    title="Innovation at the Core"
                    description="We constantly seek new methods, technologies, and approaches to deliver superior results for our clients, pushing boundaries to create exceptional solutions. Our dedicated team explores emerging technologies across construction, software development, and renewable energy sectors to stay ahead of industry trends. By integrating cutting-edge tools like AI-powered project management, IoT sensors for real-time monitoring, and advanced sustainable materials, we create forward-thinking solutions that address complex challenges while maximizing efficiency and environmental responsibility."
                    className="md:col-span-3 bg-gradient-to-br from-blue-50 to-blue-100"
                    icon={
                      <div className="p-2 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    }
                  />

                  {/* Second item - col span 2 */}
                  <BentoGridItem
                    title="Sustainability"
                    description="Environmental responsibility is at the core of everything we do, from construction materials to energy solutions. We've implemented a comprehensive sustainability framework that includes carbon-neutral operations, zero-waste construction practices, and renewable energy integration in all our projects. Our dedicated sustainability team conducts thorough environmental impact assessments, develops custom green solutions for each client, and continuously monitors performance metrics to ensure we exceed industry standards. By partnering with leading environmental organizations and investing in innovative green technologies, we're not just reducing our ecological footprint—we're setting new benchmarks for sustainable development across the construction and technology sectors."
                    className="md:col-span-2 bg-gradient-to-br from-green-50 to-green-100"
                    icon={
                      <div className="p-2 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                    }
                  />

                  {/* Third item - col span 1 */}
                  <BentoGridItem
                    title="Community Impact"
                    description="We're committed to creating positive impacts on the communities where we work through thoughtful development and engagement. At Duke Developers, we believe in giving back through local hiring initiatives, educational programs, and sustainable infrastructure that enhances quality of life. Our team has contributed over 5,000 volunteer hours to community projects, established scholarship programs for underprivileged students pursuing STEM careers, and partnered with local organizations to revitalize public spaces. Each project we undertake considers not just the immediate client needs, but how our work can create lasting benefits for the surrounding community, fostering economic growth and environmental stewardship for generations to come."
                    className="md:row-span-2 bg-gradient-to-br from-purple-50 to-purple-100"
                    icon={
                      <div className="p-2 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    }
                  />

                  {/* Fourth item */}
                  <BentoGridItem
                    title="Quality Excellence"
                    description="We prioritize quality in every aspect of our work, ensuring that each project meets the highest standards of craftsmanship and durability."
                    className="bg-gradient-to-br from-amber-50 to-amber-100"
                    icon={
                      <div className="p-2 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                    }
                  />

                  {/* Fifth item */}
                  <BentoGridItem
                    title="Client Partnership"
                    description="We view every client relationship as a partnership, working collaboratively to understand needs and exceed expectations through clear communication."
                    className="bg-gradient-to-br from-sky-50 to-sky-100"
                    icon={
                      <div className="p-2 w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    }
                  />
                </BentoGrid>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Values section - shown on all tabs */}
        <motion.div
          className="mt-24 bg-gray-50 rounded-2xl p-8 shadow-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Integrity
              </h4>
              <p className="text-gray-600">
                We uphold the highest standards of honesty and transparency in
                all our interactions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Excellence
              </h4>
              <p className="text-gray-600">
                We strive for perfection in every project, paying attention to
                even the smallest details.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Client-Focused
              </h4>
              <p className="text-gray-600">
                We prioritize our clients' needs and satisfaction throughout the
                entire project lifecycle.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
