"use client";

import FeaturedProjects from "../components/FeaturedProjects";
import CertificatesSection from "../components/CertificatesSection";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  Sun,
  Moon,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main
      id="home"
      className={`relative overflow-hidden scroll-smooth transition-colors duration-500 ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
        }`}
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${darkMode
            ? "bg-black/30 border-white/10"
            : "bg-white/80 border-black/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold tracking-wide">
              Muhammad Umer
            </h1>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${darkMode
                  ? "border-white/10 bg-white/5 hover:border-cyan-400"
                  : "border-black/10 bg-black/5 hover:border-purple-500"
                }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav
            className={`hidden md:flex gap-8 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"
              }`}
          >
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#expertise" className="hover:text-cyan-400 transition">
              Expertise
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#certifications" className="hover:text-cyan-400 transition">
              Certifications
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
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
          <div
            className={`md:hidden border-t backdrop-blur-xl ${darkMode
                ? "bg-black/90 border-white/10"
                : "bg-white/90 border-black/10"
              }`}
          >
            <div
              className={`flex flex-col px-6 py-5 gap-5 ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}
            >
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#expertise">Expertise</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certifications</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[90vh] pt-24 px-6">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
        >
          <Image
            src="/images/profile-pic.webp"
            alt="Muhammad Umer Profile"
            fill
            sizes="(max-width: 768px) 160px, 192px"
            className="object-cover"
            priority
          />
        </motion.div>

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
          className={`mt-8 text-lg md:text-xl max-w-2xl leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"
            }`}
        >
          Blending AI automation, visual systems, digital strategy,
          and modern branding to craft impactful digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-5 mt-12 flex-wrap justify-center"
        >
          <a
            href="#projects"
            className="group px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 font-medium text-white"
          >
            View Projects

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="#contact"
            className={`px-8 py-4 rounded-full border transition-all duration-300 font-medium ${darkMode
                ? "border-gray-700 hover:border-cyan-400 hover:text-cyan-400"
                : "border-black/10 hover:border-purple-500 hover:text-purple-600"
              }`}
          >
            Contact Me
          </a>

          <a
            href="/resume/Muhammad-Umer-Resume.pdf"
            download
            className="px-8 py-4 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-all duration-300 font-medium"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-16 max-w-4xl">
          {[
            "Next.js & TypeScript",
            "Python & C++",
            "AI Automation & RAG",
            "Agent-based Workflows",
            "FastAPI & MongoDB",
            "Digital Marketing",
            "UX/UI Design",
            "Brand Strategy",
          ].map((item) => (
            <span
              key={item}
              className={`px-4 py-2 rounded-full border backdrop-blur-md text-sm transition-all duration-300 ${darkMode
                  ? "border-gray-800 bg-white/5 text-gray-300 hover:border-purple-500"
                  : "border-black/10 bg-black/5 text-gray-700 hover:border-purple-500"
                }`}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 max-w-6xl mx-auto px-6 py-28"
      >
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Creative systems driven by strategy and innovation.
            </h2>
          </div>

          <div>
            <p
              className={`leading-relaxed text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}
            >
              I’m Muhammad Umer — a Computer Science student (Graduating 2026) and aspiring
              technopreneur focused on software development, AI integrations, and creative technology.
            </p>
            <p
              className={`leading-relaxed text-lg ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}
            >
              Passionate about bridging technical development and business objectives through user-focused problem-solving, software design, and intelligent automation. I am continuously expanding my expertise in AI systems, including prompt and context engineering, agent-based workflows, Retrieval-Augmented Generation (RAG), and vector databases to create scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >
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
              text: "Building scalable AI-driven systems and automated content workflows.",
            },
            {
              icon: <Megaphone size={28} />,
              title: "Digital Marketing",
              text: "Creative digital strategies focused on visibility, branding, and engagement.",
            },
            {
              icon: <Palette size={28} />,
              title: "Visual Design",
              text: "Designing modern visual systems using composition, color theory, and branding.",
            },
            {
              icon: <Layers3 size={28} />,
              title: "Creative Systems",
              text: "Combining technology, UX thinking, and design for impactful digital experiences.",
            },
          ].map((card) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={card.title}
              className={`rounded-3xl border backdrop-blur-md p-8 transition-all duration-300 ${darkMode
                  ? "border-white/10 bg-white/5"
                  : "border-black/10 bg-black/5"
                }`}
            >
              <div className="text-purple-400 mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              <p
                className={`leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Academic Background
          </h2>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {/* Degree 1 */}
          <div className={`p-8 rounded-3xl border backdrop-blur-md transition-all duration-300 ${darkMode ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
            }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
              <span className={`text-sm font-medium px-4 py-1.5 rounded-full border mt-3 md:mt-0 ${darkMode ? "border-purple-500/30 text-purple-300 bg-purple-500/10" : "border-purple-500/20 text-purple-700 bg-purple-50"
                }`}>
                01/2022 – 02/2026
              </span>
            </div>
            <p className={`text-lg font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              IQRA University, Islamabad
            </p>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              GPA: 3.41 (85.3%)
            </p>
          </div>

          {/* Degree 2 */}
          <div className={`p-8 rounded-3xl border backdrop-blur-md transition-all duration-300 ${darkMode ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
            }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">A-Level</h3>
              <span className={`text-sm font-medium px-4 py-1.5 rounded-full border mt-3 md:mt-0 ${darkMode ? "border-purple-500/30 text-purple-300 bg-purple-500/10" : "border-purple-500/20 text-purple-700 bg-purple-50"
                }`}>
                01/2019 – 01/2021
              </span>
            </div>
            <p className={`text-lg font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Pak-Turk Maarif International Schools and Colleges, Islamabad
            </p>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Participated in Science Technology Fest and Competitions to learn and grow from and with my fellow peers.
            </p>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <CertificatesSection />

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center"
      >
        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Let’s build impactful digital experiences together.
        </h2>

        <p
          className={`mt-8 max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-400" : "text-gray-700"
            }`}
        >
          Open to collaborations in AI automation, branding,
          creative systems, digital marketing, and modern content workflows.
        </p>

        <a
          href="mailto:m.umrr0023@gmail.com"
          className="inline-block mt-12 px-10 py-5 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-lg font-medium text-white"
        >
          Get In Touch
        </a>
      </section>

      {/* FOOTER */}
      <footer
        className={`relative z-10 border-t py-10 px-6 ${darkMode
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
              className={`text-sm mt-2 ${darkMode ? "text-gray-400" : "text-gray-700"
                }`}
            >
              Software Development • AI Integrations • Creative Technology
            </p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5 mt-6">
          <a
            href="mailto:m.umrr0023@gmail.com"
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${darkMode
                ? "border-white/10 hover:border-purple-500"
                : "border-black/10 hover:border-purple-500"
              }`}
          >
            <Mail size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-umer-aiuxautom/"
            target="_blank"
            className={`text-sm transition ${darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-700 hover:text-black"
              }`}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/mumrr0023"
            target="_blank"
            className={`text-sm transition ${darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-700 hover:text-black"
              }`}
          >
            GitHub
          </a>

          <a
            href="https://wa.me/923175460802"
            target="_blank"
            className={`text-sm transition ${darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-700 hover:text-black"
              }`}
          >
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}