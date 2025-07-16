import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Button from "./Button"; // Import the reusable button

const Resume = () => {
  const resumeUrl = "/Serif_Cetinalp.pdf";

  return (
    <motion.section
      id="resume"
      className="py-20 px-6 bg-gray-900 text-white flex flex-col items-center text-center opacity-0"
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      >
        Download My Resume
      </motion.h2>

      {/* Download Button */}
      <Button text="Download Resume" icon={<FaDownload />} href={resumeUrl} download={true} />
    </motion.section>
  );
};

export default Resume;
