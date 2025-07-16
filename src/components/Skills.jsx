import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";
import { FaReact, FaNodeJs, FaJs, FaPython, FaDatabase, FaGitAlt, FaUnity, FaJava } from "react-icons/fa";
import { GrJava } from "react-icons/gr";
import { LiaJava } from "react-icons/lia";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "Python", icon: <FaPython />, color: "text-blue-300" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Databases", icon: <FaDatabase />, color: "text-gray-500" },
  { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-orange-500" },
  { name: "Unity", icon: <FaUnity />, color: "text-gray-400" },
  { name: "Java", icon: <FaJava />, color: "text-amber-500" },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-gray-800 text-white flex flex-col items-center text-center opacity-0"
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-gray-900 hover:scale-130 transition duration-300"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          >
            <div className={`text-5xl ${skill.color} mb-2`}>{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
