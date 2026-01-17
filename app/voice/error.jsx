"use client";

export default function Error({ error, reset }) {
  return (
    <div className="text-center space-y-4">
      <p className="text-red-500">Something went wrong</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
