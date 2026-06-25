import { motion } from "framer-motion";

const SectionHeading = ({
  badge,
  title,
  highlight,
  description,
  align = "center",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mx-auto max-w-3xl ${
        align === "left" ? "text-left" : "text-center"
      }`}
    >
      {badge && <span className="badge">{badge}</span>}

      <h2 className="section-title mt-6">
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="section-subtitle mt-6">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;