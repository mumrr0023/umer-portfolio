"use client";

import Link from "next/link";
import { useState } from "react";
import { Brain, Palette, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "ai",
    title: "AI Content Automation Stack",
    color: "purple",
    icon: <Brain className="w-7 h-7" />,
    description:
      "Built a complete AI-powered marketing workflow for scalable advertisement campaigns using AI avatars, automation systems, content pipelines, script generation, voice synthesis, and market research.",
    tags: [
      "AI Automation",
      "Digital Marketing",
      "Content Systems",
      "Workflow Design",
    ],
    details:
      "Developed a structured automation pipeline covering market research, psychographic personas, AI-generated scripts, voice synthesis, AI avatar production, and unified delivery systems for scalable digital campaigns.",
  },

  {
    id: "ux",
    title: "UX Systems & Workflow Architecture",
    color: "cyan",
    icon: <Palette className="w-7 h-7" />,
    description:
      "Contributed UX analysis, workflow structuring, heuristic evaluation sessions, and usability-oriented system planning for a multi-tool cybersecurity FYP platform integrating CLI and web-based operational utilities.",
    tags: [
      "UX Analysis",
      "Software Requirements",
      "Heuristic Evaluation",
      "Workflow Design",
    ],
    details:
      "Collaborated within a university Final Year Project focused on a multi-tool cybersecurity operations hub integrating CLI-based utilities with supporting web-based interfaces. My contribution centered around UX understanding, workflow organization, heuristic evaluation participation, and wireframe/flow-structure planning to improve usability across complex tool interactions. Worked alongside teammates during usability review discussions involving heuristic tables, interface flow analysis, accessibility of operational tools, and reduction of friction between technical workflows and user interaction layers.",
  },
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 py-28">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Featured Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Projects & Creative Systems
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
          AI automation pipelines, UX analysis systems, digital marketing strategy, and creative workflow design backed by practical execution.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className={`px-6 py-3 rounded-2xl border transition-all duration-300 ${
              activeProject.id === project.id
                ? project.color === "purple"
                  ? "border-purple-500 bg-purple-500/20 text-purple-300"
                  : "border-cyan-500 bg-cyan-500/20 text-cyan-300"
                : "border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-white/20"
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Active Project Card */}
      <div
        className={`rounded-3xl border backdrop-blur-md p-8 md:p-12 transition-all duration-500 ${
          activeProject.color === "purple"
            ? "border-purple-500/30 bg-black/70 text-white"
            : "border-cyan-500/30 bg-black/70 text-white"
        }`}
      >

        {/* Title */}
        <div className="flex items-start gap-5 mb-8">
          <div
            className={`p-4 rounded-2xl ${
              activeProject.color === "purple"
                ? "bg-purple-500/20 text-purple-400"
                : "bg-cyan-500/20 text-cyan-400"
            }`}
          >
            {activeProject.icon}
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-3 text-white">
              {activeProject.title}
            </h3>

            {/* ONLY FIXED: description readability */}
            <p className="text-gray-200 leading-relaxed max-w-4xl">
              {activeProject.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {activeProject.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-sm text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ONLY FIXED: breakdown readability */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <h4 className="text-xl font-semibold text-white mb-4">
            Project Breakdown
          </h4>

          <p className="text-gray-200 leading-relaxed">
            {activeProject.details}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/30 transition-all duration-300"
        >
          View More Projects
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

    </section>
  );
}