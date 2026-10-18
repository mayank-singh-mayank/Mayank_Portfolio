import React from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const { personal } = portfolioData

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950/80 backdrop-blur-md text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Top Row: Brand Monogram & Floating Signature Sign-off */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/60">
          
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-black text-xs shadow-md border border-amber-500/30">
              <span className="shimmer-gold-text">MS</span>
            </div>
            <div>
              <div className="font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                <span>{personal.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </div>
              <div className="text-neutral-500 text-[11px] font-mono">
                {personal.role} · {personal.location}
              </div>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-panel-3d hover:text-black dark:hover:text-white transition-all shadow-xs"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-panel-3d hover:text-black dark:hover:text-white transition-all shadow-xs"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-xl glass-panel-3d hover:text-black dark:hover:text-white transition-all shadow-xs"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="w-px h-5 bg-neutral-200 dark:border-neutral-800 mx-1"></div>

            <button
              onClick={scrollToTop}
              className="btn-3d inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel-3d hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-all font-mono text-[11px] font-semibold"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-500" />
            </button>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-neutral-400 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Mayank Singh. All portfolio credentials verified from official records.
          </div>
          <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
            <span>Engineered with 3D UI & React</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
