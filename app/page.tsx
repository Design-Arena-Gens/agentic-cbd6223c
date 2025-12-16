"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Cinematic Streams",
    description:
      "Curate flowing, adaptive galleries that remix your best shots with AI-driven storytelling.",
    accent: "cyan"
  },
  {
    title: "Face ID Vault",
    description:
      "Neon-tier biometric privacy. Control exactly who can see sensitive captures with Face ID locks.",
    accent: "neon-pink"
  },
  {
    title: "Signal-Grade Delivery",
    description:
      "Quantum-caliber encryption with real-time anomaly detection keeps every moment uncompromised.",
    accent: "prism-yellow"
  }
];

const stats = [
  { label: "Latency", value: "42 ms" },
  { label: "Retention lift", value: "+187%" },
  { label: "Shared moments", value: "12M+" }
];

const timeline = [
  {
    title: "Capture",
    body: "Shoot on any device. Prism parses context, mood, and metadata in microseconds.",
    icon: Sparkles,
    hue: "from-cyan/70 via-cyan/40 to-transparent"
  },
  {
    title: "Refine",
    body: "Auto-enhance lighting, generate story captions, and auto-tag across your network.",
    icon: ArrowUpRight,
    hue: "from-prism-yellow/60 via-prism-yellow/30 to-transparent"
  },
  {
    title: "Secure Share",
    body: "Deploy immersive drops with zero-trust delivery and adaptive access controls.",
    icon: ShieldCheck,
    hue: "from-neon-pink/60 via-neon-pink/30 to-transparent"
  }
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />
      <div className="absolute -top-32 right-[10%] h-96 w-96 rounded-full bg-cyan/20 blur-[160px]" />
      <div className="absolute bottom-0 left-[15%] h-[320px] w-[320px] rounded-full bg-prism-yellow/30 blur-[140px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-24 md:px-10">
        <section className="relative flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-zinc400/80"
          >
            <span className="h-2 w-2 rounded-full bg-prism-yellow shadow-glow" />
            Live Beta Access
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="mt-8 text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Prism bends every photo into
            <span className="ml-3 bg-gradient-to-r from-prism-yellow via-cyan to-white bg-clip-text text-transparent">
              lucid signal.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc400"
          >
            Navigate the dark, neon future of photo sharing. Prism fuses adaptive
            AI, biometric privacy, and cinematic presentation into one signal-rich
            experience your crew—and clients—can’t ignore.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              className="inline-flex items-center gap-2 rounded-full bg-prism-yellow px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:shadow-[0_0_40px_rgba(243,230,143,0.45)]"
              href="#signal-stack"
            >
              Enter Prism
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              href="#vision-loop"
            >
              Watch the Loop
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-16 w-full rounded-[36px] border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px]"
          >
            <div className="relative h-[420px] overflow-hidden rounded-[36px] bg-black/60">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,242,234,0.2),_transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass relative flex w-[90%] max-w-3xl flex-col gap-8 rounded-[28px] px-8 py-10">
                  <div className="flex flex-col gap-3 text-left">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-cyan">
                      <span className="h-px w-8 bg-cyan/60" />
                      Real-Time AI Treatment
                    </div>
                    <h2 className="text-3xl font-semibold text-white">
                      A new photo intelligence layer for creative teams.
                    </h2>
                    <p className="text-sm text-zinc400">
                      Prism processes every upload through the Signal Engine to
                      detect mood, lighting, faces, and resonant moments before
                      your feed even refreshes.
                    </p>
                  </div>
                  <div className="grid gap-5 md:grid-cols-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-3xl border border-white/10 bg-white/5 p-5"
                      >
                        <p className="text-xs uppercase tracking-[0.4em] text-zinc400">
                          {stat.label}
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void via-void/70 to-transparent" />
            </div>
          </motion.div>
        </section>

        <section
          id="signal-stack"
          className="grid gap-8 md:grid-cols-[2fr_3fr] md:items-center"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-zinc400">
              <span className="h-px w-8 bg-white/30" />
              Signal Stack
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Built for the creators who transmit culture on their own frequency.
            </h2>
            <p className="text-base text-zinc400">
              Prism&apos;s AI stack hardwires creative intelligence into every
              frame. Deploy multi-layer galleries, remix visual stories with
              generative cues, and orchestrate drops that sync across devices in
              real time.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <div
                    className={`absolute inset-0 translate-y-full bg-gradient-to-br ${feature.accent === "cyan" ? "from-cyan/40 to-transparent" : feature.accent === "neon-pink" ? "from-neon-pink/40 to-transparent" : "from-prism-yellow/40 to-transparent"} opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100`}
                  />
                  <div className="relative flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass relative h-full rounded-[30px] p-8">
            <div className="absolute -top-20 right-8 hidden h-40 w-40 rounded-full bg-neon-pink/30 blur-[100px] md:block" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-zinc400">
                  Prism Feed
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  Neon Stories
                </h3>
              </div>
              <span className="rounded-full border border-neon-pink/40 bg-neon-pink/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-neon-pink">
                Face ID
              </span>
            </div>
            <div className="mt-10 grid gap-6">
              {[1, 2, 3].map((entry) => (
                <div
                  key={entry}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60"
                >
                  <div className="grid grid-cols-[auto,1fr] gap-4 p-5">
                    <div className="h-16 w-16 overflow-hidden rounded-2xl">
                      <div className="h-full w-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc400">
                          Drop 0{entry}
                        </p>
                        <h4 className="text-lg font-medium text-white">
                          Neon Dust Sessions
                        </h4>
                      </div>
                      <div className="flex items-center justify-between text-xs text-zinc400">
                        <span>Unlocked · 23:47 PST</span>
                        <span className="text-cyan">+3 new reactions</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition duration-500 hover:opacity-100" />
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-zinc400">
              <span className="rounded-full border border-white/10 px-5 py-2">
                Adaptive captions
              </span>
              <span className="rounded-full border border-white/10 px-5 py-2">
                Quantum watermark
              </span>
              <span className="rounded-full border border-white/10 px-5 py-2">
                Sync across XR
              </span>
            </div>
          </div>
        </section>

        <section
          id="vision-loop"
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-8 py-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,169,182,0.45),_transparent_55%)] opacity-80" />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neon-pink">
                <span className="h-px w-8 bg-neon-pink/70" />
                Vision Loop
              </div>
              <h2 className="text-4xl font-semibold text-white">
                Every pixel learns, adapts, and re-emerges sharper.
              </h2>
              <p className="text-base text-zinc400">
                The Prism Vision Loop continuously retrains on your creative DNA,
                aligning edits, crop suggestions, and distribution strategies with
                the energy you signal. Expect evolving presets, dynamic light
                balancing, and context-aware masking.
              </p>
              <div className="space-y-10">
                {timeline.map(({ title, body, icon: Icon, hue }) => (
                  <div key={title} className="relative pl-10">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${hue}`}
                      />
                      <Icon className="relative h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm text-zinc400">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass relative h-full rounded-[28px] p-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.35em] text-zinc400">
                    Signal Forecast
                  </p>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-cyan">
                    Auto
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-zinc400">
                    <span>Engagement Vector</span>
                    <span className="text-prism-yellow">+12.4%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-zinc400">
                    <span>Mood Coherence</span>
                    <span className="text-cyan">97.8%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-zinc400">
                    <span>Trust Index</span>
                    <span className="text-neon-pink">A++</span>
                  </div>
                </div>
                <div className="h-36 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(79,242,234,0.45),transparent_60%)]" />
                <p className="text-xs text-zinc400">
                  Prism translates raw data streams into intuitive signals, so
                  teams can calibrate faster than trends mutate.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs text-zinc400">
                <span className="h-2 w-2 rounded-full bg-prism-yellow shadow-[0_0_12px_rgba(243,230,143,0.7)]" />
                Synced across 14 global hubs. Relays refresh every 900 seconds.
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-[32px] border border-white/10 bg-white/5 p-12 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-zinc400">
                <span className="h-px w-8 bg-white/30" />
                Signal Proof
              </div>
              <h2 className="text-4xl font-semibold text-white">
                Trusted by collectives defining tomorrow&apos;s lenses.
              </h2>
              <p className="text-base text-zinc400">
                Independent studios, culture curators, and stealth agencies rely
                on Prism to distribute future-facing visuals without compromise.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-zinc400">
              <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc400">
                  Verified Crew
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">340+</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc400">
                  Retention
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">96.2%</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc400">
                  Zero-Day Alerts
                </p>
                <p className="mt-3 text-2xl font-semibold text-cyan">+540%</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc400">
                  Noise Reduced
                </p>
                <p className="mt-3 text-2xl font-semibold text-neon-pink">
                  87%
                </p>
              </div>
            </div>
          </div>
          <div className="glass relative flex flex-col justify-between rounded-[28px] p-10">
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-cyan/30 blur-[80px]" />
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc400">
                Signal Broadcast
              </p>
              <p className="text-lg text-white">
                &ldquo;Prism feels like having a creative ops team plugged into my
                neural stack. Distribution is instant, private, and somehow still
                cinematic.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
                <div>
                  <p className="text-sm font-semibold text-white">Kai Rivera</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc400">
                    Creative Director @ SignalWave
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-zinc400">
              <span>Realms Synced · LA · Berlin · Tokyo</span>
              <span className="text-prism-yellow">Always Encrypted</span>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/70 px-8 py-16 text-center">
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(243,230,143,0.25),rgba(79,242,234,0.25),rgba(239,169,182,0.25),rgba(243,230,143,0.25))] opacity-20" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc400">
              Join the Frequency
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Prism is clearing invites for the next 500 signal carriers.
            </h2>
            <p className="text-base text-zinc400">
              Plug in now, secure your handle, and get early access to the Vision
              Loop API for automated story drops.
            </p>
            <form className="mt-6 flex w-full flex-col gap-4 sm:flex-row">
              <input
                className="h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-6 text-sm text-white outline-none transition focus:border-prism-yellow/80 focus:ring-2 focus:ring-prism-yellow/40"
                placeholder="Your encrypted channel"
                type="email"
                required
              />
              <button
                className="h-12 rounded-full bg-prism-yellow px-8 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:shadow-[0_0_30px_rgba(243,230,143,0.4)]"
                type="submit"
              >
                Lock Invite
              </button>
            </form>
            <p className="text-xs text-zinc400">
              Respecting your signal. We run end-to-end encryption. Zero noise.
            </p>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-zinc400 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute h-full w-full rounded-full border border-prism-yellow/40" />
              <span className="absolute h-3 w-3 rounded-full bg-prism-yellow" />
            </span>
            <div>
              <p className="text-white">Prism Labs</p>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc400">
                Signal Ahead
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 uppercase tracking-[0.3em]">
            <a className="hover:text-white" href="#">
              Protocol
            </a>
            <a className="hover:text-white" href="#">
              Vision Loop
            </a>
            <a className="hover:text-white" href="#">
              Security
            </a>
            <a className="hover:text-white" href="#">
              Careers
            </a>
          </div>
          <p className="text-xs text-zinc400">
            © {new Date().getFullYear()} Prism Labs. Signals, encrypted.
          </p>
        </div>
      </footer>
    </main>
  );
}
