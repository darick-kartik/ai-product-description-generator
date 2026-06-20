import { motion } from "framer-motion";

const SecondaryButton = ({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  icon: Icon,
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.03,
              y: -2,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.98,
            }
      }
      className={`secondary-btn inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.button>
  );
};

export default SecondaryButton;