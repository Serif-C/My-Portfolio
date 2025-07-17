import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Senile Sorcery",
    description:
      "Senile Sorcery was developed in Unity using C#, created as part of a game development course. Framed as a 2D survival game, it serves as a real-time systems sandbox where players, in the role of an elderly sorcerer, face a continuous influx of hostile entities. At its core, the project explores algorithmic enemy spawning, event-driven architecture, and real-time collision detection. Optimization techniques such as object pooling and spatial partitioning are used to manage the high volume of on-screen entities (\"bullets\" and enemies) without compromising frame rate. The game also features a modular upgrade system designed with scalability and clean abstraction in mind, enabling dynamic spell behaviors and stat changes through composable components. ",

    whatILearned: [
      "Algorithm Design & Optimization",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Memory Management",
      "Problem-Solving & Debugging",
      "User Experience (UX) & Interface Design",
    ],

    techLogos: [
      { name: "Unity", src: import.meta.env.BASE_URL + "logos/Unity.png", alt: "Unity Logo" },
      { name: "C#", src: import.meta.env.BASE_URL + "logos/Csharp.png", alt: "C# Logo" },
      { name: "Photoshop", src: import.meta.env.BASE_URL + "logos/Photoshop.png", alt: "Photoshop Logo" },
      { name: "Aseprite", src: import.meta.env.BASE_URL + "logos/Aseprite.png", alt: "Aseprite Logo" },
    ],

    demoLink: "https://serifcetinalp.itch.io/senile-sorcery",
    githubLink: "https://github.com/Serif-C/Senile-Sorcery",  
    image: import.meta.env.BASE_URL + "s_s.jpg"

  },
  // You can update Project 2/3 similarly later...

  {
    title: "Animated Graphics Scene",
    description:
      "This project showcases a real-time animated scene developed using modern OpenGL and C++, emphasizing hierarchical modeling, camera control, and shader programming. The scene features a fully animated frog composed of two-level hierarchical body parts (e.g., legs and head). A custom vertex-fragment shader pipeline enhances visual fidelity with a stylized water ripple effect applied to the environment, while procedurally generated textures contribute to rendering efficiency and realism. A 360° fly-around camera was implemented using lookAt() and model-view transformations (setMV()), allowing dynamic exploration of the animated space. The system maintains real-time performance with frame rate monitoring and is optimized for interactive rendering on consumer hardware. This project demonstrates advanced understanding of graphics pipelines, GLSL shader programming, real-time rendering principles, and interactive animation design.",

    whatILearned: [
      "Shader Programming (GLSL)",
      "Hierarchical Modeling & Scene Graphs",
      "Real-Time Systems & Synchronization",
      "Transformation Matrices & Linear Algebra",
      "Graphics Pipeline Architecture",
      
    ],

    techLogos: [
      { name: "OpenGL", src: import.meta.env.BASE_URL + "logos/Unity.png", alt: "Unity Logo" },
      { name: "C++", src: import.meta.env.BASE_URL + "logos/Csharp.png", alt: "C# Logo" },
      { name: "Visual Studio Code", src: import.meta.env.BASE_URL + "logos/Photoshop.png", alt: "Photoshop Logo" },
    ],

    demoLink: "https://www.youtube.com/watch?v=DJWsR8N3uAA&ab_channel=serifcetinalp",
    // githubLink: "https://github.com/project-repo",
    image: import.meta.env.BASE_URL + "frog.jpg",
  },

  {
    title: "Light Chaser Game",
    description:
      "This embedded systems project implements an interactive Light Chaser game on the Dragon12 board using C and assembly, targeting the HCS12 microcontroller. The game challenges players to press the correct button corresponding to a lit LED in sequence, with increasing speed over time. Real-time responsiveness and score tracking were implemented using precise timing control and interrupt-driven programming. The system interfaces with hardware components including a 7-segment LED display for score output, input buttons, and a programmed lighting pattern across multiple LEDs. Timers and polling loops were employed to detect player input within specified time windows, while debouncing logic ensured reliable button interaction. This project required close-to-the-metal programming and direct memory-mapped I/O control, exemplifying the fundamentals of embedded systems design.",

    whatILearned: [
      "Algorithm Design & Optimization",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Memory Management",
      "Problem-Solving & Debugging",
      "User Experience (UX) & Interface Design",
    ],

    techLogos: [
      { name: "Unity", src: import.meta.env.BASE_URL + "logos/Unity.png", alt: "Unity Logo" },
      { name: "C#", src: import.meta.env.BASE_URL + "logos/Csharp.png", alt: "C# Logo" },
      { name: "Photoshop", src: import.meta.env.BASE_URL + "logos/Photoshop.png", alt: "Photoshop Logo" },
      { name: "Aseprite", src: import.meta.env.BASE_URL + "logos/Aseprite.png", alt: "Aseprite Logo" },
    ],

    demoLink: "https://www.youtube.com/watch?v=9YtMycJf2O4&ab_channel=serifcetinalp",
    // githubLink: "https://github.com/project-repo",
    image: import.meta.env.BASE_URL + "arduino_image.jpg",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-800 text-white flex flex-col items-center text-center opacity-0"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      viewport={{ once: false }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      >
        My Projects
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between bg-gray-900 hover:scale-102 transition duration-300 rounded-3xl shadow-lg overflow-hidden p-8 gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.3 }}
            viewport={{ once: false }}
          >
            {/* Left Side: Project Info */}
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-between h-full">
              <h3 className="text-3xl font-bold mb-2">{project.title}</h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-2">{project.description}</p>

              {/* What I Learned */}
              {project.whatILearned && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">What I Learned:</h4>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {project.whatILearned.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      
                         {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack with Logos */}
              {project.techLogos && (
                <div className="mb-1">
                  <span className="font-semibold text-gray-200 block mb-2">Made with:</span>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center">
                    {project.techLogos.map((tool, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full"
                      >
                        <img src={tool.src} alt={tool.alt} className="w-5 h-5" />
                        <span className="text-sm">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex space-x-4 justify-center md:justify-start mt-6">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  ▶ Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-black border-gray-700 text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  🖥 GitHub
                </a>
              </div>
            </div>

            {/* Right Side: Project Image */}
            <motion.div
              className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: index * 0.3 }}
              viewport={{ once: false }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;