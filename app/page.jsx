import Link from "next/link";

export default function HomePage() {


  return (

    <section className="flex flex-col items-center text-center gap-8">
      {/* App Title */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        AI Voice Notes
      </h1>

      {/* Subtitle */}
      <p className="max-w-md text-slate-400 text-base sm:text-lg">
        Record your voice instantly and turn it into smart notes.
      </p>

      {/* Record Button */}
      <Link
        href="/voice"
        className="
          flex items-center gap-3
          rounded-xl px-6 py-3
          bg-emerald-500 text-black font-semibold
          transition-all duration-200
          hover:bg-emerald-400
          hover:scale-105
          active:scale-95
          shadow-lg shadow-emerald-500/30
        "
      >
        🎙 Record Voice
      </Link>
    </section>
  )
}
