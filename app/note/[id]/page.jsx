import { notesStore } from "@/lib/store";
import { Suspense } from "react";

function Transcript({ note }) {
  return (
    <p className="text-slate-300">{note.transcript}</p>
  );
}

function Summary({ note }) {
  return (
    <p className="font-medium">{note.summary}</p>
  );
}

export default function NotePage({ params }) {
  const note = notesStore.find((n) => n.id === params.id);

  if (!note) return <p>Note not found</p>;

  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-xl font-bold">AI Summary</h2>

      <Suspense fallback={<p>Generating summary…</p>}>
        <Summary note={note} />
      </Suspense>

      <h3 className="text-lg font-semibold">Transcript</h3>

      <Suspense fallback={<p>Loading transcript…</p>}>
        <Transcript note={note} />
      </Suspense>
    </section>
  );
}
