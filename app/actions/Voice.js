"use server";
import { notesStore } from "@/lib/store";
import { redirect } from "next/navigation";

export async function processVoice(formData){
    // fake processing delay
    await new Promise((res) => setTimeout(res, 1000));

    const audio = formData.get("audio");

    console.log("Received Audio Blob : ", audio);
    console.log("Audio size : ", audio?.size);

    const fakeTranscript = "This is a fake transcript generated from the recorded voice.";

    const fakeSummary = "User talked about an idea and wants a summarized note.";

    const note = {
        id : Date.now().toString(),
        transcript : fakeTranscript,
        summary : fakeSummary,
    };

    notesStore.push(note);

    redirect("/dashboard");
}