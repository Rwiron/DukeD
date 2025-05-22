import React from "react";
import { motion } from "framer-motion";
import { LazyImage } from "./LazyImage";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, featured = false, variants }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
      whileHover={{ y: -8 }}
      variants={variants}
    >
      <div className={`${featured ? "h-64" : "h-56"} overflow-hidden`}>
        <LazyImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        {featured ? (
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {project.title}
              </h3>
              <p className="text-blue-600 text-sm font-medium">
                {project.type}
              </p>
            </div>
            <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
              Featured
            </span>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {project.title}
            </h3>
            <p className="text-blue-600 text-sm font-medium mb-3">
              {project.type}
            </p>
          </>
        )}
        <div className="w-12 h-0.5 bg-blue-500 mb-4"></div>
        <p
          className={`text-gray-600 ${featured ? "" : "text-sm"} mb-4 ${
            featured ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
            {project.location}
          </span>
          <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
            {project.year}
          </span>
          <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </span>
        </div>
        <Link
          to={`/projects/${project.id}`}
          className="mt-5 text-blue-600 text-sm font-medium flex items-center hover:text-blue-800 transition-colors"
        >
          View details
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
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
