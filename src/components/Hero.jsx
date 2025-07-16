import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative h-[70vh] flex flex-col items-center justify-center text-center bg-gray-900 text-white overflow-hidden opacity-0 shadow-xl"
      initial={{ opacity: 1, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0d1117" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 1 },
              push: { quantity: 10 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 100 },
            move: { enable: true, speed: 1, direction: "none", random: false },
            number: { value: 100, density: { enable: true, area: 1000 } },
            opacity: { value: 0.2, random: false },
            shape: { type: "circle" },
            size: { value: 2, random: true },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0 w-full h-full"
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }} // 🔹 Ensures repeated animation
      >
        <h1 className="text-5xl font-bold">Hi, I'm Serif Cetinalp</h1>
        <p className="text-lg text-gray-300 mt-4">
          {/* Software developer passionate about building high-quality web applications. */}
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View My Work
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
