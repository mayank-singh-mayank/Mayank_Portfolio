import React, { useEffect } from 'react'
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const { personal, education, skills, achievement, experience, projects, certifications } = portfolioData

  const handlePrint = () => {
    window.print()
  }

  const handleCopyAllText = () => {
    const resumeText = `
MAYANK SINGH
Kanpur, Uttar Pradesh | mayanksinghtilak@gmail.com | +919660629283

SUMMARY
${personal.summary}

EDUCATION
- Master of Technology – Computer Science and Engineering (2024 - 2026, 77.50%)
  CSJMU Kanpur University, Kanpur, Uttar Pradesh
- Bachelor of Technology – Computer Science and Engineering (2019 - 2023, 72.10%)
  Krishna Institute of Technology, Kanpur, Uttar Pradesh
- Higher Secondary (2018 - 2019, 61%)
  SS International SER. SEC. Public School
- Secondary School (2015 - 2016, 60%)
  Shri Agrasen Public School

SKILLS
Languages : Java (DSA, OOPs), JavaScript, HTML, CSS
Frameworks : React.js, Express, Node.js
Database : MySQL, Mongo DB
Tools : Visual Studio, GitHub, Postman
Libraries : Passport.js, Redux, React Router, Mongoose, Socket.io, Material.io

PROJECTS
Kisan-Mitra Web App
Tech Stack : HTML, CSS, JAVASCRIPT, JSON, PHP, MYSQL, PHP framework
• This application use for buying and selling products for farmers and here is one more feature for hiring workers for farming

ACHIEVEMENT
Paper Accepted at 2026 IEEE 6th International Conference At Galgotias University, Paper Titled “An Integrated Multi-model Hybrid ANN-CNN-LSTM Framework of Heart Disease Prediction Using Structured, Textual, and Medical Image Data”

EXPERIENCE
- Arya College of Engineering and IT (Nov. 2025 – Present)
  As a Computer Science Faculty, conducting practical-oriented DBMS Lab sessions, emphasizing SQL, database design, and hands-on implementation.
- Jaipur Engineering College, Jaipur (July. 2025 – Nov. 2025)
  As a Computer Science Faculty, Delivered dynamic and interactive lessons in AI ML Theory, enhancing student engagement and learning outcomes.
- ACMT Polytechnic College, Agra (Oct. 2023 – Aug. 2024)
  As a Computer Science Faculty, Delivered dynamic and interactive lessons in core computer science subjects, enhancing student engagement and learning outcomes.
- Teaching Assistant at Coding Ninjas(Online Mode) (Sep. 2023 – Nov. 2023)
  As a Teaching Assistant at Coding Ninjas, I contributed to the learning journey of students by assisting them in grasping coding concepts and problem-solving techniques.
- Teachnook (July 2022 – January 2023)
  I gained valuable hands-on experience in Web Development (MERN Full Stack Development)

CERTIFICATIONS
JAVA | React | Front-End
    `.trim()

    navigator.clipboard.writeText(resumeText)
    onShowToast('Full resume text copied to clipboard!')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Container */}
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-neutral-900 dark:text-white">
              Resume Document View
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
              PDF-Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAllText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Copy Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-neutral-800 dark:text-neutral-200 text-sm font-sans bg-white dark:bg-neutral-950">
          {/* Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                MAYANK SINGH
              </h1>
              <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                Kanpur, Uttar Pradesh
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-600 dark:text-neutral-400 mt-1">
              <span>{personal.email}</span>
              <span>·</span>
              <span>{personal.phone}</span>
            </div>
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">
                      {edu.degree}
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="text-right font-mono text-xs shrink-0 pl-4">
                    <div className="text-neutral-500">{edu.period}</div>
                    <div className="font-bold text-neutral-900 dark:text-white">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
              Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white font-mono">Languages : </span>
                <span className="text-neutral-600 dark:text-neutral-400">Java (DSA, OOPs), JavaScript, HTML, CSS</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white font-mono">Frameworks : </span>
                <span className="text-neutral-600 dark:text-neutral-400">React.js, Express, Node.js</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white font-mono">Database : </span>
                <span className="text-neutral-600 dark:text-neutral-400">MySQL, Mongo DB</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white font-mono">Tools : </span>
                <span className="text-neutral-600 dark:text-neutral-400">Visual Studio, GitHub, Postman</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white font-mono">Libraries : </span>
                <span className="text-neutral-600 dark:text-neutral-400">Passport.js, Redux, React Router, Mongoose, Socket.io, Material.io</span>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-neutral-900 dark:text-white text-xs sm:text-sm">
                    Kisan-Mitra Web App
                  </div>
                </div>
                <div className="text-xs font-mono text-neutral-500 mb-1">
                  Tech Stack : HTML, CSS, JAVASCRIPT, JSON, PHP, MYSQL, PHP framework
                </div>
                <ul className="list-disc list-inside text-xs text-neutral-600 dark:text-neutral-400 space-y-0.5">
                  <li>This application use for buying and selling products for farmers and here is one more feature for hiring workers for farming</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ACHIEVEMENT */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-2">
              Achievement
            </h2>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Paper Accepted at <strong>2026 IEEE 6th International Conference At Galgotias University</strong>, Paper Titled <em>“An Integrated Multi-model Hybrid ANN-CNN-LSTM Framework of Heart Disease Prediction Using Structured, Textual, and Medical Image Data”</em>
            </p>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <div className="font-semibold text-neutral-900 dark:text-white">
                      {exp.organization}
                    </div>
                    <div className="font-mono text-neutral-500 text-[11px]">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 mt-0.5">
                    <li>{exp.description}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-2">
              Certifications
            </h2>
            <div className="text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200">
              JAVA | React | Front-End
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
