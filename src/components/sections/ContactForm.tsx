"use client";

import { useState } from "react";
import { campuses } from "@/lib/content";

type FormData = {
  name: string;
  email: string;
  company: string;
  campuses: string[];
  goals: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: "",
  email: "",
  company: "",
  campuses: [],
  goals: "",
};

const STEPS = ["About you", "Your goals", "Review"];

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-base outline-none transition focus:border-foreground";

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [honeypot, setHoneypot] = useState("");

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function toggleCampus(name: string) {
    update(
      "campuses",
      data.campuses.includes(name)
        ? data.campuses.filter((c) => c !== name)
        : [...data.campuses, name]
    );
  }

  function validate(currentStep: number): Errors {
    const e: Errors = {};
    if (currentStep === 0) {
      if (!data.name.trim()) e.name = "Please enter your name.";
      if (!data.email.trim()) e.email = "Please enter your email.";
      else if (!/^\S+@\S+\.\S+$/.test(data.email))
        e.email = "That doesn't look like a valid email.";
    }
    if (currentStep === 1) {
      if (!data.goals.trim()) e.goals = "Tell us a bit about your goals.";
    }
    return e;
  }

  function next() {
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep(step + 1);
  }

  async function submit() {
    setStatus("sending");

    // Bots fill hidden fields, humans don't. Pretend it worked.
    if (honeypot) {
      setStatus("sent");
      return;
    }

    // TODO: replace with a real request to our backend (next step)
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("sent");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step < STEPS.length - 1) next();
    else submit();
  }

  function reset() {
    setData(initialData);
    setErrors({});
    setStep(0);
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
        <p className="text-sm font-medium text-accent">Message sent</p>
        <h3 className="mt-3 font-display text-3xl">Thanks, {data.name}.</h3>
        <p className="mt-3 text-muted">
          We got your message and will be in touch soon at {data.email}.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 text-sm font-medium underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-background p-8 md:p-10"
    >
      {/* Progress */}
      <div className="mb-8">
        <div className="flex gap-2">
          {STEPS.map((label, i) => (
            <div
              key={label}
              className={`h-1 flex-1 rounded-full ${
                i <= step ? "bg-foreground" : "bg-border"
              }`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">
          Step {step + 1} of {STEPS.length} · {STEPS[step]}
        </p>
      </div>

      {/* Step 1: About you */}
      {step === 0 && (
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              className={inputClass}
            />
            {errors.name && (
              <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-accent">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              className={inputClass}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium">
              Company or brand
            </label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              value={data.company}
              onChange={(e) => update("company", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      )}

      {/* Step 2: Goals */}
      {step === 1 && (
        <div className="space-y-6">
          <fieldset>
            <legend className="text-sm font-medium">
              Which campuses are you interested in?
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {campuses.map((campus) => {
                const selected = data.campuses.includes(campus.name);
                return (
                  <button
                    key={campus.name}
                    type="button"
                    onClick={() => toggleCampus(campus.name)}
                    aria-pressed={selected}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selected
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-surface hover:border-foreground/40"
                    }`}
                  >
                    {campus.name}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label htmlFor="goals" className="text-sm font-medium">
              What are you trying to achieve?{" "}
              <span className="text-accent">*</span>
            </label>
            <textarea
              id="goals"
              rows={5}
              value={data.goals}
              onChange={(e) => update("goals", e.target.value)}
              aria-invalid={!!errors.goals}
              placeholder="Awareness, signups, app downloads, an event..."
              className={inputClass}
            />
            {errors.goals && (
              <p className="mt-1.5 text-sm text-red-600">{errors.goals}</p>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 2 && (
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-muted">Name</dt>
            <dd className="mt-1 font-medium">{data.name}</dd>
          </div>
          <div>
            <dt className="text-muted">Email</dt>
            <dd className="mt-1 font-medium">{data.email}</dd>
          </div>
          <div>
            <dt className="text-muted">Company</dt>
            <dd className="mt-1 font-medium">{data.company || "Not provided"}</dd>
          </div>
          <div>
            <dt className="text-muted">Campuses</dt>
            <dd className="mt-1 font-medium">
              {data.campuses.length ? data.campuses.join(", ") : "No preference"}
            </dd>
          </div>
          <div>
            <dt className="text-muted">Goals</dt>
            <dd className="mt-1 whitespace-pre-wrap font-medium">{data.goals}</dd>
          </div>
        </dl>
      )}

      {/* Honeypot: hidden from people, visible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="text-sm text-muted transition hover:text-foreground"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-85 disabled:opacity-50"
        >
          {step < STEPS.length - 1
            ? "Next →"
            : status === "sending"
            ? "Sending..."
            : "Send message"}
        </button>
      </div>
    </form>
  );
}