import { notesStore } from "@/lib/store";
import Link from "next/link";


export default function DashboardPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Your Voice Notes</h2>

      {notesStore.length === 0 ? (
        <p className="text-slate-400">No notes yet.</p>
      ) : (
        <ul className="space-y-4">
          {notesStore.map((note) => (
            <li key={note.id}>
              <Link
                href={`/note/${note.id}`}
                className="block p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
              >
                {note.summary}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}