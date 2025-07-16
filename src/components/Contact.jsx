import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [messageStatus, setMessageStatus] = useState(null); // "success" or "error"

  // Validation Function
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handles input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setStatusMessage("");

    emailjs
      .send(
        "service_ayqlk1n", // Replace with your EmailJS Service ID
        "template_xn846r5", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "9eveiLuP09FOB9Hxh" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Message Sent Successfully!", response);
          setStatusMessage("✅ Message sent successfully!");
          setMessageStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Message Failed!", error);
          setStatusMessage("❌ Failed to send message. Please try again.");
          setMessageStatus("error");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gray-900 text-white flex flex-col items-center text-center opacity-0"
      initial={{ opacity: 0.9, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {["name", "email", "message"].map((field, index) => (
          <motion.div key={field} className="flex flex-col text-left" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <label className="text-gray-400 text-sm mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field !== "message" ? (
              <motion.input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                className={`px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 transition ${
                  errors[field] ? "border border-red-500" : "focus:ring-blue-500"
                }`}
                whileFocus={{ scale: 1.02 }}
              />
            ) : (
              <motion.textarea
                name={field}
                placeholder="Your Message"
                rows="4"
                value={formData[field]}
                onChange={handleChange}
                className={`px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 transition ${
                  errors[field] ? "border border-red-500" : "focus:ring-blue-500"
                }`}
                whileFocus={{ scale: 1.02 }}
              />
            )}
            {errors[field] && <p className="text-red-400 text-sm mt-1">{errors[field]}</p>}
          </motion.div>
        ))}

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      {/* Animated Success/Error Message */}
      {statusMessage && (
        <motion.div
          className={`mt-4 flex items-center space-x-2 text-lg ${messageStatus === "success" ? "text-green-400" : "text-red-400"}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {messageStatus === "success" ? <FaCheckCircle size={20} /> : <FaExclamationCircle size={20} />}
          <span>{statusMessage}</span>
        </motion.div>
      )}

      {/* Social Media Links */}
      <motion.div
        className="flex space-x-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: false }}
      >
        <a href="https://github.com/" target="_blank" className="text-gray-400 text-2xl hover:text-white transition duration-300">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" className="text-gray-400 text-2xl hover:text-white transition duration-300">
          <FaLinkedin />
        </a>
        <a href="mailto:serifcetinalp@gmail.com" className="text-gray-400 text-2xl hover:text-white transition duration-300">
          <FaEnvelope />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
