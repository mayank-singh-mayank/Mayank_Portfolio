import React, { useState } from 'react'
import { Briefcase, Calendar, MapPin, Building, ChevronRight, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import TiltCard from './TiltCard'

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { experience } = portfolioData

  const filteredExperience = experience.filter((item) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'faculty') return item.type === 'Academic Faculty'
    if (activeFilter === 'mentorship') return item.type !== 'Academic Faculty'
    return true
  })

  return (
    <section id="experience" className="relative py-16 sm:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Briefcase className="w-4 h-4" />
              <span>Career & Teaching Path</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Professional Experience
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg">
              Extensive background spanning University Computer Science faculty roles, laboratory instruction, student mentorship, and full-stack software development.
            </p>
          </div>

          {/* Filter Pills with 3D styling */}
          <div className="inline-flex p-1 rounded-2xl glass-panel-3d border border-neutral-200/80 dark:border-neutral-800 self-start sm:self-auto text-xs font-semibold shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeFilter === 'all'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              All ({experience.length})
            </button>
            <button
              onClick={() => setActiveFilter('faculty')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeFilter === 'faculty'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Faculty Roles
            </button>
            <button
              onClick={() => setActiveFilter('mentorship')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeFilter === 'mentorship'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Mentorship & Dev
            </button>
          </div>
        </div>

        {/* Timeline List with 3D Tilt */}
        <div className="space-y-5">
          {filteredExperience.map((item, idx) => (
            <TiltCard key={idx} maxTilt={5} scale={1.01} className="w-full">
              <div className="group p-6 sm:p-7 rounded-3xl glass-panel-3d border border-white/60 dark:border-white/10 shadow-lg card-3d-hover transition-all duration-200 preserve-3d">
                {/* Top Row: Role, Organization, Date */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          Current Role
                        </span>
                      )}
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-1.5">
                      <Building className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span className="font-semibold">{item.organization}</span>
                      <span className="text-neutral-300 dark:text-neutral-700">·</span>
                      <span className="text-neutral-500 dark:text-neutral-400 text-xs flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 inline text-rose-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0 self-start px-2.5 py-1 rounded-lg bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200/50 dark:border-neutral-700/50">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>

                {/* Tagged Skills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-200/50 dark:border-neutral-800/50">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
