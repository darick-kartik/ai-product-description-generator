import { motion } from "framer-motion";

const LoadingSkeleton = ({
  lines = 8,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: index * 0.08,
          }}
          className={`h-4 rounded-full bg-border ${
            index === lines - 1
              ? "w-2/3"
              : index % 3 === 0
              ? "w-full"
              : index % 3 === 1
              ? "w-11/12"
              : "w-5/6"
          }`}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;