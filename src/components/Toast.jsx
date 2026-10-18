import React from 'react'
import { CheckCircle2, AlertCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-neutral-900 text-neutral-100 dark:bg-white dark:text-neutral-900 rounded-xl shadow-xl text-sm font-medium border border-neutral-700/50 dark:border-neutral-200/50 transition-all animate-in fade-in slide-in-from-bottom-3 duration-200">
      {type === 'success' ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
      ) : (
        <AlertCircle className="w-4 h-4 text-amber-400 dark:text-amber-600 shrink-0" />
      )}
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-neutral-400 hover:text-white dark:hover:text-black transition-colors"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
