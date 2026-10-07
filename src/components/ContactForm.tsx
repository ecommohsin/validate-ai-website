"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-[15px] leading-7 text-navy-muted" role="status">
        Thank you for your message. For now, please also email us at{" "}
        <a className="text-blue hover:underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>{" "}
        if you need a quick response — form delivery will be connected in a later
        release.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-4">
      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="mt-2 h-11 w-full rounded-lg border border-line-strong bg-white px-3 text-sm text-navy outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-navy">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="mt-2 h-11 w-full rounded-lg border border-line-strong bg-white px-3 text-sm text-navy outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-line-strong bg-white px-3 py-2 text-sm text-navy outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-11 w-fit items-center justify-center rounded-lg bg-blue px-5 text-[15px] font-medium text-white transition-colors hover:bg-blue-hover"
      >
        Send message
      </button>
    </form>
  );
}
