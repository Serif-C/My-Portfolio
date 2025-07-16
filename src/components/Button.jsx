import { motion } from "framer-motion";

const Button = ({ text, icon, href, download = false }) => {
  return (
    <motion.a
      href={href}
      className="flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold transition duration-300 shadow-md"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.6)" }} // Glow effect
      whileTap={{ scale: 0.95 }} // Click animation
      download={download}
      target={download ? "_self" : "_blank"}
      rel="noopener noreferrer"
      style={{
        background: "linear-gradient(135deg, #3b82f6, #1e3a8a)", // Gradient background
      }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </motion.a>
  );
};

export default Button;
