import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="rounded-lg overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src="/images/dukenon.png"
              alt="Duke Developers Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-blue-600 text-white py-2 px-4">
              <span className="font-semibold">15+ Years of Experience</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionHeading
              subtitle="About Us"
              title="Innovative Solutions with a Global Presence"
              alignment="left"
              className="mb-6 mx-0"
            />

            <motion.div className="space-y-4 text-gray-600" variants={fadeIn}>
              <p>
                Duke Developers officially registered as a business in Liberia in 2021, but our journey began earlier as subcontractors in the construction industry. We started with a simple goal: to help bring ideas to life through thoughtful design, careful planning, and solid execution. Today, we've evolved into a trusted partner offering comprehensive services in construction, project management, IT solutions, and interior and exterior design across various regions.
              </p>

              <p>
                What makes us different isn't just the work we do—it's how we do it. Our team brings passion and dedication to every project, regardless of scale. We believe in taking the time to understand each client's unique vision and requirements, then applying innovative approaches to make that vision a reality. Whether it's constructing a commercial building, developing custom software, or designing functional spaces, we place people at the center of our work.
              </p>

              <p>
                We've been steadily building our portfolio of successful projects, each one strengthening our reputation for quality and reliability. Our approach combines local knowledge with international standards, allowing us to deliver solutions that are both contextually appropriate and forward-thinking. We take pride in implementing sustainable practices and utilizing modern technologies that enhance the value and performance of our deliverables.
              </p>

              <p>
                Client satisfaction drives everything we do. We measure our success not just by completed projects, but by the relationships we build and maintain. Many of our clients return for additional work and refer us to others—a testament to the trust we've established and the quality we consistently deliver. This feedback energizes us to continue learning, adapting, and improving our services.
              </p>

              <p>
                Looking ahead, we're excited about exploring new frontiers in sustainable construction, smart technologies, and innovative design. We remain committed to our founding principles—building strong relationships, solving real-world challenges, and creating lasting positive impact in every community where we work. At Duke Developers, we're not just constructing buildings or designing systems; we're helping shape better environments for people to live, work, and thrive.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 space-y-4"
              variants={staggerItems}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="flex items-center" variants={listItem}>
                <div className="flex-shrink-0 mr-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Sustainable and innovative construction solutions</p>
              </motion.div>
              <motion.div className="flex items-center" variants={listItem}>
                <div className="flex-shrink-0 mr-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Expert team with global experience and local knowledge</p>
              </motion.div>
              <motion.div className="flex items-center" variants={listItem}>
                <div className="flex-shrink-0 mr-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Commitment to quality and client satisfaction</p>
              </motion.div>
              <motion.div className="flex items-center" variants={listItem}>
                <div className="flex-shrink-0 mr-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Professional project management and execution</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 group"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
