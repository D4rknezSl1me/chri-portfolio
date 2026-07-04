// A fixed, slow-drifting aurora behind everything. Purely decorative and very
// low-opacity so it adds depth without ever hurting contrast/readability.
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="aurora aurora-a absolute -left-[10%] top-[-10%] h-[46rem] w-[46rem] rounded-full" />
      <div className="aurora aurora-b absolute right-[-10%] top-[30%] h-[40rem] w-[40rem] rounded-full" />
      <div className="aurora aurora-c absolute bottom-[-15%] left-[25%] h-[38rem] w-[38rem] rounded-full" />
      {/* faint grain to kill banding on the gradients */}
      <div className="noise absolute inset-0" />
    </div>
  )
}
