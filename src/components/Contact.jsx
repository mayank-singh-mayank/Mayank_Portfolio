import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, Clock, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import TiltCard from './TiltCard'

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [sending, setSending] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) {
      onShowToast('Please fill out all required fields.', 'error')
      return
    }

    setSending(true)

    // Simulate clean dispatch + open user's email client
    setTimeout(() => {
      setSending(false)
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formState.subject || 'Portfolio Inquiry from ' + formState.name
      )}&body=${encodeURIComponent(
        `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
      )}`
      
      window.location.href = mailtoUrl
      onShowToast('Message prepared! Opening your mail client...')
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 400)
  }

  return (
    <section id="contact" className="relative py-16 sm:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <MessageSquare className="w-4 h-4" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg">
            Have a question, opportunity, or research collaboration in mind? Feel free to reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="md:col-span-2 space-y-4">
            {/* Email Card with 3D Tilt */}
            <TiltCard maxTilt={6} scale={1.02}>
              <div className="p-5 rounded-3xl glass-panel-3d border border-white/60 dark:border-white/10 shadow-md flex items-start justify-between card-3d-hover">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>Email</span>
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white hover:underline break-all"
                  >
                    {personal.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </TiltCard>

            {/* Phone Card with 3D Tilt */}
            <TiltCard maxTilt={6} scale={1.02}>
              <div className="p-5 rounded-3xl glass-panel-3d border border-white/60 dark:border-white/10 shadow-md flex items-start justify-between card-3d-hover">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span>Phone</span>
                  </div>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white hover:underline"
                  >
                    {personal.phone}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </TiltCard>

            {/* Location Card with 3D Tilt */}
            <TiltCard maxTilt={6} scale={1.02}>
              <div className="p-5 rounded-3xl glass-panel-3d border border-white/60 dark:border-white/10 shadow-md card-3d-hover">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Location</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                  {personal.location}
                </div>
              </div>
            </TiltCard>

            {/* Availability Notice */}
            <div className="p-4 rounded-2xl glass-panel-3d border border-neutral-200/50 dark:border-neutral-800/50 flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300 shadow-xs">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Available for engineering & university teaching roles. Rapid reply guaranteed.</span>
            </div>
          </div>

          {/* Right Column: 3D Contact Form */}
          <div className="md:col-span-3">
            <TiltCard maxTilt={5} scale={1.01}>
              <form
                onSubmit={handleSubmit}
                className="p-7 sm:p-8 rounded-3xl glass-panel-3d border border-white/60 dark:border-white/10 space-y-4 shadow-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-700 dark:text-neutral-300 font-semibold">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans text-neutral-900 dark:text-white shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-700 dark:text-neutral-300 font-semibold">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans text-neutral-900 dark:text-white shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-700 dark:text-neutral-300 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Opportunity Discussion / Project Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans text-neutral-900 dark:text-white shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-700 dark:text-neutral-300 font-semibold">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we collaborate?..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans text-neutral-900 dark:text-white resize-none shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-3d inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-amber-400 dark:text-amber-500" />
                  <span>{sending ? 'Preparing Message...' : 'Send Message'}</span>
                </button>
              </form>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}
