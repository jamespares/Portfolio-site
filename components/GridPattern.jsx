"use client";

import { motion } from "framer-motion";

const GridPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(1000px_at_center,white,transparent)]">
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(229 231 235 / 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(229 231 235 / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            opacity: 'var(--grid-opacity)',
          }} 
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GridPattern;