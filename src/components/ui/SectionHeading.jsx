const SectionHeading = ({
  subtitle,
  title,
  description,
  alignment = "center",
  className = "",
}) => {
  const getAlignmentClasses = () => {
    switch (alignment) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      case "center":
      default:
        return "text-center";
    }
  };

  const alignmentClasses = getAlignmentClasses();

  return (
    <div className={`max-w-3xl mx-auto ${alignmentClasses} ${className}`}>
      {subtitle && (
        <p className="text-blue-600 font-semibold text-lg mb-2">{subtitle}</p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
      )}
      {description && <p className="text-gray-600 text-lg">{description}</p>}
    </div>
  );
};

export default SectionHeading;
