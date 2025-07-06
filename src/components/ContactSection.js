import React from "react";
import "./HeroSection.css";

const ContactSection = () => (
  <section className="bg-gray-100 py-16 px-6 text-center" id="contact">
    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
    <p className="mb-4 text-lg">Let’s collaborate! You can reach me via email or LinkedIn.</p>
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <a
        href="mailto:youremail@example.com"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Email Me
      </a>
      <a
        href="https://linkedin.com/in/venkysagar"
        className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-black transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect on LinkedIn
      </a>
    </div>
  </section>
);

export default ContactSection;
