import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Card = ({
  children,
  className,
  cardClassName,
  containerClassName,
  as: Component = "div",
  hoverEffect = true,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-tr from-gray-100 to-gray-50 p-px shadow-xl",
        "transition-all duration-200",
        hoverEffect && "group hover:shadow-2xl",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 overflow-hidden rounded-[inherit] bg-white p-6",
          cardClassName
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          "absolute inset-0 z-0 transform-gpu bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-700 opacity-20 transition-opacity group-hover:opacity-40",
          hoverEffect && "group-hover:opacity-60"
        )}
      />
    </Component>
  );
};

export const HoverCard = ({
  children,
  className,
  cardClassName,
  containerClassName,
  as: Component = "div",
  rotateEffect = true,
  glowEffect = true,
  ...props
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !rotateEffect) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation (max 10 degrees)
    const rotateX = (mouseY / (height / 2)) * -5;
    const rotateY = (mouseX / (width / 2)) * 5;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-tr from-gray-100 to-gray-50 p-px shadow-xl",
        "transition-all duration-200",
        "hover:shadow-2xl",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        transition: { duration: 0.15 },
      }}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 overflow-hidden rounded-[inherit] bg-white p-6",
          cardClassName
        )}
      >
        {children}
      </div>

      {glowEffect && (
        <motion.div
          className="absolute -inset-px z-0 rounded-[inherit] bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-700 opacity-0"
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export const BlurCard = ({
  children,
  className,
  cardClassName,
  containerClassName,
  as: Component = "div",
  blur = "lg",
  ...props
}) => {
  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-xl border border-gray-200 shadow-xl",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 bg-gradient-to-tr from-blue-50 to-blue-100",
          blur === "sm" && "blur-sm",
          blur === "md" && "blur-md",
          blur === "lg" && "blur-lg"
        )}
      />
      <div
        className={cn(
          "relative z-10 overflow-hidden rounded-[inherit] bg-white/80 backdrop-blur-sm p-6",
          cardClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
};

export default Card;
