"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="relative bg-black text-white overflow-hidden scroll-smooth">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full"></div>

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
          className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
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
            className="group px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 font-medium"
          >

            View Projects

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />

          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-medium"
          >
            Contact Me
          </a>

        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-16 max-w-4xl">

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
              className="px-4 py-2 rounded-full border border-gray-800 bg-white/5 backdrop-blur-md text-sm text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-300"
            >
              {item}
            </span>
          ))}

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

            <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Creative systems driven by strategy and innovation.
            </h2>

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
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500/40 transition-all duration-300"
            >

              <div className="text-purple-400 mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

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
        className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center"
      >

        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Let’s build impactful digital experiences together.
        </h2>

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg">
          Open to collaborations in AI automation, branding,
          creative systems, digital marketing, and modern content workflows.
        </p>

        <a
          href="mailto:m.ashskh733@gmail.com"
          className="inline-block mt-12 px-10 py-5 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-lg font-medium"
        >
          Get In Touch
        </a>

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

    </main>
  );
}