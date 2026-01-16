import VoiceRecorder from "@/app/components/VoiceRecorder";

export default function VoicePage(){
    return (
         <section className="flex flex-col items-center text-center gap-6">
      <h1 className="text-3xl font-bold">
        Record Your Voice
      </h1>

      <p className="max-w-md text-slate-400">
        Press start, speak clearly, and stop when you’re done.
      </p>

      <VoiceRecorder />
    </section>
    )
}