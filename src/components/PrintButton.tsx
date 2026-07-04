'use client'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03] print:hidden"
    >
      Print / Save as PDF
    </button>
  )
}
