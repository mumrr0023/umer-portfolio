"use client";

<<<<<<< HEAD
import { motion } from "framer-motion";
import { useState } from "react";
=======
import CertificatesSection from "../components/CertificatesSection";
import FeaturedProjects from "../components/FeaturedProjects";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
>>>>>>> c6b99ef (Updated portfolio UI and project system)
import { TypeAnimation } from "react-type-animation";
import {
  ArrowRight,
  Brain,
  Palette,
  Megaphone,
  Layers3,
  BadgeCheck,
  Mail,
  Menu,
  X,
<<<<<<< HEAD
=======
  Sun,
  Moon,
>>>>>>> c6b99ef (Updated portfolio UI and project system)
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
<<<<<<< HEAD
  return (
    <main className="relative bg-black text-white overflow-hidden scroll-smooth">

=======
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
  const root = document.documentElement;

  if (darkMode) {
    root.classList.add("dark");
    root.style.color = "#ffffff";
    root.style.backgroundColor = "#000000";
  } else {
    root.classList.remove("dark");
    root.style.color = "#000000";
    root.style.backgroundColor = "#ffffff";
  }
}, [darkMode]);

  return (
    <main
      className={`relative overflow-hidden scroll-smooth transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
>>>>>>> c6b99ef (Updated portfolio UI and project system)
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full"></div>

<<<<<<< HEAD
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/30">

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <h1 className="text-lg font-semibold tracking-wide">
      Muhammad Umer
    </h1>

    {/* Desktop Menu */}
    <nav className="hidden md:flex gap-8 text-sm text-gray-300">

      <a href="#about" className="hover:text-white transition">
        About
      </a>

      <a href="#expertise" className="hover:text-white transition">
        Expertise
      </a>

      <a href="#projects" className="hover:text-white transition">
        Projects
      </a>

      <a href="#contact" className="hover:text-white transition">
        Contact
      </a>

    </nav>

    {/* Mobile Button */}
    <button
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X /> : <Menu />}
    </button>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl">

      <div className="flex flex-col px-6 py-5 gap-5 text-gray-300">

        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>

    </div>
  )}

</header>

      {/* HERO SECTION */}
=======
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b ${
          darkMode
            ? "bg-black/40 border-white/10"
            : "bg-white/70 border-black/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <h1 className="text-lg font-semibold tracking-wide">
              Muhammad Umer
            </h1>

            {/* Theme Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all ${
                darkMode
                  ? "border-white/10 bg-white/5 hover:border-cyan-400"
                  : "border-black/10 bg-black/5 hover:border-purple-500"
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

          </div>

          {/* Desktop Menu */}
          <nav
            className={`hidden md:flex gap-8 text-sm ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#expertise" className="hover:text-cyan-400 transition">
              Expertise
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden border-t ${
              darkMode
                ? "bg-black border-white/10"
                : "bg-white border-black/10"
            }`}
          >
            <div className="flex flex-col px-6 py-5 gap-5">
              <a href="#about">About</a>
              <a href="#expertise">Expertise</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
>>>>>>> c6b99ef (Updated portfolio UI and project system)
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[90vh] pt-24 px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.35em] text-sm text-purple-400 mb-5"
        >
          <TypeAnimation
            sequence={[
              "Creative Technology",
              2000,
              "Digital Marketing",
              2000,
              "AI Automation",
              2000,
              "Brand Strategy",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-5xl"
        >
          Muhammad Umer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
<<<<<<< HEAD
          className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
=======
          className={`mt-8 text-lg md:text-xl max-w-2xl leading-relaxed ${
            darkMode ? "text-white" : "text-black"
          }`}
>>>>>>> c6b99ef (Updated portfolio UI and project system)
        >
          Blending AI automation, visual systems, digital strategy,
          and modern branding to craft impactful digital experiences.
        </motion.p>

        {/* Buttons */}
<<<<<<< HEAD
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-5 mt-12 flex-wrap justify-center"
        >

          <a
            href="#projects"
            className="group px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 font-medium"
          >

=======
        <div className="flex gap-5 mt-12 flex-wrap justify-center">

          <a
            href="#projects"
            className="group px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 font-medium text-white"
          >
>>>>>>> c6b99ef (Updated portfolio UI and project system)
            View Projects

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
<<<<<<< HEAD

=======
>>>>>>> c6b99ef (Updated portfolio UI and project system)
          </a>

          <a
            href="#contact"
<<<<<<< HEAD
            className="px-8 py-4 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-medium"
=======
            className={`px-8 py-4 rounded-full border transition-all duration-300 font-medium ${
              darkMode
                ? "border-white/10 hover:border-cyan-400"
                : "border-black/10 hover:border-purple-500"
            }`}
>>>>>>> c6b99ef (Updated portfolio UI and project system)
          >
            Contact Me
          </a>

<<<<<<< HEAD
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-16 max-w-4xl">

=======
          <a
            href="/resume/Muhammad-Umer-Resume.pdf"
            download
            className="px-8 py-4 rounded-full bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-all duration-300"
          >
            Download Resume
          </a>

        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-16 max-w-4xl">
>>>>>>> c6b99ef (Updated portfolio UI and project system)
          {[
            "AI Automation",
            "Digital Marketing",
            "Visual Design",
            "Brand Strategy",
            "UX Thinking",
            "Content Systems",
            "Creative Direction",
            "Copywriting",
          ].map((item) => (
            <span
              key={item}
<<<<<<< HEAD
              className="px-4 py-2 rounded-full border border-gray-800 bg-white/5 backdrop-blur-md text-sm text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-300"
=======
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white"
                  : "border-black/10 bg-black/5 text-black"
              }`}
>>>>>>> c6b99ef (Updated portfolio UI and project system)
            >
              {item}
            </span>
          ))}
<<<<<<< HEAD

        </div>

      </section>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-28"
      >

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>

=======
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 max-w-6xl mx-auto px-6 py-28"
      >
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
>>>>>>> c6b99ef (Updated portfolio UI and project system)
            <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Creative systems driven by strategy and innovation.
            </h2>
<<<<<<< HEAD

          </div>

          <div>

            <p className="text-gray-300 leading-relaxed text-lg">
              I’m Muhammad Umer — a Computer Science graduate and aspiring
              technopreneur focused on AI-powered workflows, digital branding,
              content systems, and creative technology.

              My work combines visual communication, automation strategy,
              UX thinking, and modern digital experiences to help ideas
              become scalable and impactful.
            </p>

          </div>

        </div>

      </motion.section>

      {/* EXPERTISE */}
      <motion.section
        id="expertise"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >

=======
          </div>

          <div>
            <p
              className={`leading-relaxed text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              I’m Muhammad Umer — a Computer Science graduate focused on
              AI-powered workflows, UX systems, branding, automation,
              and creative technology experiences.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >
>>>>>>> c6b99ef (Updated portfolio UI and project system)
        <div className="text-center mb-16">

          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Areas I Focus On
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: <Brain size={28} />,
              title: "AI Automation",
<<<<<<< HEAD
              text: "Building scalable AI-driven systems and automated content workflows.",
=======
              text: "Building scalable AI-driven systems and automated workflows.",
>>>>>>> c6b99ef (Updated portfolio UI and project system)
            },
            {
              icon: <Megaphone size={28} />,
              title: "Digital Marketing",
<<<<<<< HEAD
              text: "Creative digital strategies focused on visibility, branding, and engagement.",
=======
              text: "Creative digital strategies focused on visibility and branding.",
>>>>>>> c6b99ef (Updated portfolio UI and project system)
            },
            {
              icon: <Palette size={28} />,
              title: "Visual Design",
<<<<<<< HEAD
              text: "Designing modern visual systems using composition, color theory, and branding.",
=======
              text: "Modern visual systems using composition and design thinking.",
>>>>>>> c6b99ef (Updated portfolio UI and project system)
            },
            {
              icon: <Layers3 size={28} />,
              title: "Creative Systems",
<<<<<<< HEAD
              text: "Combining technology, UX thinking, and design for impactful digital experiences.",
            },
          ].map((card) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500/40 transition-all duration-300"
            >

=======
              text: "Combining technology, UX, and design into impactful experiences.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-3xl border backdrop-blur-md p-8 transition-all duration-300 ${
                darkMode
                  ? "border-white/10 bg-white/5"
                  : "border-black/10 bg-black/5"
              }`}
            >
>>>>>>> c6b99ef (Updated portfolio UI and project system)
              <div className="text-purple-400 mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

<<<<<<< HEAD
              <p className="text-gray-400 leading-relaxed">
                {card.text}
              </p>

            </motion.div>
          ))}

        </div>

      </motion.section>
      
      {/* PROJECTS */}
<motion.section
  id="projects"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative z-10 max-w-7xl mx-auto px-6 py-28"
>

  <div className="text-center mb-16">

    <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
      Featured Work
    </p>

    <h2 className="text-4xl md:text-5xl font-bold">
      Projects & Creative Systems
    </h2>

  </div>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Project 1 */}
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500/40 transition-all duration-300"
    >

      <div className="mb-5 text-purple-400">
        <Brain size={30} />
      </div>

      <h3 className="text-3xl font-semibold mb-5">
        AI Content Automation Stack
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6">
        Designed an end-to-end AI-powered workflow for scalable
        advertisement campaigns using automation tools,
        content generation systems, AI avatars, and digital strategy.
      </p>

      <div className="flex flex-wrap gap-3">

        {[
          "AI Automation",
          "Digital Marketing",
          "Content Systems",
          "Workflow Design",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm text-gray-300"
          >
            {tag}
          </span>
        ))}

      </div>

    </motion.div>

    {/* Project 2 */}
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-500/40 transition-all duration-300"
    >

      <div className="mb-5 text-cyan-400">
        <Palette size={30} />
      </div>

      <h3 className="text-3xl font-semibold mb-5">
        Visual Design & Creative Direction
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6">
        Explored visual storytelling through poster composition,
        branding aesthetics, pixel-art experimentation,
        color harmony, and UI-focused digital design systems.
      </p>

      <div className="flex flex-wrap gap-3">

        {[
          "Branding",
          "Graphic Design",
          "Color Theory",
          "Creative Direction",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm text-gray-300"
          >
            {tag}
          </span>
        ))}

      </div>

    </motion.div>

  </div>

</motion.section>

      {/* CERTIFICATIONS */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative z-10 max-w-6xl mx-auto px-6 py-24"
>

  <div className="text-center mb-16">

    <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
      Certifications
    </p>

    <h2 className="text-4xl md:text-5xl font-bold">
      Learning & Development
    </h2>

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      "Fundamentals of Graphic Design — Coursera",
      "Game Design & Creative Systems",
      "AI Tools & Automation Learning",
      "UX Thinking & Software Analysis",
    ].map((cert) => (
      <motion.div
        whileHover={{ scale: 1.02 }}
        key={cert}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex items-center gap-4 hover:border-purple-500/40 transition-all duration-300"
      >

        <BadgeCheck className="text-purple-400" />

        <p className="text-gray-300">
          {cert}
        </p>

      </motion.div>
    ))}

  </div>

</motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
=======
              <p
                className={
                  darkMode ? "text-white" : "text-gray-600"
                }
              >
                {card.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      <FeaturedProjects />
      <CertificatesSection />

      {/* CONTACT */}
      <section
        id="contact"
>>>>>>> c6b99ef (Updated portfolio UI and project system)
        className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center"
      >

        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Let’s build impactful digital experiences together.
        </h2>

<<<<<<< HEAD
        <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg">
          Open to collaborations in AI automation, branding,
          creative systems, digital marketing, and modern content workflows.
        </p>

        <a
          href="mailto:m.ashskh733@gmail.com"
          className="inline-block mt-12 px-10 py-5 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-lg font-medium"
=======
        <p
          className={`mt-8 max-w-2xl mx-auto text-lg ${
            darkMode ? "text-white" : "text-gray-600"
          }`}
        >
          Open to collaborations in AI automation, branding,
          UX systems, digital marketing, and creative workflows.
        </p>

        <a
          href="mailto:m.umrr0023@gmail.com"
          className="inline-block mt-12 px-10 py-5 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-lg font-medium text-white"
>>>>>>> c6b99ef (Updated portfolio UI and project system)
        >
          Get In Touch
        </a>

<<<<<<< HEAD
      </motion.section>

      {/* FOOTER */}
<footer className="relative z-10 border-t border-white/10 py-10 px-6">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

    <div>

      <h3 className="text-xl font-semibold">
        Muhammad Umer
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        Creative Technology • AI Automation • Digital Strategy
      </p>

    </div>

  </div>

    {/* Socials */}
    
    <div className="flex items-center gap-5">

  {/* Email */}
  <a
    href="mailto:m.ashskh733@gmail.com"
    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-purple-500 transition-all duration-300"
  >
    <Mail size={18} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/muhammad-umer-299187285"
    target="_blank"
    className="text-sm text-gray-400 hover:text-white transition"
  >
    LinkedIn
  </a>

  {/* WhatsApp / Contact */}
  <a
    href="https://wa.me/923175460802"
    target="_blank"
    className="text-sm text-gray-400 hover:text-white transition"
  >
    Contact
  </a>

</div>

</footer>

=======
      </section>

      {/* FOOTER */}
      <footer
        className={`relative z-10 border-t py-10 px-6 ${
          darkMode
            ? "border-white/10"
            : "border-black/10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-xl font-semibold">
              Muhammad Umer
            </h3>

            <p
              className={`text-sm mt-2 ${
                darkMode ? "text-white" : "text-gray-600"
              }`}
            >
              Creative Technology • AI Automation • Digital Strategy
            </p>
          </div>

          <div className="flex items-center gap-5">

            <a
              href="mailto:m.umrr0023@gmail.com"
              className="w-11 h-11 rounded-full border flex items-center justify-center hover:border-purple-500 transition-all duration-300"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-umer-aiuxautom/"
              target="_blank"
              className={darkMode ? "text-white" : "text-gray-600"}
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/923175460802"
              target="_blank"
              className={darkMode ? "text-white" : "text-gray-600"}
            >
              Contact
            </a>

          </div>

        </div>
      </footer>
>>>>>>> c6b99ef (Updated portfolio UI and project system)
    </main>
  );
}