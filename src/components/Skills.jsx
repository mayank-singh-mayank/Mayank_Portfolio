import React, { useState } from 'react'
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Wrench,
  Award,
  Search,
  CheckCircle2,
  ExternalLink,
  Sparkles
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import TiltCard from './TiltCard'

export default function Skills({ onShowToast }) {
  const [searchTerm, setSearchTerm] = useState('')
  const { skills, certifications } = portfolioData

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      items: skills.languages,
      description: 'Foundational & object-oriented programming'
    },
    {
      title: 'Frameworks & Runtimes',
      icon: Cpu,
      items: skills.frameworks,
      description: 'Full-stack MERN & server runtime architectures'
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      items: skills.databases,
      description: 'Relational DBMS & NoSQL document stores'
    },
    {
      title: 'Libraries & Middleware',
      icon: Layers,
      items: skills.libraries,
      description: 'State management, routing, ORM & authentication'
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      items: skills.tools,
      description: 'IDE, version control & API test suites'
    }
  ]

  const matchesSearch = (item) => {
    if (!searchTerm.trim()) return true
    const term = searchTerm.toLowerCase()
    return (
      item.name.toLowerCase().includes(term) ||
      (item.tag && item.tag.toLowerCase().includes(term))
    )
  }

  return (
    <section id="skills" className="relative py-16 sm:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header & Search */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Code2 className="w-4 h-4" />
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Skills & Expertise
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg">
              Curated competencies across software development, data structures, full-stack web engineering, and relational database systems.
            </p>
          </div>

          {/* 3D Search Box */}
          <div className="relative w-full sm:w-64 self-start sm:self-auto">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Java)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-xs rounded-xl glass-panel-3d border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono text-neutral-900 dark:text-white shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-neutral-400 hover:text-neutral-600 font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            const visibleItems = cat.items.filter(matchesSearch)

            if (visibleItems.length === 0 && searchTerm) return null

            return (
              <TiltCard key={idx} maxTilt={9} scale={1.02} className="h-full">
                <div className="p-6 rounded-3xl glass-panel-3d border border-white/60 dark:border-white/10 h-full flex flex-col justify-between shadow-md card-3d-hover preserve-3d">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-xs">
                        <Icon className="w-4 h-4 text-amber-500" />
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-4">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {visibleItems.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 text-xs font-medium border border-neutral-200/80 dark:border-neutral-700/80 hover:border-amber-400 dark:hover:border-amber-400 transition-all shadow-xs"
                        >
                          <span>{item.name}</span>
                          {item.tag && (
                            <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                              · {item.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>

        {/* Certifications Highlight */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-5">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Verified Certifications (Curriculum Vitae Page 2)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {certifications.map((cert, cIdx) => (
              <TiltCard key={cIdx} maxTilt={7} scale={1.02} className="h-full">
                <div className="p-6 rounded-3xl glass-panel-3d border border-white/60 dark:border-white/10 h-full flex flex-col justify-between shadow-md relative overflow-hidden preserve-3d">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        {cert.badge}
                      </span>
                      <Award className="w-4 h-4 text-amber-500" />
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                      {cert.name}
                    </h3>
                    <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-4">
                      {cert.issuer}
                    </div>

                    <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
                      {cert.topics.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
