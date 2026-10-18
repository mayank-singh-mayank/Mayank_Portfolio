import React, { useState } from 'react'
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Cpu, Code2, Users, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import TiltCard from './TiltCard'

export default function Projects({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('all')
  const { projects } = portfolioData

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'all') return true
    if (activeTab === 'featured') return project.featured
    if (activeTab === 'fullstack') return project.category.includes('Full Stack')
    if (activeTab === 'ai') return project.category.includes('AI')
    return true
  })

  return (
    <section id="projects" className="relative py-16 sm:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <FolderGit2 className="w-4 h-4" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg">
              Applications developed with practical real-world impact, from agricultural marketplace systems to deep learning diagnostic architectures.
            </p>
          </div>

          {/* 3D Filter Tabs */}
          <div className="inline-flex p-1 rounded-2xl glass-panel-3d border border-neutral-200/80 dark:border-neutral-800 self-start sm:self-auto text-xs font-semibold shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeTab === 'all'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeTab === 'featured'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Resume Highlight
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeTab === 'fullstack'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeTab === 'ai'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              AI & Research
            </button>
          </div>
        </div>

        {/* Projects Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isKisanMitra = project.id === 'kisan-mitra'

            return (
              <div
                key={project.id}
                className={isKisanMitra ? 'md:col-span-2' : ''}
              >
                <TiltCard maxTilt={8} scale={1.01} className="h-full">
                  <div
                    className={`h-full rounded-3xl p-6 sm:p-7 glass-panel-3d transition-all duration-300 flex flex-col justify-between relative overflow-hidden preserve-3d border ${
                      isKisanMitra
                        ? 'border-amber-400/40 dark:border-amber-500/30 shadow-xl'
                        : 'border-white/60 dark:border-white/10 shadow-lg'
                    }`}
                  >
                    {/* Accent Ribbon for Kisan Mitra */}
                    {isKisanMitra && (
                      <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-neutral-950 text-[10px] font-mono font-black px-4 py-1.5 rounded-bl-2xl tracking-wider uppercase shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Resume Key Project</span>
                      </div>
                    )}

                    <div>
                      {/* Category & Status */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60">
                          {project.category}
                        </span>
                        {isKisanMitra && (
                          <span className="text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            <span>Agricultural Impact</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1.5 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-4 font-mono">
                        {project.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5 font-normal">
                        {project.description}
                      </p>

                      {/* Highlight Bullets */}
                      <ul className="space-y-2 mb-6 text-xs text-neutral-600 dark:text-neutral-300">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack & Action Links */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 mb-5">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-semibold pt-1">
                        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                          ID: #{project.id}
                        </span>
                        <button
                          onClick={() => {
                            onShowToast(`Viewing repository details for ${project.title}`)
                          }}
                          className="btn-3d inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-all text-xs"
                        >
                          <span>Repository Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
