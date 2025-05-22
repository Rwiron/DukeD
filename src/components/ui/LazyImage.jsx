import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const LazyImage = ({
  src,
  alt,
  className,
  containerClassName,
  skeletonClassName,
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setIsError(false);

    // Preload the image
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoaded(true);
      if (onLoad) onLoad();
    };

    img.onerror = () => {
      setIsError(true);
    };

    return () => {
      // Clean up
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad]);

  return (
    <div
      className={cn("relative overflow-hidden bg-white", containerClassName)}
    >
      {/* Skeleton loader */}
      {!isLoaded && (
        <div
          className={cn(
            "absolute inset-0 w-full h-full bg-gray-200 animate-pulse",
            skeletonClassName
          )}
        />
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt || ""}
        className={cn(
          "w-full h-full object-cover",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      />

      {/* Fallback for error */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export { LazyImage };
export default LazyImage;
