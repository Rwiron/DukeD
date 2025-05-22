import React, { useState } from "react";
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

const FlipCard = ({
  title,
  description,
  icon,
  image,
  slug,
  className,
  ...props
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn(
        "w-full h-[400px] perspective-1000 cursor-pointer group",
        className
      )}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      {...props}
    >
      <div
        className={cn(
          "relative w-full h-full transition-all duration-500 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
          <div className="relative h-full flex flex-col justify-between p-8 text-white z-10">
            <div className="mb-4">
              <motion.div
                className="w-14 h-14 flex items-center justify-center rounded-xl backdrop-blur-md bg-white/20 text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {icon}
              </motion.div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="line-clamp-3 text-gray-200 text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 rotate-y-180">
          <div className="p-8 h-full flex flex-col">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white mt-4">
                {title}
              </h3>
              <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {description}
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Professional consultation
                </li>
                <li className="flex items-center text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Tailored solutions
                </li>
                <li className="flex items-center text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Ongoing support
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <ServiceLink
                to={`/services/${slug}`}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg text-white text-sm transition-colors duration-300"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
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
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
