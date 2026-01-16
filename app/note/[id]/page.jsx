import { notesStore } from "@/app/lib/store";

export default function NotePage({params}){
    const note = notesStore.find((n) => n.id === params.id);

    if(!note){
         return <p className="text-red-500">Note not found</p>;
    }

    return (
    <section className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-xl font-bold">Summary</h2>
      <p>{note.summary}</p>

      <h3 className="text-lg font-semibold">Transcript</h3>
      <p className="text-slate-300">{note.transcript}</p>
    </section>
  );
}