import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gray-800 text-white flex flex-col items-center text-center opacity-0"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      viewport={{ once: false }}
    >

      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }} // 🔹 Ensures title reanimates
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl flex flex-col md:flex-row items-center md:items-start md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }} // 🔹 Enables re-triggering
      >
        <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full shadow-lg mb-6 md:mb-0 md:mr-10">
          <img src="/food.jpg" alt="Serif Cetinalp" className="w-full h-full object-cover" />
        </div>
        <div className="text-gray-300 leading-relaxed max-w-lg">
          <p className="mb-4">
            I'm a software developer with a passion for building high-performance applications.
            I specialize in modern web technologies such as **React, Node.js, and Tailwind CSS**.
          </p>
          <p>
            In my free time, I love **learning new programming concepts**, 
            contributing to **open-source projects**, and exploring new tools to improve efficiency.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
