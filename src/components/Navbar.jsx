import React, { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, FileText, Sparkles } from 'lucide-react'

export default function Navbar({ darkMode, setDarkMode, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-200 ${
            scrolled
              ? 'glass-panel-3d shadow-xl border border-white/40 dark:border-white/10'
              : 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm'
          }`}
        >
          {/* Logo / 3D Signature Badge */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 dark:from-neutral-800 dark:to-neutral-900 text-white flex items-center justify-center font-black text-xs tracking-wider transition-transform duration-300 group-hover:scale-105 border border-amber-500/30 shadow-md overflow-hidden">
              <span className="shimmer-gold-text font-bold">MS</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-neutral-900 dark:text-white leading-none">
                  Mayank Singh
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </div>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono tracking-tight mt-0.5">
                CS Faculty & Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-xl hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* View Resume Button with 3D Depth */}
            <button
              onClick={onOpenResume}
              className="btn-3d hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/90 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-all border border-neutral-200/80 dark:border-neutral-700/80"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 rounded-2xl glass-panel-3d border border-white/40 dark:border-white/10 shadow-2xl flex flex-col gap-1 text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenResume()
                }}
                className="w-full btn-3d flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
              >
                <FileText className="w-3.5 h-3.5 text-amber-500" />
                <span>View Full Curriculum Vitae</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
