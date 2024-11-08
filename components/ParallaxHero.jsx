import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <motion.div style={{ y }} className="bg-white">
      {/* Your existing hero content */}
    </motion.div>
  );
}; 