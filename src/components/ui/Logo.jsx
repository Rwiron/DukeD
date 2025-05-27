import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <motion.div
        className="overflow-hidden px-2 -my-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src="/images/Final.png"
          alt="Duke Developers"
          className="h-38 w-auto object-contain"
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
