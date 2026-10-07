"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm leading-6 text-white/75" role="status">
        Thanks — newsletter signup will be connected in a later release.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Email address"
        className="h-11 flex-1 rounded-lg border-0 bg-white/10 px-3 text-sm text-white outline-none ring-1 ring-white/15 placeholder:text-white/40 focus:ring-2 focus:ring-cyan"
      />
      <button
        type="submit"
        className="h-11 rounded-lg bg-white px-4 text-sm font-medium text-navy transition-colors hover:bg-mist"
      >
        Subscribe
      </button>
    </form>
  );
}
