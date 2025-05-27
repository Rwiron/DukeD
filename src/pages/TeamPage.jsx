import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import { LazyImage } from "../components/ui/LazyImage";
import TeamMember from "../components/ui/TeamMember";
import LeadershipCard from "../components/ui/LeadershipCard";

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Team member data with only the specified Duke Developers team members
  const teamMembers = [
    {
      id: 1,
      name: "Joseph G. Dukuly",
      role: "Head of Operation",
      department: "leadership",
      image: "/images/team/head.jpg",
      bio: "Joseph G. Dukuly leads Duke Developers, bringing extensive experience in public and private sectors. He is dedicated to delivering innovative and sustainable solutions that empower communities.",
      linkedin: "#",
      twitter: "#",
      email: "joseph@dukedevelopersinc.com",
    },
    {
      id: 2,
      name: "Francis Duahn",
      role: "Energy Sector Specialist",
      department: "energy",
      image: "/images/team/branc.jpg",
      bio: "Francis Duahn is an accomplished social entrepreneur with expertise in the energy sector, specializing in clean and sustainable solutions. Previously with Kwado Energy, where he led initiatives to expand access to bioethanol fuel for cooking, he now brings his experience to Duke Developers, driving energy sustainability and environmental impact.",
      linkedin: "#",
      twitter: "#",
      email: "francis@dukedevelopersinc.com",
    },
    {
      id: 3,
      name: "Peter Gao",
      role: "Global Trade Strategist",
      department: "management",
      image: "/images/team/peter.jpg",
      bio: "As Global Trade Strategist, Peter brings extensive expertise in smart metering, transformers, and international business. Peter leverages his skills to develop and execute global trade strategies for Duke Developers, fostering growth and partnerships worldwide.",
      linkedin: "#",
      twitter: "#",
      email: "peter@dukedevelopersinc.com",
    },
    {
      id: 4,
      name: "Wiron Ruzindana",
      role: "Lead Software Engineer",
      department: "software",
      image: "/images/team/wiron.jpg",
      bio: "Wiron Ruzindana is a results-driven leader with over 10 years of experience in development and organizational growth. He focuses on delivering impactful solutions and fostering efficiency across our software initiatives.",
      linkedin: "#",
      twitter: "#",
      email: "wiron@dukedevelopersinc.com",
    },
    {
      id: 5,
      name: "Moses P. Dukuly",
      role: "Chief Civil Engineer",
      department: "construction",
      image: "/images/team/duk.jpg",
      bio: "Moses P. Dukuly is a seasoned civil engineer with a proven track record of delivering complex infrastructure projects. He excels in project planning, execution, and sustainable development practices.",
      linkedin: "#",
      twitter: "#",
      email: "moses@dukedevelopersinc.com",
    },
    {
      id: 6,
      name: "Augustus G. Sesay",
      role: "Branch Manager - Liberia",
      department: "management",
      image: "/images/team/nonet.png",
      bio: "Augustus oversees all operations in our Liberia branch, bringing extensive experience in managing construction projects in West Africa. He excels at coordinating local teams and ensuring projects align with regional requirements and community needs.",
      linkedin: "#",
      twitter: "#",
      email: "augustus@dukedevelopersinc.com",
    },
    {
      id: 7,
      name: "Uriah Diamond Kollie",
      role: "US Branch Manager",
      department: "management",
      image: "/images/team/nonet.png",
      bio: "As Office Manager at Duke Developers USA, Uriah D. Kollie ensures seamless daily operations, fostering efficiency and organization. With expertise in administration, team coordination, and workflow optimization, he plays a vital role in the company's success. His leadership and dedication create a productive work environment.",
      linkedin: "#",
      twitter: "#",
      email: "uriah@dukedevelopersinc.com",
    },
  ];

  const departments = [
    { id: "all", name: "All Team" },
    { id: "leadership", name: "Leadership" },
    { id: "management", name: "Branch Management" },
    { id: "construction", name: "Construction" },
    { id: "software", name: "Software & IT" },
    { id: "energy", name: "Energy" },
  ];

  const filteredMembers =
    activeTab === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeTab);

  return (
    <div className="pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            subtitle="Our Team"
            title="Meet Our Experts"
            description="The dedicated professionals behind Duke Developers bring diverse expertise in construction, energy solutions, software development, and global trade to deliver exceptional service and innovative solutions."
          />
        </motion.div>

        {/* Mobile View - All Members as LeadershipCards */}
        <div className="md:hidden">
          <motion.div
            className="mt-12 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Our Team
            </h2>
            <div className="space-y-6">
              {teamMembers.map((member) => (
                <LeadershipCard key={member.id} leader={member} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop View - Categorized Sections */}
        <div className="hidden md:block">
          {/* Leadership Showcase */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Leadership
            </h2>
            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                {teamMembers
                  .filter((member) => member.department === "leadership")
                  .map((leader) => (
                    <LeadershipCard key={leader.id} leader={leader} />
                  ))}
              </div>
            </div>
          </motion.div>

          {/* Core Team Showcase */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Core Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers
                .filter((member) => member.id >= 2 && member.id <= 5)
                .map((member) => (
                  <LeadershipCard key={member.id} leader={member} />
                ))}
            </div>
          </motion.div>

          {/* Branch Management */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Branch Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers
                .filter((member) => member.id >= 6 && member.id <= 7)
                .map((member) => (
                  <LeadershipCard key={member.id} leader={member} />
                ))}
            </div>
          </motion.div>

          {/* Department Tabs */}
          <div className="mt-24">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {departments.map((department) => (
                <motion.button
                  key={department.id}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === department.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(department.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {department.name}
                </motion.button>
              ))}
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMembers.map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          className="mt-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-10 text-white text-center shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-900/0 to-slate-800/80 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
              We're always looking for talented individuals who are passionate
              about innovation, sustainability, and excellence in construction
              and development. If you're interested in joining Duke Developers,
              check out our current openings.
            </p>
            {/* <button className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300">
              View Career Opportunities
            </button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;
