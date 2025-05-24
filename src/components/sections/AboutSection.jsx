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
                Duke Developers started in 2013 with a simple goal: to help
                bring ideas to life through thoughtful design, careful planning,
                and solid execution. Over the years, we’ve grown into a trusted
                partner in construction, project management, IT services, and
                interior and exterior design. We’ve worked across Africa, North
                America, and Europe, completing more than 350 projects—each one
                a reflection of our commitment to quality and detail.
              </p>

              <p>
                What makes us different isn’t just the work we do—it’s how we do
                it. Our team cares deeply about every project, no matter the
                size. We take time to understand what each client really needs
                and use the latest tools and ideas to make it happen. Whether
                it's building a new office, developing a website, or designing
                an energy-efficient home, we always keep people at the center of
                our work.
              </p>

              <p>
                In 2023, we completed 42 major projects across 15 countries.
                Some highlights include the Riverfront Office Complex in Seattle
                and our new Smart Building Management System, which helps
                businesses cut energy costs by up to 30%. These projects aren’t
                just wins for us—they’re examples of how modern technology and
                thoughtful design can make life better for people using the
                spaces we create.
              </p>

              <p>
                We’re proud to say that 98% of our clients report being happy
                with the results. Many come back for more work or recommend us
                to others. That kind of trust means everything to us. It pushes
                us to stay curious, learn more, and keep improving.
              </p>

              <p>
                As we look to the future, we’re excited about exploring new
                ideas in green construction, smart technologies, and ways to
                share our knowledge with the next generation of builders and
                developers. We believe in building more than projects—we believe
                in building relationships, solving real problems, and leaving
                things better than we found them.
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
