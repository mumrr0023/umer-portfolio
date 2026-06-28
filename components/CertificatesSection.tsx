"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award, Maximize, X } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Fundamentals of Graphic Design",
    issuer: "CalArts • Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/DLFTH9E9DVYN",
    type: "Design",
    color: "purple",
  },

  {
    title: "Pixel Art for Video Games",
    issuer: "Michigan State University",
    link: "https://www.coursera.org/account/accomplishments/verify/3EY8KMJA0EIG",
    type: "Game Art",
    color: "cyan",
  },

  {
    title: "Game Design & Development: 2D Shooter",
    issuer: "Michigan State University",
    link: "https://www.coursera.org/account/accomplishments/verify/CGBX3HJDAF32",
    type: "Game Development",
    color: "purple",
  },

  {
    title: "Unreal Engine 5 Environment Design",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/HNXBYKF1TJHY",
    type: "Environment Design",
    color: "cyan",
  },

  {
    title: "Introduction to Game Design",
    issuer: "Epic Games",
    link: "https://www.coursera.org/account/accomplishments/verify/0BL1QKJIS5ZG",
    type: "Game Design",
    color: "purple",
  },

  {
    title: "Introduction to C# Programming & Unity",
    issuer: "University of Colorado System",
    link: "https://www.coursera.org/account/accomplishments/verify/F6YZN2WREB2I",
    type: "Programming",
    color: "cyan",
  },

  {
    title: "Academic Scholarship Achievement",
    issuer: "Iqra University Islamabad",
    link: "#",
    type: "Academic",
    color: "purple",
  },

  {
    title: "Cyber Security Fundamentals",
    issuer: "TryHackMe",
    link: "#",
    type: "Cyber Security",
    color: "cyan",
  },
];

export default function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="relative z-10 max-w-7xl mx-auto px-6 py-28">

      {/* Heading */}
      <div className="text-center mb-16">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Certifications
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Learning & Achievements
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
          Verified certifications, academic achievements,
          creative learning paths, and technical development
          across design, AI systems, UX thinking, and game development.
        </p>

      </div>

      {/* Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  {certificates.map((cert, index) => (

    <motion.div
      key={index}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className={`overflow-hidden rounded-3xl border backdrop-blur-md transition-all duration-300 ${
        cert.color === "purple"
          ? "border-purple-500/20 bg-purple-500/5 hover:border-purple-400/40"
          : "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-400/40"
      }`}
    >

      {/* Certificate Image */}
      <div className="relative h-48 overflow-hidden">

        <img
          src={`/certificates/${
            [
              "graphic-design.png",
              "pixel-art.png",
              "2d-shooter.png",
              "ue5-environment.png",
              "intro-game-design.png",
              "unity-csharp.png",
              "scholarship.png",
              "tryhackme-cybersecurity.png",
            ][index]
          }`}
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

      </div>

      {/* Content */}
      <div className="p-6">

        <span
          className={`text-xs uppercase tracking-[0.2em] ${
            cert.color === "purple"
              ? "text-purple-300"
              : "text-cyan-300"
          }`}
        >
          {cert.type}
        </span>

        <h3 className="text-lg font-semibold text-white mt-3 mb-3 leading-snug">
          {cert.title}
        </h3>

        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {cert.issuer}
        </p>

        {cert.link !== "#" ? (
          <a
            href={cert.link}
            target="_blank"
            className={`inline-flex items-center gap-2 text-sm font-medium transition ${
              cert.color === "purple"
                ? "text-purple-300 hover:text-purple-200"
                : "text-cyan-300 hover:text-cyan-200"
            }`}
          >
            Verify Certificate
            <ExternalLink size={16} />
          </a>
        ) : (
          <button
            onClick={() => setSelectedImage(`/certificates/${
              [
                "graphic-design.png",
                "pixel-art.png",
                "2d-shooter.png",
                "ue5-environment.png",
                "intro-game-design.png",
                "unity-csharp.png",
                "scholarship.png",
                "tryhackme-cybersecurity.png",
              ][index]
            }`)}
            className={`inline-flex items-center gap-2 text-sm font-medium transition ${
              cert.color === "purple"
                ? "text-purple-300 hover:text-purple-200"
                : "text-cyan-300 hover:text-cyan-200"
            }`}
          >
            View
            <Maximize size={16} />
          </button>
        )}

      </div>

    </motion.div>

  ))}

</div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
}