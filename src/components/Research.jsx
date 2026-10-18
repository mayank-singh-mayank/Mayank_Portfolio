import React, { useState } from 'react'
import { Award, BookOpen, ExternalLink, Check, Copy, Network, Cpu, Database, Activity, Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import TiltCard from './TiltCard'

export default function Research({ onShowToast }) {
  const [copiedCitation, setCopiedCitation] = useState(false)
  const { achievement } = portfolioData

  const citationText = `Mayank Singh. (2026). "An Integrated Multi-model Hybrid ANN-CNN-LSTM Framework of Heart Disease Prediction Using Structured, Textual, and Medical Image Data". In Proceedings of the 2026 IEEE 6th International Conference, Galgotias University.`

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(citationText)
    setCopiedCitation(true)
    setTimeout(() => setCopiedCitation(false), 2000)
    onShowToast('Citation copied to clipboard!')
  }

  const architecturePillars = [
    {
      title: 'Structured Tabular (ANN)',
      description: 'Processes patient vital signs, laboratory biomarkers, blood pressure, and cholesterol records using dense deep layers.',
      icon: Database,
      tag: 'EHR Data'
    },
    {
      title: 'Medical Imaging (CNN)',
      description: 'Performs convolutional spatial feature extraction on echocardiograms, cardiac X-rays, and ECG spectrogram data.',
      icon: Cpu,
      tag: 'Image Modality'
    },
    {
      title: 'Clinical Text (LSTM)',
      description: 'Learns temporal relationships and symptom progressions from doctor notes and longitudinal textual patient histories.',
      icon: Activity,
      tag: 'Sequential Notes'
    },
    {
      title: 'Hybrid Fusion Layer',
      description: 'Cross-attentive late fusion mechanism combining all three modalities into a unified cardiovascular risk assessment.',
      icon: Network,
      tag: 'Decision Engine'
    }
  ]

  return (
    <section id="research" className="relative py-16 sm:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden">
      {/* 3D background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Key Research & Publication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Peer-Reviewed IEEE Publication
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
            Accepted at the prestigious 2026 IEEE 6th International Conference, focusing on multi-modal deep learning for predictive medical diagnostics.
          </p>
        </div>

        {/* 3D Paper Highlight Card */}
        <TiltCard maxTilt={6} scale={1.01} className="w-full">
          <div className="rounded-3xl p-6 sm:p-8 glass-panel-3d shadow-xl relative overflow-hidden preserve-3d border border-white/60 dark:border-white/10">
            {/* Ambient accent orb */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-mono flex items-center gap-1.5 shadow-xs">
                <Check className="w-3.5 h-3.5" />
                <span>{achievement.status}</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-mono shadow-xs">
                IEEE 2026
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                Galgotias University
              </span>
            </div>

            {/* Paper Title */}
            <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 dark:text-white leading-snug tracking-tight mb-3">
              “{achievement.paperTitle}”
            </h3>

            {/* Abstract / Summary */}
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
              {achievement.description}
            </p>

            {/* Architecture Visual Grid in 3D */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-2">
              {architecturePillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:border-amber-400/40 dark:hover:border-amber-500/40 transition-all card-3d-hover flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                          <Icon className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                        </div>
                        <span className="text-xs font-bold text-neutral-900 dark:text-white">
                          {pillar.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Footer tags & Citation button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
              <div className="flex flex-wrap gap-1.5">
                {achievement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={handleCopyCitation}
                className="btn-3d inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 transition-all shrink-0 shadow-sm"
              >
                {copiedCitation ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                    <span>Citation Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Citation</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  )
}
