import React from "react";
import { motion } from "framer-motion";
import { LazyImage } from "./LazyImage";

const LeadershipCard = ({ leader }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden bg-white">
          <LazyImage
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            containerClassName="bg-white"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
          <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
          <div className="w-12 h-0.5 bg-blue-500 mb-4"></div>
          <p className="text-gray-600 mb-6">{leader.bio}</p>
          <div className="flex space-x-3">
            <a
              href={leader.linkedin}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={leader.twitter}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href={`mailto:${leader.email}`}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeadershipCard;
