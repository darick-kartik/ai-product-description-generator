import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.01,
            }
          : {}
      }
      className={`glass-card ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;