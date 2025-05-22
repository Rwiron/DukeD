import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const CTA = ({ className }) => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  // Split the title into words for word-by-word animation
  const titleWords = "Ready to Transform Your Vision into Reality?".split(" ");

  return (
    <section className={cn("relative py-20 overflow-hidden", className)}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-blue-600 z-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(45deg, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Animated waves */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute inset-x-0 bottom-0 h-80 bg-white"
            style={{
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-40px",
              left: "-10%",
              right: "-10%",
              width: "120%",
            }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-60 bg-white"
            style={{
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              bottom: "-30px",
              left: "-5%",
              right: "-5%",
              width: "110%",
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Animated title with words appearing one by one */}
          <div className="flex flex-wrap justify-center mb-6">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className="text-4xl md:text-5xl font-bold mx-2 my-1 inline-block"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textVariants}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="text-xl mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            custom={titleWords.length + 1}
          >
            Partner with Duke Developers for innovative solutions in
            construction, software development, and renewable energy.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition duration-300 shadow-lg block"
              >
                Get in Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition duration-300 block"
              >
                View Our Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 bg-blue-400 rounded-full opacity-20 hidden md:block"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-20 hidden md:block"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-30 hidden md:block"
        animate={{
          y: [0, 10, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default CTA;
