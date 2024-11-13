import { motion } from "framer-motion";

export const AnimatedHeader = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
    >
      {children}
    </motion.h2>
  );
}; 