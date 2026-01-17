"use server";

import { notesStore } from "@/lib/store";
import { redirect } from "next/navigation";

export async function processVoice(formData) {
 const audio = formData.get("audio");

console.log("IS FILE:", audio instanceof File);
console.log("TYPE:", audio?.type);
console.log("SIZE:", audio?.size);
console.log("NAME:", audio.name);
console.log("LAST MODIFIED:", audio.lastModified);


  

  if (!audio || audio.size === 0) {
    throw new Error("No audio received");
  }

  console.log("Audio type:", audio.type);
  console.log("Audio size:", audio.size);

  const note = {
    id: Date.now().toString(),
    transcript: "Fake transcript (real audio received)",
    summary: "Fake summary (audio validated)",
  };

  notesStore.push(note);
  redirect("/dashboard");
}
