import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { contact } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const { error } = await supabase.from("contact_messages").insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your message. Please try again.");
      return;
    }

    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-accent-cyan/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border dark:border-white/10 dark:bg-gradient-to-b dark:from-white/[0.04] border-slate-200 bg-white to-transparent p-8 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left: heading + direct contact */}
              <div>
                <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-accent-cyan">
                  05 — Contact
                </p>
                <h2 className="font-display text-3xl font-bold dark:text-white text-slate-900 sm:text-4xl">
                  Let's build something
                </h2>
                <p className="mt-4 max-w-md dark:text-slate-400 text-slate-600">
                  Have a frontend project, UI challenge, or collaboration in mind? Send me a message and I’ll get back to you.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-center gap-3 dark:text-slate-300 text-slate-700 transition-colors hover:text-accent-cyan"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border dark:border-white/10 dark:bg-white/5 border-slate-200 bg-slate-100 transition-colors group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10">
                      <Mail size={18} className="text-accent-cyan" />
                    </span>
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="group flex items-center gap-3 dark:text-slate-300 text-slate-700 transition-colors hover:text-accent-cyan"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border dark:border-white/10 dark:bg-white/5 border-slate-200 bg-slate-100 transition-colors group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10">
                      <Phone size={18} className="text-accent-cyan" />
                    </span>
                    {contact.phone}
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 dark:text-slate-300 text-slate-700 transition-colors hover:text-accent-cyan"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border dark:border-white/10 dark:bg-white/5 border-slate-200 bg-slate-100 transition-colors group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10">
                      <Linkedin size={18} className="text-accent-cyan" />
                    </span>
                    linkedin.com/in/navin-k-504227269
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 dark:text-slate-300 text-slate-700 transition-colors hover:text-accent-cyan"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border dark:border-white/10 dark:bg-white/5 border-slate-200 bg-slate-100 transition-colors group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10">
                      <Github size={18} className="text-accent-cyan" />
                    </span>
                    github.com/Navin9820
                  </a>
                </div>
              </div>

              {/* Right: contact form */}
              <div className="rounded-2xl border dark:border-white/10 dark:bg-white/[0.02] border-slate-200 bg-slate-50 p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium dark:text-slate-300 text-slate-700"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={status === "submitting"}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border dark:border-white/10 dark:bg-ink-850 dark:text-white dark:placeholder:text-slate-600 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 text-sm outline-none transition-colors focus:border-accent-cyan/50 dark:focus:bg-ink-800 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium dark:text-slate-300 text-slate-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "submitting"}
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border dark:border-white/10 dark:bg-ink-850 dark:text-white dark:placeholder:text-slate-600 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 text-sm outline-none transition-colors focus:border-accent-cyan/50 dark:focus:bg-ink-800 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium dark:text-slate-300 text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={status === "submitting"}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full resize-none rounded-xl border dark:border-white/10 dark:bg-ink-850 dark:text-white dark:placeholder:text-slate-600 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 text-sm outline-none transition-colors focus:border-accent-cyan/50 dark:focus:bg-ink-800 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send message
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 size={16} className="shrink-0" />
                      Your message has been sent. I'll get back to you soon!
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-700 dark:text-rose-300">
                      <AlertCircle size={16} className="shrink-0" />
                      {errorMsg}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
