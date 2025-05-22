import { Card } from "./Card";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

const TeamCard = ({ name, role, image, socialLinks, className, ...props }) => {
  return (
    <Card
      className={cn("h-full", className)}
      cardClassName="h-full p-0 overflow-hidden"
      {...props}
    >
      <div className="overflow-hidden aspect-[4/5] relative group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <motion.h3
            className="text-xl font-bold mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {role}
          </motion.p>

          {socialLinks && (
            <motion.div
              className="flex space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
