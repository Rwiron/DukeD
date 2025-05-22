import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";
import { LazyImage } from "./LazyImage";

const Card3D = ({
  children,
  className,
  containerClassName,
  backgroundImage,
  backgroundOverlay = true,
  gradientOverlay = false,
  shadowColor = "rgba(0, 0, 0, 0.2)",
  onLoad,
  ...props
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Motion values for mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const scale = useSpring(1, springConfig);

  // Transform values for shadow
  const shadowX = useTransform(mouseX, [-300, 300], [-20, 20]);
  const shadowY = useTransform(mouseY, [-300, 300], [-20, 20]);

  // Transform for shine effect
  const backgroundShineX = useTransform(mouseX, [-300, 300], [300, -300]);
  const backgroundShineY = useTransform(mouseY, [-300, 300], [300, -300]);

  // Transform the rotation based on mouse position
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    // Calculate the center of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate the position of the mouse relative to the center
    const mouseXRel = e.clientX - centerX;
    const mouseYRel = e.clientY - centerY;

    // Set the rotate values - limit to 12 degrees max rotation
    mouseX.set(mouseXRel);
    mouseY.set(mouseYRel);

    rotateY.set(mouseXRel / 20);
    rotateX.set(-mouseYRel / 20);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative cursor-pointer perspective-1000",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        scale,
        rotateX,
        rotateY,
        z: 0,
      }}
      {...props}
    >
      {isHovered && (
        <motion.div
          className="absolute -inset-8 z-0 rounded-xl opacity-50"
          style={{
            boxShadow: `0px 0px 50px 10px ${shadowColor}`,
            x: shadowX,
            y: shadowY,
          }}
        />
      )}

      <div
        className={cn(
          "relative overflow-hidden rounded-xl transition-all",
          "bg-white border border-gray-200 shadow-lg",
          className
        )}
      >
        {/* Background Image with Skeleton */}
        {backgroundImage && (
          <div className="absolute inset-0 z-0 w-full h-full">
            <LazyImage
              src={backgroundImage}
              alt=""
              containerClassName="w-full h-full"
              className="w-full h-full object-cover object-center"
              skeletonClassName="bg-gray-100"
              onLoad={handleImageLoad}
            />
            {backgroundOverlay && isImageLoaded && (
              <div className="absolute inset-0 bg-black/50 z-10" />
            )}
          </div>
        )}

        {/* Content */}
        <div className="relative z-20">{children}</div>

        {/* Shine effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-30 opacity-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 60%)",
              backgroundSize: "200% 200%",
              backgroundPositionX: backgroundShineX,
              backgroundPositionY: backgroundShineY,
            }}
          />
        )}

        {/* Gradient Overlay */}
        {gradientOverlay && (
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
        )}
      </div>
    </motion.div>
  );
};

export default Card3D;
