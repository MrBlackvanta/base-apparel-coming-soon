"use client";

import { ArrowIcon, ErrorIcon } from "@/components/icons";
import { cn } from "@/lib";
import { useRef, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [sentId, setSentId] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const isValid = EMAIL_PATTERN.test(email.trim());
  const showError = attempted && !isValid;

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) {
      setAttempted(true);
      inputRef.current?.focus();
      return;
    }
    setEmail("");
    setAttempted(false);
    setSentId((id) => id + 1);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    setSentId(0);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="mt-8 md:mt-10">
      <div
        className={cn(
          "relative h-12 rounded-full inset-ring inset-ring-field-border md:h-14",
          { "inset-ring-2 inset-ring-soft-red": showError },
        )}
      >
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          ref={inputRef}
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Email Address"
          value={email}
          onChange={handleChange}
          aria-invalid={showError || undefined}
          aria-describedby={showError ? "email-error" : undefined}
          className="h-full w-full rounded-full bg-transparent pr-24 pl-6 text-body text-dark-grayish-red placeholder:text-desaturated-red-dark md:pr-35 md:pl-8 md:text-body-lg"
        />

        {showError && (
          <ErrorIcon className="absolute top-1/2 right-18 size-6 -translate-y-1/2 text-soft-red md:right-29" />
        )}

        <button
          type="submit"
          aria-label="Subscribe"
          className="absolute inset-y-0 right-0 grid w-16 cursor-pointer place-items-center rounded-full v-brand-gradient shadow-btn transition-shadow duration-200 ease-out before:absolute before:inset-0 before:rounded-full before:bg-white/50 before:opacity-0 before:transition-opacity before:duration-200 before:ease-out hover:shadow-btn-hover hover:before:opacity-100 motion-reduce:transition-none motion-reduce:before:transition-none md:w-25"
        >
          <ArrowIcon className="relative h-5 w-3 text-white" />
        </button>
      </div>

      {showError && (
        <p
          id="email-error"
          className="mt-2 pl-6 text-left text-note text-soft-red md:mt-3 md:pl-8"
        >
          Please provide a valid email
        </p>
      )}

      {sentId > 0 && (
        <p
          key={sentId}
          role="status"
          className="mt-2 pl-6 text-left text-note text-dark-grayish-red md:mt-3 md:pl-8"
        >
          Thanks! We&rsquo;ll let you know the moment we launch.
        </p>
      )}
    </form>
  );
}
