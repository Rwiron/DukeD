import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const Stats = () => {
  const stats = [
    {
      id: 1,
      value: 4,
      label: "Years Experience",
      suffix: "+",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path
            d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.98 21C5.98 18.33 8.65 16.17 12 16.17C15.35 16.17 18.02 18.33 18.02 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.02 21C18.02 18.33 15.35 16.17 12 16.17C8.65 16.17 5.98 18.33 5.98 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      value: 15,
      label: "Satisfied Clients",
      suffix: "+",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path
            d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 10C16 10 14.5 12 12 12C9.5 12 8 10 8 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 7H9.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 7H15.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      value: 10,
      label: "Completed Projects",
      suffix: "+",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path
            d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 3H11C9.89543 3 9 3.89543 9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5C15 3.89543 14.1046 3 13 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      value: 5,
      label: "Ongoing Projects",
      suffix: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path
            d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7V12L15 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      startCounting();
    }
  }, [isInView]);

  const startCounting = () => {
    let startValue = 0;
    const endValue = stat.value;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(endValue / (duration / 16)); // 16ms is approx one frame at 60fps

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue > endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(startValue);
      }
    }, 16);
  };

  return (
    <motion.div
      className="relative p-6 text-center bg-white/10 backdrop-blur-sm rounded-lg shadow-xl border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setIsInView(true)}
    >
      <div className="mb-4 flex justify-center">
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white/20 text-white">
          {stat.icon}
        </div>
      </div>

      <h3
        ref={countRef}
        className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight"
      >
        {count}
        {stat.suffix}
      </h3>

      <p className="text-blue-100 font-medium">{stat.label}</p>

      {/* Decorative dash below text */}
      <div className="w-12 h-1 bg-blue-300 rounded mx-auto mt-4"></div>
    </motion.div>
  );
};

export default Stats;
