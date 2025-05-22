import { cn } from "../../utils/cn";

export const AnimatedGradient = ({
  gradientClasses = "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700",
  className,
  containerClassName,
  children,
  animate = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative p-[4px] overflow-hidden rounded-lg",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-lg z-[1]",
          gradientClasses,
          animate && "animate-gradient"
        )}
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        {...props}
      />
      <div
        className={cn(
          "relative z-[2] bg-black rounded-lg w-full h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
