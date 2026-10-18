import React from 'react'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import TiltCard from './TiltCard'

export default function Education() {
  const { education } = portfolioData

  return (
    <section id="education" className="relative py-16 sm:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Education & Qualifications
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg">
            Consistent academic progression in Computer Science and Engineering, culminating in an M.Tech specialization.
          </p>
        </div>

        {/* Education Timeline Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((item, idx) => (
            <TiltCard key={idx} maxTilt={7} scale={1.02} className="h-full">
              <div className="p-6 rounded-3xl glass-panel-3d border border-white/60 dark:border-white/10 shadow-md card-3d-hover h-full flex flex-col justify-between preserve-3d">
                <div>
                  {/* Degree & Score badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60">
                      {item.status}
                    </span>
                    <div className="text-right">
                      <span className="text-xs sm:text-sm font-black font-mono text-neutral-900 dark:text-white px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 shadow-xs">
                        {item.score}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mt-1">
                    {item.degree}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 mb-3">
                    {item.field}
                  </div>

                  {/* Institution & Location */}
                  <div className="text-xs text-neutral-700 dark:text-neutral-300 font-medium mb-1.5 flex items-start gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="font-semibold">{item.institution}</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Notes */}
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 font-normal">
                  {item.details}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
