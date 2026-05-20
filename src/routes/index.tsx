import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Database,
  Users,
  MessageSquare,
  Bot,
  Check,
  Plus,
  Minus,
  Sparkles,
  Clock,
  Zap,
  CalendarDays,
  Workflow,
  Globe,
  Bell,
  Building2,
  Home,
  Scale,
  Dumbbell,
  Megaphone,
  Star,
  ShieldCheck,
  TrendingUp,
  Activity,
} from "lucide-react";

declare const clarity: any;

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Nodewave — AI automation systems for modern businesses" },
      {
        name: "description",
        content:
          "Nodewave builds AI automation systems that capture leads, qualify prospects, send follow-ups and organize customer communication — automatically.",
      },
      { property: "og:title", content: "Nodewave — AI automation systems" },
      {
        property: "og:description",
        content: "Turn repetitive work into automated growth.",
      },
    ],
  }),
});

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <AutomationShowcase />
      <UseCases />
      <Benefits />
      <Testimonials />
      <FAQ />
      <AuditGenerator />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const links = [
    { label: "How it works", href: "#how" },
    { label: "Use cases", href: "#use-cases" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-3 py-2 pl-5">
          <a href="#" className="flex items-center gap-2">
            <Logo />
            <span className="font-display text-[15px] tracking-tight">Nodewave</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="https://calendly.com/pawel-kuchcik11/30min"
target="_blank"
rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition"
          >
            Book Strategy Call
            <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="relative size-7 rounded-md overflow-hidden">
      <div className="absolute inset-0 bg-[conic-gradient(from_220deg,var(--glow),var(--glow-blue),var(--glow-purple),var(--glow))] opacity-90" />
      <div className="absolute inset-[2px] rounded-[5px] bg-background flex items-center justify-center">
        <div className="size-1.5 rounded-full bg-foreground" />
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border hairline bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            AI automation systems for modern teams
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            Turn repetitive work into{" "}
            <span className="text-gradient-accent">automated growth.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            We build AI automation systems that capture leads, qualify prospects, send follow-ups
            and organize customer communication — automatically.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
            <a
  href="https://calendly.com/pawel-kuchcik11/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition"
>
              Book Strategy Call
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a
  href="#contact"
  className="group inline-flex items-center gap-2 rounded-full border hairline bg-surface/40 px-5 py-3 text-sm font-medium hover:bg-surface transition"
>
  Get Free Audit
  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
</a>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  const events = [
    {
      icon: <Users className="size-4" />,
      title: "New lead captured",
      meta: "Sarah J. · website form",
      tag: "Lead",
      time: "just now",
      color: "emerald",
    },
    {
      icon: <Bot className="size-4" />,
      title: "AI qualified prospect",
      meta: "Score 87 · high intent",
      tag: "AI",
      time: "2s",
      color: "blue",
    },
    {
      icon: <Mail className="size-4" />,
      title: "AI email sent",
      meta: "Personalized follow-up #1",
      tag: "Email",
      time: "4s",
      color: "purple",
    },
    {
      icon: <Bell className="size-4" />,
      title: "Discord notification",
      meta: "#sales · team pinged",
      tag: "Notify",
      time: "5s",
      color: "blue",
    },
    {
      icon: <CalendarDays className="size-4" />,
      title: "Meeting booked",
      meta: "Tue, 10:30 · Google Meet",
      tag: "Calendar",
      time: "12s",
      color: "emerald",
    },
  ];
  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        className="absolute -inset-x-10 -top-10 -bottom-10 rounded-[40px] opacity-60 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(40% 60% at 50% 50%, color-mix(in oklab, var(--glow-blue) 35%, transparent), transparent 70%)",
        }}
      />
      <div className="relative glass rounded-2xl shadow-card overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b hairline">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </div>
          <div className="text-xs text-muted-foreground font-mono">nodewave.app/workflows</div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            Live
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          {/* left: activity feed */}
          <div className="p-5 lg:p-6 border-b lg:border-b-0 lg:border-r hairline">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs text-muted-foreground">Activity</div>
                <div className="font-display text-lg">Today's automations</div>
              </div>
              <div className="text-xs text-muted-foreground font-mono">↑ 42 today</div>
            </div>
            <div className="space-y-2.5">
              {events.map((e, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 rounded-xl border hairline bg-surface/50 hover:bg-surface transition px-3 py-2.5"
                >
                  <div
                    className={`flex size-8 items-center justify-center rounded-lg bg-${e.color}-500/10 text-${e.color}-300`}
                    style={
                      e.color === "emerald"
                        ? { background: "color-mix(in oklab, var(--glow) 18%, transparent)", color: "oklch(0.85 0.18 160)" }
                        : e.color === "blue"
                        ? { background: "color-mix(in oklab, var(--glow-blue) 18%, transparent)", color: "oklch(0.82 0.16 250)" }
                        : { background: "color-mix(in oklab, var(--glow-purple) 18%, transparent)", color: "oklch(0.82 0.16 295)" }
                    }
                  >
                    {e.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{e.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{e.meta}</div>
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground">{e.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right: workflow + KPIs */}
          <div className="p-5 lg:p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <KPI label="Avg. response" value="38s" trend="−94%" />
              <KPI label="Conversion" value="23.4%" trend="+9.1%" />
              <KPI label="Hours saved" value="41h" trend="this mo." />
              <KPI label="Active flows" value="12" trend="all green" />
            </div>
            <MiniWorkflow />
          </div>
        </div>
      </div>
    </div>
  );
}

function KPI({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-xl border hairline bg-surface/40 p-3">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-2xl">{value}</div>
      <div className="text-[11px] text-emerald-400 font-mono">{trend}</div>
    </div>
  );
}

function MiniWorkflow() {
  const nodes = [
    { icon: <Globe className="size-3.5" />, label: "Form" },
    { icon: <Bot className="size-3.5" />, label: "AI" },
    { icon: <Database className="size-3.5" />, label: "CRM" },
    { icon: <Mail className="size-3.5" />, label: "Email" },
  ];
  return (
    <div className="rounded-xl border hairline bg-surface/40 p-4">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
        Live workflow
      </div>
      <div className="flex items-center justify-between gap-1">
        {nodes.map((n, i) => (
          <div key={i} className="flex items-center gap-1 flex-1">
            <div className="flex items-center gap-1.5 rounded-md border hairline bg-background/60 px-2 py-1.5 text-xs">
              {n.icon} {n.label}
            </div>
            {i < nodes.length - 1 && (
              <div className="flex-1 h-px bg-gradient-to-r from-foreground/20 to-foreground/5 relative overflow-hidden">
                <div className="absolute inset-y-0 w-6 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent animate-[flow_2.5s_linear_infinite]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- SOCIAL PROOF ---------- */
function SocialProof() {
  const items = ["Dental Clinics", "Real Estate", "Law Firms", "Gyms", "Agencies", "Clinics"];
  return (
    <section className="py-14 border-y hairline bg-surface/30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by local businesses
        </div>
        <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {items.map((i) => (
            <div
              key={i}
              className="text-center text-sm md:text-base text-muted-foreground hover:text-foreground transition font-display tracking-tight"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEM ---------- */
function Problem() {
  const pains = [
    { icon: <Clock className="size-4" />, title: "Slow lead response", desc: "Prospects go cold while your team is busy." },
    { icon: <MessageSquare className="size-4" />, title: "Lost inquiries", desc: "DMs, forms and emails fall through the cracks." },
    { icon: <Activity className="size-4" />, title: "Manual follow-ups", desc: "Hours of copy-paste instead of selling." },
    { icon: <Workflow className="size-4" />, title: "Chaotic communication", desc: "Channels scattered, no single source of truth." },
    { icon: <CalendarDays className="size-4" />, title: "Missed appointments", desc: "No reminders, no confirmations, no-shows." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="The problem"
          title="Growth dies in the inbox."
          desc="Every missed reply is a missed customer. Manual work scales linearly — your business shouldn't."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border hairline bg-surface/40 p-5 hover:bg-surface transition"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-background/60 border hairline text-muted-foreground group-hover:text-foreground transition">
                {p.icon}
              </div>
              <div className="mt-4 font-display text-lg">{p.title}</div>
              <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SOLUTION ---------- */
function Solution() {
  const items = [
    { icon: <Users />, title: "Lead capture", desc: "Forms, chat and DMs unified into one stream." },
    { icon: <Bot />, title: "AI qualification", desc: "Score and route prospects in real time." },
    { icon: <Database />, title: "CRM updates", desc: "Records created and enriched automatically." },
    { icon: <Bell />, title: "Discord notifications", desc: "Your team pinged the moment it matters." },
    { icon: <Mail />, title: "Automated emails", desc: "Personalized sequences that sound human." },
    { icon: <CalendarDays />, title: "Calendar booking", desc: "Meetings booked while you sleep." },
  ];
  return (
    <section className="py-24 bg-surface/30 border-y hairline">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="The system"
          title="One automation layer for your entire funnel."
          desc="Nodewave connects the tools you already use and runs the boring parts for you — accurately, 24/7."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((i) => (
            <div
              key={i.title}
              className="group relative overflow-hidden rounded-2xl border hairline bg-background/40 p-6 hover:border-foreground/20 transition"
            >
              <div
                className="absolute -top-20 -right-16 size-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                style={{ background: "color-mix(in oklab, var(--glow-blue) 30%, transparent)" }}
              />
              <div className="relative flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg border hairline bg-surface text-foreground/90 [&_svg]:size-4">
                  {i.icon}
                </div>
                <div className="font-display text-lg">{i.title}</div>
              </div>
              <div className="relative mt-3 text-sm text-muted-foreground leading-relaxed">
                {i.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Lead captured",
      desc: "Forms, chats and ad clicks are funneled into one event stream — no lead left behind.",
      icon: <Users className="size-5" />,
    },
    {
      n: "02",
      title: "AI qualification",
      desc: "Our AI scores intent, enriches data and routes the prospect to the right next step.",
      icon: <Bot className="size-5" />,
    },
    {
      n: "03",
      title: "Automated follow-up",
      desc: "Personalized emails, reminders and team alerts fire instantly — meetings get booked.",
      icon: <Zap className="size-5" />,
    },
  ];
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps. Zero busywork."
          desc="A clean handoff from first click to booked call — fully automated."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="relative h-full rounded-2xl border hairline bg-surface/40 p-7 hover:bg-surface transition">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs text-muted-foreground">{s.n}</div>
                  <div className="flex size-10 items-center justify-center rounded-lg border hairline bg-background/60">
                    {s.icon}
                  </div>
                </div>
                <div className="mt-8 font-display text-2xl">{s.title}</div>
                <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-foreground/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AUTOMATION SHOWCASE ---------- */
function AutomationShowcase() {
  const nodes = [
    { icon: <Globe className="size-4" />, label: "Website Form", sub: "Trigger" },
    { icon: <Bot className="size-4" />, label: "AI", sub: "Qualify" },
    { icon: <Database className="size-4" />, label: "CRM", sub: "Create record" },
    { icon: <Bell className="size-4" />, label: "Discord", sub: "Notify team" },
    { icon: <Mail className="size-4" />, label: "Email", sub: "Follow-up" },
    { icon: <CalendarDays className="size-4" />, label: "Calendar", sub: "Book meeting" },
  ];
  return (
    <section className="py-24 bg-surface/30 border-y hairline relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--glow-purple) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Automation workflow"
          title="Your funnel, wired end-to-end."
          desc="A real example of a Nodewave system running 24/7 in the background."
        />

        <div className="mt-12 glass rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-2">
            {nodes.map((n, i) => (
              <div key={n.label} className="contents">
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative flex size-14 items-center justify-center rounded-xl border hairline bg-background shadow-card">
                    <div
                      className="absolute inset-0 rounded-xl opacity-50 blur-md"
                      style={{
                        background:
                          i % 3 === 0
                            ? "color-mix(in oklab, var(--glow) 30%, transparent)"
                            : i % 3 === 1
                            ? "color-mix(in oklab, var(--glow-blue) 30%, transparent)"
                            : "color-mix(in oklab, var(--glow-purple) 30%, transparent)",
                      }}
                    />
                    <div className="relative">{n.icon}</div>
                  </div>
                  <div className="mt-3 text-sm font-medium">{n.label}</div>
                  <div className="text-[11px] text-muted-foreground font-mono">{n.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* connecting line */}
          <div className="mt-8 relative h-px bg-foreground/10 overflow-hidden">
            <div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent animate-[flow_3s_linear_infinite]" />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-muted-foreground">
            <div className="rounded-lg border hairline bg-surface/40 p-3">
              <span className="text-foreground font-medium">Avg. latency</span> · 1.4s end-to-end
            </div>
            <div className="rounded-lg border hairline bg-surface/40 p-3">
              <span className="text-foreground font-medium">Reliability</span> · 99.98% uptime
            </div>
            <div className="rounded-lg border hairline bg-surface/40 p-3">
              <span className="text-foreground font-medium">Integrations</span> · 300+ tools
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- USE CASES ---------- */
function UseCases() {
  const cases = [
    { icon: <Building2 />, title: "Dental clinics", desc: "Automated reminders, recall campaigns and no-show recovery." },
    { icon: <Home />, title: "Real estate agencies", desc: "Instant lead routing, property follow-ups and viewing bookings." },
    { icon: <Scale />, title: "Law firms", desc: "Intake automation, document collection and case status updates." },
    { icon: <Dumbbell />, title: "Gyms", desc: "Trial-to-member nurture, churn prevention and class reminders." },
    { icon: <Megaphone />, title: "Marketing agencies", desc: "Client reporting, lead handoff and white-label workflows." },
  ];
  return (
    <section id="use-cases" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Use cases"
          title="Built for businesses that live on appointments."
          desc="Tuned playbooks for the verticals we work with most."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border hairline bg-surface/40 p-6 hover:-translate-y-0.5 hover:bg-surface transition"
            >
              <div className="flex size-10 items-center justify-center rounded-lg border hairline bg-background/60 [&_svg]:size-4 text-foreground/90">
                {c.icon}
              </div>
              <div className="mt-5 font-display text-xl">{c.title}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</div>
              <div className="mt-5 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition">
                See playbook <ArrowUpRight className="size-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */
function Benefits() {
  const metrics = [
    { value: "40+", label: "hours saved monthly", icon: <Clock className="size-4" /> },
    { value: "98%", label: "faster response time", icon: <Zap className="size-4" /> },
    { value: "24/7", label: "lead handling", icon: <ShieldCheck className="size-4" /> },
    { value: "2.3×", label: "higher conversion rate", icon: <TrendingUp className="size-4" /> },
  ];
  return (
    <section className="py-24 bg-surface/30 border-y hairline">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="The results"
          title="Compound returns on every saved minute."
          desc="Average outcomes after 60 days with a Nodewave system in production."
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border hairline bg-background/40 p-6 hover:bg-background/70 transition"
            >
              <div className="flex size-9 items-center justify-center rounded-lg border hairline bg-surface text-foreground/90">
                {m.icon}
              </div>
              <div className="mt-6 font-display text-4xl md:text-5xl tracking-tight">
                {m.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    {
      quote:
        "Nodewave rebuilt our intake from scratch. We went from 4-hour reply times to under a minute — bookings doubled in six weeks.",
      name: "Marcus Lindberg",
      role: "Managing Partner, Lindberg & Co.",
    },
    {
      quote:
        "It honestly feels like we hired three people. The follow-up sequences alone pay for the system every month.",
      name: "Aisha Patel",
      role: "Founder, Coreline Studio",
    },
    {
      quote:
        "Clean, reliable, and finally connected. Our CRM, Discord and calendar talk to each other without us touching anything.",
      name: "Tomás Rivera",
      role: "Director, Vista Realty",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Testimonials"
          title="Operators who never want to go back."
          desc="A few words from teams running on Nodewave."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border hairline bg-surface/40 p-7 flex flex-col justify-between hover:bg-surface transition"
            >
              <div>
                <div className="flex gap-0.5 text-foreground/80">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
              </div>
              <figcaption className="mt-6 pt-5 border-t hairline">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    {
      q: "How fast can a Nodewave system be live?",
      a: "Most builds are live within 2 to 3 weeks. We start with your highest-impact workflow and expand from there.",
    },
    {
      q: "Will this work with the tools we already use?",
      a: "Yes. We integrate with 300+ tools — CRMs, calendars, email, Discord, Slack, ad platforms and most modern SaaS.",
    },
    {
      q: "Do we need a technical team?",
      a: "No. We design, build, deploy and monitor the systems. You get a clean dashboard and a dedicated point of contact.",
    },
    {
      q: "What about data and security?",
      a: "All workflows run on secure infrastructure with scoped credentials, audit logs and encryption in transit and at rest.",
    },
    {
      q: "What does pricing look like?",
      a: "A one-time build fee plus a flat monthly retainer for monitoring and iteration. We share exact numbers on the strategy call.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-surface/30 border-y hairline">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers, before you ask."
          desc="Still curious? Bring the rest to the strategy call."
          center
        />
        <div className="mt-12 divide-y hairline border-y hairline">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-5 flex items-start gap-6 group"
              >
                <div className="flex-1">
                  <div className="font-display text-lg group-hover:text-foreground transition">
                    {it.q}
                  </div>
                  {isOpen && (
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {it.a}
                    </div>
                  )}
                </div>
                <div className="mt-1 flex size-7 items-center justify-center rounded-full border hairline text-muted-foreground">
                  {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, color-mix(in oklab, var(--glow-blue) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border hairline bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="size-3" />
          Limited build slots this quarter
        </div>
        <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
          Ready to automate your business?
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          A free 30-minute call. We map your funnel, identify the highest-leverage workflow and
          send you a tailored audit — no obligation.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
  href="https://calendly.com/pawel-kuchcik11/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition"
>
  Book Free Consultation <ArrowRight className="size-4" />
</a>
          <a
  href="#contact"
  className="inline-flex items-center gap-2 rounded-full border hairline bg-surface/40 px-5 py-3 text-sm font-medium hover:bg-surface transition"
>
  Get Free Audit <ArrowUpRight className="size-4" />
</a>
        </div>
      </div>
    </section>
  );
}

function AuditGenerator() {
  const [sent, setSent] = useState(false);

  return (
    <section id="audit" className="py-24 bg-surface/30 border-y hairline">
      <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Free AI Audit
          </div>
          <h3 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
            Get a free AI automation audit for your business.
          </h3>
          <p className="mt-5 text-muted-foreground">
            Tell us what slows your team down. Our AI will analyze your workflow and suggest where automation can save time, improve response speed and increase conversions.
          </p>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const formData = new FormData(form);

            const data = {
              email: formData.get("email"),
              website: formData.get("website"),
              industry: formData.get("industry"),
              bottleneck: formData.get("bottleneck"),
              source: "ai-audit-form",
            };

            await fetch("https://mysaveplace.app.n8n.cloud/webhook/ai-audit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            setSent(true);
            form.reset();
          }}
          className="glass rounded-2xl p-6 md:p-8 space-y-4"
        >
          <Field label="Email" name="email" type="email" placeholder="you@company.com" />
          <Field label="Website URL" name="website" placeholder="https://yourcompany.com" />
          <Field label="Industry" name="industry" placeholder="Dental clinic, gym, real estate..." />

          <div>
            <label className="text-xs text-muted-foreground">Biggest bottleneck</label>
            <textarea
              name="bottleneck"
              required
              rows={4}
              placeholder="What repetitive task or problem would you like to automate?"
              className="mt-1.5 w-full rounded-lg border hairline bg-background/60 px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground/40 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition"
          >
            {sent ? (
              <>
                <Check className="size-4" /> Audit request sent
              </>
            ) : (
              <>
                Generate Free Audit <Sparkles className="size-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 border-t hairline">
      <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
          <h3 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
            Tell us where time leaks in your business.
          </h3>
          <p className="mt-5 text-muted-foreground">
            We'll reply within one business day with a short audit and the next step.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="size-4" /> hello@nodewave.io
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="size-4" /> Replies within 24h, weekdays
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <ShieldCheck className="size-4" /> Your data stays private. Always.
            </div>
          </div>
        </div>

        <form
          onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  };

  await fetch("https://mysaveplace.app.n8n.cloud/webhook/lead-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  setSent(true);
  form.reset();
}}
          className="glass rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Jane Cooper" />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
          </div>
          <Field label="Company" name="company" placeholder="Acme Inc." />
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="What's slowing your team down?"
              className="mt-1.5 w-full rounded-lg border hairline bg-background/60 px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground/40 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition"
          >
            {sent ? (
              <>
                <Check className="size-4" /> Thanks — we'll be in touch
              </>
            ) : (
              <>
                Send Free Audit Request <ArrowRight className="size-4" />
              </>
            )}
          </button>
          <div className="text-[11px] text-muted-foreground text-center">
            By submitting you agree to be contacted about Nodewave. No spam.
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border hairline bg-background/60 px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground/40"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-sm">Nodewave</span>
          <span className="text-xs text-muted-foreground ml-2">
            © {new Date().getFullYear()} — All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#use-cases" className="hover:text-foreground transition">Use cases</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- SHARED ---------- */
function SectionHeader({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  );
}
