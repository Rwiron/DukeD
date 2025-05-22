import React from 'react'

export default function Ftx() {
  return (
    <Link to="/" className="flex items-center">
      <motion.div
        className="overflow-hidden px-2 -my-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src="/images/footerDuke.png"
          alt="Duke Developers"
          className="h-25 w-auto object-contain"
        />
      </motion.div>
    </Link>
  );
}


