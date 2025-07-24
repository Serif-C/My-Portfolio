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
          <img src={import.meta.env.BASE_URL + "food.jpg"} alt="Serif Cetinalp" className="w-full h-full object-cover" />
        </div>
        <div className="text-gray-300 leading-relaxed max-w-lg">
          <p className="mb-4">
            Hey, I’m Serif Cetinalp. I recently graduated with a degree in Computer Science, and I’m all about building cool stuff with code. In my free time, 
            you’ll usually find me playing video games, working out at the gym, or messing around in Unity trying out new game mechanic ideas — sometimes just for fun, 
            sometimes because I can’t stop thinking “what if…?”
          </p>
          <p>
            I’m always learning, always experimenting, and always down to work on something creative. 
            Whether it's a game prototype or a random coding project, I love bringing ideas to life.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
