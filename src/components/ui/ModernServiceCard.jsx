import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

// Custom link component to handle scrolling to top
const ServiceLink = ({ to, children, className }) => {
  const handleClick = (e) => {
    // Use setTimeout to let the navigation happen first, then scroll
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

const ModernServiceCard = ({
  title,
  description,
  icon,
  image,
  slug,
  className,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        "w-full h-full rounded-xl overflow-hidden shadow-md border border-gray-100 group relative",
        className
      )}
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      {...props}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

      <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
        <div className="mb-4">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-xl backdrop-blur-md bg-white/20 text-white"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full mb-3"></div>
          <p className="line-clamp-3 text-gray-200 text-sm mb-4">
            {description}
          </p>
          <ServiceLink
            to={`/services/${slug}`}
            className="inline-flex items-center text-sm text-white group-hover:text-blue-300 transition-colors duration-300"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </ServiceLink>
        </div>
      </div>
    </motion.div>
  );
};

export default ModernServiceCard;
