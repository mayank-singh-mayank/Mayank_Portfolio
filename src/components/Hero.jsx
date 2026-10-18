import React, { useState } from 'react'
import {
  MapPin,
  Mail,
  Phone,
  Copy,
  Check,
  FileText,
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  GraduationCap,
  Award,
  Layers,
  Code2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import TiltCard from './TiltCard'

export default function Hero({ onOpenResume, onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const { personal, achievement } = portfolioData

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
      onShowToast('Email copied to clipboard!')
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
      onShowToast('Phone number copied to clipboard!')
    }
  }

  return (
    <section id="about" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden bg-grid-pattern">
      {/* 3D Atmospheric Glowing Background Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl animate-orb-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl animate-orb-pulse-delayed"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Grid: Info + 3D Portrait Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-3d text-xs text-neutral-700 dark:text-neutral-300 font-mono shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium">{personal.status}</span>
            </div>

            {/* Hero Name & Title with 3D Depth */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white">
                  {personal.name}
                </h1>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>{personal.location}</span>
                </div>
              </div>

              <h2 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent flex items-center gap-2">
                <span>{personal.role}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-normal">
                  M.Tech CSE
                </span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl pt-1 font-normal">
                {personal.summary}
              </p>
            </div>

            {/* 3D Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-3d inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs sm:text-sm font-semibold transition-all shadow-md group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-3d inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl glass-panel-3d text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-semibold hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
              >
                <FileText className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                <span>Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Get In Touch</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact Pills & Social Connections */}
            <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800/70 flex flex-wrap items-center gap-3 text-xs font-mono">
              {/* Email Pill */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel-3d text-neutral-700 dark:text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                <a href={`mailto:${personal.email}`} className="hover:underline">
                  {personal.email}
                </a>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  aria-label="Copy email"
                  className="ml-1 p-1 hover:text-black dark:hover:text-white rounded"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-neutral-400" />}
                </button>
              </div>

              {/* Phone Pill */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel-3d text-neutral-700 dark:text-neutral-300">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="hover:underline">
                  {personal.phone}
                </a>
                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  aria-label="Copy phone"
                  className="ml-1 p-1 hover:text-black dark:hover:text-white rounded"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-neutral-400" />}
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl glass-panel-3d text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:scale-105 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl glass-panel-3d text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:scale-105 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Stage with Portrait & Floating Signature (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center items-center py-4">
            <TiltCard
              maxTilt={14}
              perspective={1100}
              scale={1.02}
              className="w-full max-w-sm sm:max-w-md mx-auto"
            >
              <div className="relative rounded-3xl p-5 sm:p-6 glass-panel-3d overflow-visible preserve-3d shadow-2xl border border-white/60 dark:border-white/10">
                
                {/* 3D Backdrop Rings & Aura behind photo */}
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-2xl bg-gradient-to-tr from-amber-500/15 via-blue-500/10 to-indigo-500/20 blur-xl pointer-events-none -z-10 animate-pulse"
                />
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -right-6 w-28 h-28 rounded-full border border-amber-400/20 dark:border-amber-400/30 -z-10 animate-spin"
                  style={{ animationDuration: '24s' }}
                />

                {/* Top Floating Badge in 3D Space */}
                <div className="absolute -top-3.5 right-4 z-40 animate-badge-a">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 dark:bg-neutral-900/90 text-amber-300 border border-amber-500/40 text-[11px] font-mono font-semibold shadow-lg backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>IEEE Conf. 2026 Author</span>
                  </div>
                </div>

                {/* Portrait Frame & Container */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-200/50 via-neutral-100/30 to-neutral-300/40 dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-950 border border-neutral-300/60 dark:border-neutral-700/60 shadow-inner group">
                  {/* Mayank Portrait Image */}
                  <img
                    src="/images/mayank-portrait.png"
                    alt="Mayank Singh"
                    className="w-full h-auto object-cover object-top select-none transition-transform duration-500 group-hover:scale-105"
                    style={{
                      maxHeight: '430px',
                      filter: 'contrast(1.03) saturate(1.05)',
                    }}
                  />

                  {/* Gentle shadow overlay at bottom for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/60 via-neutral-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Bottom-Left Floating Holographic Pill */}
                <div className="absolute -bottom-3 left-4 z-40 animate-badge-b">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-700 shadow-xl backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                    <span>CS Faculty & Full-Stack</span>
                  </div>
                </div>

                {/* Bottom-Right Verified Monogram */}
                <div className="absolute -bottom-3 -right-2 z-40">
                  <div className="px-2.5 py-1 rounded-lg bg-amber-500 text-neutral-950 font-black text-[10px] tracking-wider shadow-lg uppercase border border-amber-300">
                    Verified CV
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

        {/* 3D Pillar Stats Strip (4 Interactive 3D Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16">
          <TiltCard maxTilt={8} scale={1.02} className="h-full">
            <div className="p-4 rounded-2xl glass-panel-3d card-3d-hover h-full flex flex-col justify-between">
              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs mb-2">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span className="font-medium">M.Tech Scholar</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white font-mono">
                  77.50%
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  CSJMU Kanpur (2024–2026)
                </div>
              </div>
            </div>
          </TiltCard>

          <TiltCard maxTilt={8} scale={1.02} className="h-full">
            <div className="p-4 rounded-2xl glass-panel-3d card-3d-hover h-full flex flex-col justify-between">
              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs mb-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span className="font-medium">IEEE Research</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white font-mono text-amber-600 dark:text-amber-400">
                  2026 Conf.
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Galgotias Univ · Accepted
                </div>
              </div>
            </div>
          </TiltCard>

          <TiltCard maxTilt={8} scale={1.02} className="h-full">
            <div className="p-4 rounded-2xl glass-panel-3d card-3d-hover h-full flex flex-col justify-between">
              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs mb-2">
                <Layers className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">Teaching Roles</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white font-mono">
                  4+ Roles
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Arya, JEC, ACMT & Coding Ninjas
                </div>
              </div>
            </div>
          </TiltCard>

          <TiltCard maxTilt={8} scale={1.02} className="h-full">
            <div className="p-4 rounded-2xl glass-panel-3d card-3d-hover h-full flex flex-col justify-between">
              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs mb-2">
                <Code2 className="w-4 h-4 text-violet-500" />
                <span className="font-medium">Core Stack</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white font-mono">
                  MERN & Java
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  DSA · DBMS · REST APIs
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  )
}
