import { HoverCard } from "./Card";
import { cn } from "../../utils/cn";

const ServiceCard = ({ title, description, icon, className, ...props }) => {
  return (
    <HoverCard
      className={cn("h-full", className)}
      cardClassName="h-full flex flex-col"
      {...props}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center">
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
          </button>
        </div>
      </div>
    </HoverCard>
  );
};

export default ServiceCard;
