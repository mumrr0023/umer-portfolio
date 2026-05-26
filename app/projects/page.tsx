"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  PlayCircle,
  Award,
} from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      {/* TOP BAR */}
      <div
        className={`sticky top-0 z-50 backdrop-blur-md border-b ${
          darkMode
            ? "bg-black/70 border-white/10"
            : "bg-white/70 border-black/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full border transition-all ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-black/10 bg-black/5"
            }`}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio Projects
          </p>

          <h1 className="text-5xl font-bold mb-8">
            Project Showcase
          </h1>

          {/* AI AVATAR SHOWCASE */}

          <div className="grid md:grid-cols-3 gap-6 mb-20">

            {[
              "/projects/ai-project-0.jpg",
              "/projects/ai-project-1.jpg",
              "/projects/ai-project-2.jpg",
            ].map((img, index) => (

              <div
                key={index}
                className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md"
              >

                <img
                  src={img}
                  alt={`AI Avatar ${index + 1}`}
                  className="w-full h-[420px] object-cover"
                />

              </div>

            ))}

          </div>

          <p
            className={`max-w-3xl leading-relaxed text-lg ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            A collection of AI automation systems, UX-focused software
            analysis, educational simulations, creative workflows,
            game projects, and AI-avatar-based marketing campaigns.
          </p>

        </div>

        {/* AI UGC PROJECT */}
        <div
          className={`rounded-3xl border p-8 mb-12 ${
            darkMode
              ? "border-purple-500/20 bg-purple-500/5"
              : "border-purple-300 bg-purple-50"
          }`}
        >

          <video
            controls
            className="w-full rounded-2xl mb-8"
          >
            <source
              src="/projects/Project-AI-Avatar-Based-UGC-AD-Sample.webm"
              type="video/webm"
            />
          </video>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">
            AI Avatar Based UGC Advertisement Campaign
          </h2>

          <p
            className={`leading-relaxed mb-6 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Created AI-avatar-based UGC advertisement campaigns using
            Google Flow Veo 3, AI workflow systems, scripting pipelines,
            AI-assisted creative direction, and post-production editing
            inside DaVinci Resolve.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "AI Avatars",
              "Google Veo 3",
              "DaVinci Resolve",
              "UGC Ads",
              "Creative Direction",
            ].map((tag) => (
              <span
                key={tag}
                className={`px-4 py-2 rounded-full text-sm border ${
                  darkMode
                    ? "border-white/10 bg-black/30 text-white"
                    : "border-black/10 bg-white text-black"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* 2D GAME */}
        <div
          className={`rounded-3xl border p-8 mb-12 ${
            darkMode
              ? "border-cyan-500/20 bg-cyan-500/5"
              : "border-cyan-300 bg-cyan-50"
          }`}
        >

          <img
            src="/projects/2DShooter-Demo.gif"
            alt="2D Shooter Demo"
            className="w-full rounded-2xl mb-8"
          />

          <h2 className="text-3xl font-bold mb-4 text-cyan-400">
            2D Shooter Space Adventures
          </h2>

          <p
            className={`leading-relaxed mb-6 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Educational and creative 2D shooter project developed during
            game design coursework. Focused on gameplay environment setup,
            animation integration, creative scene structuring, and user
            interaction flow using Unity and provided asset systems.
          </p>

          <a
            href="https://mash-umer.itch.io/2dshooter-space-adventures"
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-cyan-500 text-black font-medium hover:scale-105 transition-all"
          >
            <PlayCircle size={18} />
            Play Game
            <ExternalLink size={16} />
          </a>

        </div>

        {/* SOLAR SYSTEM */}
        <div
          className={`rounded-3xl border p-8 mb-12 ${
            darkMode
              ? "border-yellow-500/20 bg-yellow-500/5"
              : "border-yellow-300 bg-yellow-50"
          }`}
        >

          <img
            src="/projects/SolarGame-Demo.gif"
            alt="Solar System Demo"
            className="w-full rounded-2xl mb-8"
          />

          <h2 className="text-3xl font-bold mb-4 text-yellow-400">
            Interactive Solar System Simulation
          </h2>

          <p
            className={`leading-relaxed mb-6 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Educational 3D solar system simulation project designed for
            children and beginner learners. Included environment setup,
            scene arrangement, visual interaction systems, and creative
            educational presentation using Unity workflows.
          </p>

          <a
            href="https://mash-umer.itch.io/solar-system"
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-yellow-400 text-black font-medium hover:scale-105 transition-all"
          >
            <PlayCircle size={18} />
            Open Simulation
            <ExternalLink size={16} />
          </a>

        </div>
      </div>
    </main>
  );
}