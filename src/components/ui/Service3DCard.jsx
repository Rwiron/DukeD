import { motion } from "framer-motion";
import { useState } from "react";
import Card3D from "./Card3D";
import { cn } from "../../utils/cn";

const Service3DCard = ({
  title,
  description,
  icon,
  image,
  className,
  contentClassName,
  ...props
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleCardLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <Card3D
      backgroundImage={image}
      backgroundOverlay={true}
      className={cn("h-full group", className)}
      containerClassName="h-full"
      onLoad={handleCardLoad}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col p-6 h-full",
          isImageLoaded ? "text-white" : "text-gray-800",
          contentClassName
        )}
      >
        <div className="mb-4">
          <motion.div
            className={cn(
              "w-14 h-14 flex items-center justify-center rounded-xl backdrop-blur-md",
              isImageLoaded
                ? "bg-blue-600/50 text-white"
                : "bg-blue-100 text-blue-600"
            )}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
        </div>

        <motion.h3
          className={cn(
            "text-2xl font-bold mb-3 transition-colors",
            isImageLoaded ? "group-hover:text-blue-300" : "text-gray-800"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className={cn(
            "mb-6",
            isImageLoaded ? "text-gray-200" : "text-gray-600"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>

        <div className="mt-auto">
          <motion.button
            className={cn(
              "inline-flex items-center font-medium",
              isImageLoaded
                ? "text-blue-300 hover:text-blue-100"
                : "text-blue-600 hover:text-blue-800"
            )}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </Card3D>
  );
};

export default Service3DCard;
