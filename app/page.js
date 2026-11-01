'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Briefcase, 
  GraduationCap, 
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  Camera
} from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // State untuk modal foto/gallery experience
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [expSlide, setExpSlide] = useState(0);

  const profile = {
    name: "Lutfi Farhan Prayoga",
    title: "Cloud & Infrastructure | Machine Learning & AI | Software Engineering",
    bio: "A Deep Learning & Computer Vision practitioner with a background in Information Systems. Skilled in building and optimizing image classification models, preprocessing techniques, and applying AI solutions to complex visual data.",
    location: "Surabaya, Indonesia",
    email: "LutfiFarhanPrayoga2@Gmail.com",
    linkedin: "https://www.linkedin.com/in/lutfifarhanprayoga/",
    cvPath: "/CV_Lutfi_Farhan_Prayoga.pdf", // Path ke file CV kamu di folder public/
    gpa: "3.14 / 4.00"
  };

  const totalBatikSlides = 19;
  const batikSlideImages = Array.from({ length: totalBatikSlides }, (_, i) => `/batikhub/slide-${i + 1}.jpg`);

  const totalThesisSlides = 9;
  const thesisSlideImages = Array.from({ length: totalThesisSlides }, (_, i) => `/thesis/${i + 1}.png`);

  const projects = [
    {
      id: "batikhub",
      isGallery: true,
      slides: batikSlideImages,
      category: "Cloud & Machine Learning • Bangkit Capstone (C241-PS409)",
      title: "BatikHub - Exploring the Wonders of Indonesian Batik",
      subtitle: "Scalable Cloud Backend & Real-time AI Batik Motif Recognition App",
      description: "Aplikasi mobile berbasis AI untuk mengidentifikasi 15+ jenis motif batik Indonesia secara real-time. Klik tombol di bawah untuk melihat 19 Slide Pitch Deck!",
      tags: ["Google Cloud Run", "Cloud SQL", "Express.js", "Prisma", "TensorFlow", "MobileNetV2", "Firebase", "Kotlin"]
    },
    {
      id: "skinnetx",
      isGallery: true,
      slides: thesisSlideImages,
      category: "Deep Learning & Medical AI",
      title: "SkinNetX - Skin Disease Classification",
      subtitle: "Hybrid Deep Learning Architecture (Thesis)",
      description: "Developed SkinNetX (MobileNetV2 + Xception) with CLAHE preprocessing to classify skin disease infections. Achieved 91.11% peak accuracy across multi-stage evaluations.",
      details: "Medical skin lesion identification is often hindered by high visual similarity across conditions. SkinNetX combines MobileNetV2 and Xception feature extractors with CLAHE image enhancement to improve convergence and classification precision across various train-test ratios and K-Fold cross-validations.",
      tags: ["Python", "TensorFlow", "MobileNetV2", "Xception", "CLAHE", "Deep Learning"]
    },
    {
      id: "optima",
      isGallery: false,
      category: "Systems & Business Analysis",
      title: "Optima Consultant - IT Quality & Risk Analysis",
      subtitle: "ISO/IEC 25010 Audit & Bowtie Risk Tracking",
      description: "Identified and mitigated key operational risks using Bowtie methodology. Conducted IT quality audits following ISO/IEC 25010 standards across 5 key quality attributes.",
      details: "Executed comprehensive internal IT quality audits on Student Information Systems. Classified non-conformities (MNC, mNC, OFI) and generated actionable recommendations for server scaling, zero-downtime deployments, UI refactoring, and MFA integration.",
      tags: ["ISO 25010", "Risk Management", "Bowtie Method", "System Audit", "QA"]
    },
    {
      id: "branding",
      isGallery: false,
      category: "Brand & Digital Strategy",
      title: "Kurangwaktu",
      subtitle: "Brand Management & Digital Product Strategy",
      description: "Formulated and executed digital brand strategies, reaching millions of impressions (1.6M+ reach). Led creative workflows and visual direction for e-commerce apparel.",
      details: "Spearheaded brand strategy, content creation pipelines, and digital campaigns for Kurangwaktu. Strengthened market positioning and increased audience engagement through data-driven visual direction.",
      tags: ["Brand Strategy", "Creative Direction", "Digital Marketing", "Social Media"]
    }
  ];

  const experiences = [
    { 
      role: "Cloud Computing Path", 
      org: "Bangkit Academy led by Google, GoTo, Traveloka", 
      year: "2024",
      images: ["/assets/bangkit-team.png"]
    },
    { 
      role: "Brand Manager / Creative Lead", 
      org: "Kurangwaktu", 
      year: "2024",
      images: [
        "/assets/kurangwaktu-1.jpg",
        "/assets/kurangwaktu-2.jpg"
      ]
    },
    { 
      role: "Logistics & Operations Specialist", 
      org: "Dekan Cup FST Universitas Airlangga", 
      year: "2023",
      images: ["/assets/logistics-team.jpg"] 
    },
    { 
      role: "Design & Media Creative Lead", 
      org: "ISAC HIMSI Universitas Airlangga", 
      year: "2023",
      images: ["/assets/isac-team.jpg"] 
    },
    { 
      role: "Design & Media Creative Lead", 
      org: "POINTER HIMSI Universitas Airlangga", 
      year: "2022",
      images: ["/assets/pointer-team.jpg"] 
    },
    { 
      role: "Logistics & Operations Specialist", 
      org: "INFEST Universitas Airlangga", 
      year: "2022",
      images: ["/assets/infest-team.JPG"] 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
          <a 
            href={`mailto:${profile.email}`} 
            className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 flex justify-center order-first lg:order-last">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900 border border-slate-800 p-2 rounded-3xl overflow-hidden shadow-2xl w-[260px] h-[340px] flex items-center justify-center">
              <img 
                src="/profile.png" 
                alt={profile.name} 
                className="w-full h-full object-cover rounded-2xl transition duration-300 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full font-mono">
            Available for Opportunities • {profile.location}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-400">{profile.name}</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium">{profile.title}</p>
          <p className="text-slate-300 leading-relaxed max-w-2xl">{profile.bio}</p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            {/* Tombol Download CV */}
            <a 
              href={profile.cvPath} 
              target="_blank" 
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl text-sm transition shadow-lg shadow-blue-600/20 active:scale-95"
            >
              <FileText className="w-4 h-4 text-white" /> Download CV
            </a>

            <a 
              href={profile.linkedin} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-sm transition"
            >
              <svg className="w-4 h-4 fill-blue-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg> 
              LinkedIn
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-sm transition"
            >
              <Mail className="w-4 h-4 text-emerald-400" /> {profile.email}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Briefcase className="text-emerald-400" /> Featured Projects
        </h2>
        <p className="text-xs text-slate-400 mb-8">👉 Klik tombol di bawah tiap kartu untuk membuka Pitch Deck / Slide Presentasi.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="w-full bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">{proj.category}</span>
                <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                <p className="text-xs text-slate-400 mb-3">{proj.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{proj.description}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentSlide(0);
                    setSelectedProject(proj);
                  }}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <FileText className="w-4 h-4" /> Buka Pitch Deck / Slide
                </button>

                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POP-UP MODAL SLIDE SHOW DECK */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[999] flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 w-full max-w-5xl rounded-2xl flex flex-col shadow-2xl relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-400">{selectedProject.subtitle}</p>
              </div>
              <button 
                type="button" 
                onClick={() => setSelectedProject(null)} 
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Viewer Gambar Slide */}
            <div className="p-4 flex items-center justify-center bg-slate-950 min-h-[420px]">
              {selectedProject.isGallery && selectedProject.slides ? (
                <div className="relative w-full h-[450px] flex items-center justify-center bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                  <img 
                    src={selectedProject.slides[currentSlide]} 
                    alt={`Slide ${currentSlide + 1}`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="p-6 space-y-4 text-left w-full">
                  <span className="text-xs font-mono text-emerald-400 uppercase">{selectedProject.category}</span>
                  <h4 className="text-2xl font-bold text-white">{selectedProject.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900 p-6 rounded-xl border border-slate-800">
                    {selectedProject.details || selectedProject.description}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer (Controls) */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex justify-between items-center">
              {selectedProject.isGallery && selectedProject.slides ? (
                <>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      disabled={currentSlide === 0} 
                      onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                      className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-white transition cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-slate-300 font-mono">
                      Slide <strong className="text-emerald-400">{currentSlide + 1}</strong> / {selectedProject.slides.length}
                    </span>
                    <button 
                      type="button"
                      disabled={currentSlide === selectedProject.slides.length - 1} 
                      onClick={() => setCurrentSlide(prev => Math.min(selectedProject.slides.length - 1, prev + 1))}
                      className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-white transition cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setSelectedProject(null)} 
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-lg transition cursor-pointer"
                  >
                    Tutup Presentasi
                  </button>
                </>
              ) : (
                <button 
                  type="button"
                  onClick={() => setSelectedProject(null)} 
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-lg transition cursor-pointer ml-auto"
                >
                  Tutup
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Experience Timeline */}
      <section className="bg-slate-900/50 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="text-purple-400" /> Experience & Organizational Roles
          </h2>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-lg">
                <div>
                  <h3 className="font-semibold text-slate-200">{exp.role}</h3>
                  <p className="text-xs text-slate-400">{exp.org}</p>
                  
                  {exp.images && exp.images.length > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        setExpSlide(0);
                        setSelectedExperience(exp);
                      }}
                      className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition cursor-pointer active:scale-95"
                    >
                      <Camera className="w-3.5 h-3.5" /> Lihat Dokumentasi ({exp.images.length} Foto)
                    </button>
                  )}
                </div>
                <span className="text-xs font-mono bg-slate-800 text-blue-400 px-3 py-1 rounded-full border border-slate-700">
                  {exp.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL PREVIEW FOTO DOKUMENTASI KEGIATAN & PRODUK */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl relative flex flex-col">
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900">
              <div>
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <Camera className="text-emerald-400 w-4 h-4" /> Dokumentasi - {selectedExperience.org}
                </span>
                <p className="text-xs text-slate-400">{selectedExperience.role}</p>
              </div>
              <button 
                type="button" 
                onClick={() => setSelectedExperience(null)} 
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-full transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-slate-950 flex items-center justify-center min-h-[350px]">
              <div className="relative w-full h-[380px] flex items-center justify-center bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                <img 
                  src={selectedExperience.images[expSlide]} 
                  alt="Dokumentasi" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex justify-between items-center">
              {selectedExperience.images.length > 1 ? (
                <div className="flex items-center gap-3">
                  <button 
                    type="button"
                    disabled={expSlide === 0} 
                    onClick={() => setExpSlide(prev => Math.max(0, prev - 1))}
                    className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-white transition cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-300 font-mono">
                    Foto <strong className="text-emerald-400">{expSlide + 1}</strong> / {selectedExperience.images.length}
                  </span>
                  <button 
                    type="button"
                    disabled={expSlide === selectedExperience.images.length - 1} 
                    onClick={() => setExpSlide(prev => Math.min(selectedExperience.images.length - 1, prev + 1))}
                    className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-white transition cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <span className="text-xs text-slate-400 font-mono">1 Foto Tersedia</span>
              )}

              <button 
                type="button"
                onClick={() => setSelectedExperience(null)} 
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-lg transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Lutfi Farhan Prayoga. All rights reserved.</p>
      </footer>
    </div>
  );
}
