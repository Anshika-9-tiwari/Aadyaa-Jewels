"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setDone(true);
      }}
      className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      {done ? (
        <div className="alert alert-success w-full rounded-full">
          <span>✨ Welcome to the Aadyaa circle. Watch your inbox for private previews.</span>
        </div>
      ) : (
        <>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="input input-bordered h-12  rounded-full bg-base-100/30 text-base-100 placeholder:text-base-100/50 focus:border-accent"
          />
          <button type="submit" className="btn btn-accent h-12 rounded-full px-8 text-xs uppercase tracking-[0.25em] text-secondary">
            Subscribe
          </button>
        </>
      )}
    </form>
  );
}
