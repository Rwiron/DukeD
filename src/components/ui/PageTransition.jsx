import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Animation variants for page transition
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  // When the component mounts, trigger the fade-in animation
  useEffect(() => {
    // Small timeout to ensure the animation is visible
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    // Scroll to top when page changes
    window.scrollTo(0, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
