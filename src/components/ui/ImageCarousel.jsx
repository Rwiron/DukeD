import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import { LazyImage } from "./LazyImage";

const ImageCarousel = ({
  images,
  autoSlideInterval = 5000,
  showArrows = true,
  showDots = true,
  className,
  imageClassName,
  overlayClassName,
  onSlideChange,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const timeoutRef = useRef(null);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const goToSlide = useCallback(
    (index) => {
      // Reset image loaded state
      setIsImageLoaded(false);

      // Determine direction based on index change
      const newDirection = index > currentIndex ? 1 : -1;
      setDirection(newDirection);

      // Handle wrapping around
      let newIndex;
      if (index < 0) {
        newIndex = images.length - 1;
      } else if (index >= images.length) {
        newIndex = 0;
      } else {
        newIndex = index;
      }

      setCurrentIndex(newIndex);

      // Call the onSlideChange callback if provided
      if (onSlideChange) {
        onSlideChange(newIndex);
      }
    },
    [currentIndex, images.length, onSlideChange]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Set up auto sliding
  useEffect(() => {
    if (autoSlideInterval > 0 && isImageLoaded) {
      const startAutoSlide = () => {
        timeoutRef.current = setTimeout(() => {
          nextSlide();
        }, autoSlideInterval);
      };

      startAutoSlide();

      // Clean up on unmount
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [nextSlide, autoSlideInterval, isImageLoaded, currentIndex]);

  // Pause auto slide on hover
  const pauseAutoSlide = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const resumeAutoSlide = useCallback(() => {
    if (autoSlideInterval > 0 && isImageLoaded) {
      pauseAutoSlide();
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, autoSlideInterval);
    }
  }, [nextSlide, autoSlideInterval, isImageLoaded]);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-gray-100",
        className
      )}
      onMouseEnter={pauseAutoSlide}
      onMouseLeave={resumeAutoSlide}
      {...props}
    >
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <LazyImage
            src={images[currentIndex].url}
            alt={images[currentIndex].alt || "Carousel image"}
            containerClassName="absolute inset-0 w-full h-full"
            className={cn(
              "absolute inset-0 w-full h-full object-cover object-center",
              imageClassName
            )}
            skeletonClassName="bg-gray-200"
            onLoad={handleImageLoad}
          />
          <div
            className={cn(
              "absolute inset-0 w-full h-full bg-black/50",
              overlayClassName
            )}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicators */}
      {showDots && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentIndex === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
