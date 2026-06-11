"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, BookOpen, Star, Activity, TrendingUp, Phone, ArrowRight, Menu, X, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const APP_URL = "https://anchor-recovery-app.vercel.app"
const DF = "var(--font-cormorant,'Cormorant Garamond',serif)"

const FEATURES = [
  { icon: Shield,      title: "SOS Crisis Mode",        desc: "13 guided tools for immediate relief â breathing, grounding, urge surfing, and more. One tap, no learning curve.",      tag: "Immediate Relief",  color: "teal"  },
  { icon: BookOpen,    title: "Skills Library",          desc: "29 evidence-based techniques organized by Body, Mind, Spirit, Social, and Crisis â each with clinical context.",      tag: "Learn & Practice",  color: "teal"  },
  { icon: Star,        title: "Skill of the Day",        desc: "A different curated practice every day builds resilience over time. Today's skill is always front and center.",       tag: "Daily Habit",       color: "amber" },
  { icon: Activity,    title: "Mood Check-In",           desc: "A 5-second daily emotional check-in to build self-awareness. Patterns over time reveal what your recovery needs.",   tag: "Self-Awareness",    color: "teal"  },
  { icon: TrendingUp,  title: "Achievement System",      desc: "Every coping skill practiced earns recognition. Milestones and streaks remind you how far you've come.",             tag: "Progress Tracking", color: "amber" },
  { icon: Phone,       title: "Crisis Resources",        desc: "One tap to 988 Suicide & Crisis Lifeline, SAMHSA National Helpline, Crisis Text Line, and Veterans Crisis Line.",    tag: "24/7 Help",         color: "red"   },
]

const SOS_TOOLS = [
  { emoji: "ð¬ï¸", name: "Box Breathing",       desc: "4-4-4-4 Navy SEAL reset" },
  { emoji: "ð±", name: "5-4-3-2-1 Grounding", desc: "5-sense panic anchor" },
  { emoji: "ð", name: "HALT Check-In",        desc: "Name the need" },
  { emoji: "ð", name: "Urge Surfing",         desc: "Ride cravings like a wave" },
  { emoji: "ð", name: "EFT Tapping",          desc: "Acupressure for calm" },
  { emoji: "ð¦", name: "Butterfly Hug",        desc: "EMDR bilateral stim" },
  { emoji: "ð", name: "Opposite Action",      desc: "DBT behavior shift" },
  { emoji: "ð§©", name: "Cognitive Defusion",   desc: "Detach from thoughts" },
  { emoji: "ð¬", name: "Coping Mantras",       desc: "Recovery affirmations" },
  { emoji: "ð¡", name: "ABC Check-In",         desc: "REBT thought analysis" },
  { emoji: "ð", name: "DISARM",               desc: "Challenge distortions" },
  { emoji: "ð§", name: "Guided Body Scan",     desc: "Tension release" },
  { emoji: "ð", name: "Crisis Help",          desc: "988, SAMHSA, Text Line" },
]

const STEPS = [
  { num: "01", title: "Open Anchor",      desc: "No signup, no barrier. Open the app the moment a craving hits â your toolkit is ready instantly.",                               emoji: "ð±" },
  { num: "02", title: "Choose Your Tool", desc: "Browse 13 instant SOS skills or follow your Skill of the Day. Every exercise is fully guided step-by-step.",                     emoji: "ð¯" },
  { num: "03", title: "Practice & Grow",  desc: "Work through the skill, check in on your mood, and earn recognition for every step you take in your recovery journey.",         emoji: "ð" },
]

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: "268px" }}>
      <div className="absolute inset-0 rounded-full animate-glow-pulse pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(15,179,165,0.22) 0%, transparent 70%)", transform: "scale(1.6)", top: "10%" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 blur-xl pointer-events-none" style={{ background: "rgba(15,179,165,0.3)" }} />
      <div className="relative overflow-hidden" style={{ borderRadius: "44px", background: "#060d1f", border: "7px solid #1a2540", boxShadow: "0 0 0 1px rgba(15,179,165,0.12), 0 40px 80px rgba(0,0,0,0.7)", height: "576px" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20" style={{ width: "112px", height: "28px", background: "#060d1f", borderRadius: "0 0 20px 20px" }} />
        <div className="flex flex-col h-full" style={{ background: "#090f22" }}>
          <div className="pt-2 px-7 flex justify-between" style={{ fontSize: "9px", color: "#4b5f7f" }}>
            <span>9:41</span><span style={{ color: "#0fb3a5" }}>â¡ 100%</span>
          </div>
          <div className="px-5 py-3" style={{ background: "linear-gradient(135deg, #0c4a42 0%, #0a3d3a 100%)", borderBottom: "1px solid rgba(15,179,165,0.2)" }}>
            <div className="flex items-center justify-between">
              <div>
                <p style={{ fontSize: "9px", color: "#5eead4", letterSpacing: "0.04em" }}>Good morning,</p>
                <h3 className="font-bold text-white" style={{ fontSize: "16px", letterSpacing: "-0.02em" }}>â Anchor</h3>
              </div>
              <div className="flex items-center justify-center font-bold text-white" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(15,179,165,0.3)", border: "1px solid rgba(15,179,165,0.4)", fontSize: "12px" }}>J</div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden px-3 py-3 space-y-2.5">
            <div className="rounded-2xl p-3" style={{ background: "#0f1835", border: "1px solid rgba(30,45,80,0.8)" }}>
              <div className="flex items-center gap-1.5 mb-2">
                <span style={{ fontSize: "8px", color: "#f59e0b", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>â­ Skill of the Day</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span style={{ fontSize: "20px" }}>ð¬ï¸</span>
                <div className="flex-1">
                  <p className="text-white font-semibold" style={{ fontSize: "11px" }}>Box Breathing</p>
                  <span style={{ fontSize: "8px", color: "#0fb3a5", fontWeight: 500 }}>Body</span>
                  <p style={{ fontSize: "8px", color: "#64748b", marginTop: "2px", lineHeight: 1.4 }}>4-4-4-4 Navy SEAL stress reset.</p>
                </div>
              </div>
              <div className="mt-2 inline-block" style={{ background: "rgba(15,179,165,0.12)", color: "#2dd4bf", fontSize: "8px", padding: "4px 10px", borderRadius: "8px", fontWeight: 500 }}>Practice Now â</div>
            </div>
            <div className="rounded-2xl p-3" style={{ background: "#0f1835", border: "1px solid rgba(30,45,80,0.8)" }}>
              <p className="font-medium mb-2" style={{ fontSize: "9px", color: "#64748b" }}>How are you feeling today?</p>
              <div className="flex justify-between px-1">
                {["ð","ð","ð","ð","ð"].map((em, i) => (
                  <div key={i} className="flex items-center justify-center" style={{ width: "36px", height: "36px", borderRadius: "10px", fontSize: "15px", background: i===3 ? "rgba(15,179,165,0.2)" : "rgba(15,25,50,0.8)", border: i===3 ? "1px solid rgba(15,179,165,0.5)" : "1px solid transparent" }}>{em}</div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-3 flex items-center justify-between" style={{ background: "rgba(15,179,165,0.07)", border: "1px solid rgba(15,179,165,0.25)" }}>
              <div>
                <p className="font-bold" style={{ fontSize: "10px", color: "#5eead4" }}>SOS Crisis Tools</p>
                <p style={{ fontSize: "8px", color: "#4b5f7f" }}>13 immediate relief tools</p>
              </div>
              <span style={{ fontSize: "20px" }}>ð</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[["ð¥","3","Day streak"],["â","12","Skills used"],["ð","2","Earned"]].map(([icon,num,label]) => (
                <div key={String(label)} className="text-center" style={{ background: "#0f1835", borderRadius: "12px", padding: "8px 4px", border: "1px solid rgba(30,45,80,0.6)" }}>
                  <div style={{ fontSize: "14px" }}>{icon}</div>
                  <div className="text-white font-bold" style={{ fontSize: "13px", lineHeight: 1.1 }}>{num}</div>
                  <div style={{ fontSize: "7px", color: "#4b5f7f", lineHeight: 1.2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-around px-4 py-2" style={{ background: "#0b1228", borderTop: "1px solid rgba(30,45,80,0.7)" }}>
            {[["ð ","Home",true],["ð§°","Skills",false],["ð","Progress",false],["âï¸","More",false]].map(([icon,label,active]) => (
              <div key={String(label)} className="flex flex-col items-center gap-0.5">
                <span style={{ fontSize: "14px" }}>{icon}</span>
                <span style={{ fontSize: "7px", color: active ? "#0fb3a5" : "#2d3f5f" }}>{label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center pb-2">
            <div style={{ width: "80px", height: "4px", background: "#1e2d4f", borderRadius: "2px" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#05081a", color: "#e2e8f0" }}>

      {/* NAV */}
      <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4", scrolled && "py-3 border-b")}
        style={{ background: scrolled ? "rgba(5,8,26,0.92)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderColor: "rgba(30,45,80,0.6)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">â</span>
            <span className="text-white font-bold tracking-tight" style={{ fontFamily: DF, fontSize: "1.6rem" }}>ANCHOR</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#64748b" }}>
            {[["#features","Features"],["#tools","SOS Tools"],["#how","How It Works"]].map(([href,label]) => (
              <a key={String(label)} href={String(href)} className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white rounded-xl transition-all"
            style={{ padding: "10px 22px", background: "#0fb3a5", boxShadow: "0 4px 20px rgba(15,179,165,0.3)" }}>
            Open App <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button className="md:hidden" style={{ color: "#64748b" }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 px-6 py-6 space-y-4 border-b"
            style={{ background: "rgba(5,8,26,0.97)", backdropFilter: "blur(20px)", borderColor: "rgba(30,45,80,0.6)" }}>
            {[["#features","Features"],["#tools","SOS Tools"],["#how","How It Works"]].map(([href,label]) => (
              <a key={String(label)} href={String(href)} className="block text-base" style={{ color: "#94a3b8" }} onClick={() => setMobileOpen(false)}>{label}</a>
            ))}
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="block text-center font-semibold text-white rounded-xl py-3" style={{ background: "#0fb3a5" }}>
              Open Anchor Free â
            </a>
          </motion.div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute pointer-events-none" style={{ top: "15%", left: "-5%", width: "700px", height: "700px", background: "radial-gradient(ellipse, rgba(15,179,165,0.07) 0%, transparent 65%)", borderRadius: "50%", filter: "blur(40px)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "10%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(ellipse, rgba(15,179,165,0.05) 0%, transparent 65%)", borderRadius: "50%", filter: "blur(60px)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(15,179,165,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(15,179,165,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%,black 40%,transparent 100%)" }} />
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-8" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-2.5 text-sm font-medium rounded-full px-4 py-2" style={{ color: "#2dd4bf", background: "rgba(15,179,165,0.1)", border: "1px solid rgba(15,179,165,0.25)" }}>
                <span className="w-2 h-2 rounded-full animate-glow-pulse" style={{ background: "#0fb3a5", boxShadow: "0 0 6px #0fb3a5" }} />
                Evidence-Based Recovery Tools
              </div>
              <h1 className="font-bold leading-none text-white" style={{ fontFamily: DF, fontSize: "clamp(3.5rem,8vw,5.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                When Recovery<br />Gets Hard,<br /><span style={{ color: "#0fb3a5", fontStyle: "italic" }}>Anchor Holds.</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-md" style={{ color: "#64748b" }}>
                41 evidence-based coping skills for addiction recovery â breathing, grounding, urge surfing, and more. Free, private, and available the moment you need it most.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-semibold text-white rounded-xl"
                  style={{ padding: "14px 28px", fontSize: "1rem", background: "#0fb3a5", boxShadow: "0 6px 30px rgba(15,179,165,0.35)" }}>
                  Open Anchor Free <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#tools" className="inline-flex items-center gap-2.5 font-medium rounded-xl"
                  style={{ padding: "14px 28px", fontSize: "1rem", color: "#94a3b8", border: "1px solid rgba(30,45,80,0.8)" }}>
                  Explore 13 SOS Tools
                </a>
              </div>
              <div className="flex flex-wrap gap-5">
                {["Free â no credit card","Works offline","Private by design"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "#475569" }}>
                    <CheckCircle className="w-4 h-4" style={{ color: "#0fb3a5" }} />{item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="flex justify-center md:justify-end" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <div className="animate-float"><PhoneMockup /></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="px-6 py-8 border-y" style={{ background: "rgba(15,25,50,0.5)", borderColor: "rgba(30,45,80,0.5)" }}>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10 md:gap-16">
          {[["41","Total Coping Skills"],["29","Skills Library"],["13","Instant SOS Skills"],["Free","Always & Forever"],["Offline","Works Without Data"],["Private","No Account Required"]].map(([num,label]) => (
            <div key={String(label)} className="text-center">
              <div className="font-bold" style={{ fontFamily: DF, fontSize: "2rem", color: "#0fb3a5", lineHeight: 1 }}>{num}</div>
              <div className="text-xs mt-1" style={{ color: "#475569" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#0fb3a5", letterSpacing: "0.15em" }}>Everything You Need</p>
            <h2 className="font-bold text-white" style={{ fontFamily: DF, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05 }}>
              Built for Real Moments<br /><span className="font-normal italic" style={{ color: "#475569" }}>in Recovery</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto leading-relaxed" style={{ color: "#64748b" }}>Every feature was designed around one question: what does someone actually need in a hard moment?</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f,i) => (
              <FadeIn key={f.title} delay={i*0.07}>
                <div className="group h-full rounded-2xl p-6 transition-all duration-300 cursor-default"
                  style={{ background: "rgba(11,16,38,0.7)", border: "1px solid rgba(30,45,80,0.7)" }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(15,179,165,0.35)"; el.style.background="rgba(11,16,38,0.95)" }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(30,45,80,0.7)"; el.style.background="rgba(11,16,38,0.7)" }}>
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl mb-4" style={{ background: f.color==="teal"?"rgba(15,179,165,0.12)":f.color==="amber"?"rgba(245,158,11,0.12)":"rgba(239,68,68,0.12)" }}>
                    <f.icon className="w-5 h-5" style={{ color: f.color==="teal"?"#2dd4bf":f.color==="amber"?"#f59e0b":"#f87171" }} />
                  </div>
                  <div className="inline-block text-xs font-semibold uppercase tracking-wider mb-3 px-2.5 py-1 rounded-lg"
                    style={{ background: f.color==="teal"?"rgba(15,179,165,0.1)":f.color==="amber"?"rgba(245,158,11,0.1)":"rgba(239,68,68,0.1)", color: f.color==="teal"?"#2dd4bf":f.color==="amber"?"#f59e0b":"#f87171", fontSize: "10px", letterSpacing: "0.06em" }}>
                    {f.tag}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SOS TOOLS */}
      <section id="tools" className="py-28 px-6 md:px-12" style={{ background: "rgba(8,12,30,0.6)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#0fb3a5", letterSpacing: "0.15em" }}>SOS Mode</p>
            <h2 className="font-bold text-white" style={{ fontFamily: DF, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05 }}>13 Instant Relief Tools</h2>
            <p className="mt-6 max-w-xl mx-auto leading-relaxed" style={{ color: "#64748b" }}>
              When a craving or crisis hits, you need help <em>immediately</em> â not a tutorial. Every SOS tool is guided step-by-step and ready in one tap.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SOS_TOOLS.map((tool,i) => (
              <FadeIn key={tool.name} delay={i*0.04}>
                <div className="rounded-2xl p-4 text-center transition-all duration-200 cursor-default"
                  style={{ background: "rgba(11,16,38,0.7)", border: "1px solid rgba(30,45,80,0.6)" }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(15,179,165,0.4)"; el.style.background="rgba(15,179,165,0.06)"; el.style.transform="translateY(-2px)" }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(30,45,80,0.6)"; el.style.background="rgba(11,16,38,0.7)"; el.style.transform="translateY(0)" }}>
                  <div className="text-3xl mb-2.5">{tool.emoji}</div>
                  <p className="font-semibold text-white text-sm leading-tight mb-1">{tool.name}</p>
                  <p className="text-xs" style={{ color: "#475569" }}>{tool.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-12">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold rounded-xl"
              style={{ padding: "14px 32px", background: "rgba(15,179,165,0.12)", border: "1px solid rgba(15,179,165,0.3)", color: "#2dd4bf" }}>
              Try All 13 Tools Free <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#0fb3a5", letterSpacing: "0.15em" }}>Simple by Design</p>
            <h2 className="font-bold text-white" style={{ fontFamily: DF, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05 }}>Relief in Three Steps</h2>
            <p className="mt-6 max-w-xl mx-auto leading-relaxed" style={{ color: "#64748b" }}>Anchor strips away every barrier between you and the coping skill you need right now.</p>
          </FadeIn>
          <div className="relative">
            <div className="absolute top-12 hidden md:block" style={{ left: "16.66%", right: "16.66%", height: "1px", background: "linear-gradient(90deg,transparent,rgba(15,179,165,0.3) 30%,rgba(15,179,165,0.3) 70%,transparent)" }} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {STEPS.map((step,i) => (
                <FadeIn key={step.num} delay={i*0.12} className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-6 text-4xl relative"
                    style={{ background: "rgba(11,16,38,0.9)", border: "1px solid rgba(15,179,165,0.3)", boxShadow: "0 0 30px rgba(15,179,165,0.1)" }}>
                    {step.emoji}
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#0fb3a5", fontFamily: DF, fontSize: "13px" }}>{step.num}</div>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{step.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL */}
      <section className="py-20 px-6 md:px-12" style={{ background: "rgba(8,12,30,0.6)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="rounded-3xl p-10 md:p-14 text-center" style={{ background: "linear-gradient(135deg,rgba(15,179,165,0.06) 0%,rgba(8,179,165,0.02) 100%)", border: "1px solid rgba(15,179,165,0.2)" }}>
              <div className="flex justify-center gap-3 mb-8 flex-wrap">
                {["DBT","CBT","EFT","EMDR","REBT","ACT"].map(a => (
                  <span key={a} className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg" style={{ background: "rgba(15,179,165,0.1)", border: "1px solid rgba(15,179,165,0.2)", color: "#2dd4bf", letterSpacing: "0.1em" }}>{a}</span>
                ))}
              </div>
              <h2 className="font-bold text-white mb-5" style={{ fontFamily: DF, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.1 }}>Grounded in Clinical Science</h2>
              <p className="max-w-2xl mx-auto leading-relaxed mb-8" style={{ color: "#64748b", fontSize: "1.05rem" }}>
                Every tool in Anchor is grounded in peer-reviewed research and evidence-based therapeutic frameworks used by addiction counselors, psychiatrists, and recovery coaches worldwide. Built by Recovery Life Collective â an addiction treatment referral service helping people find the right care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
                {[["â¤ï¸","Built with Compassion","Designed by people who understand what recovery actually looks like."],["ð¬","Evidence-Based","Every skill backed by clinical research and therapeutic frameworks."],["ð","Private by Design","No account required. Nothing stored on servers. Your recovery stays yours."]].map(([icon,title,desc]) => (
                  <div key={String(title)} className="flex gap-3">
                    <span className="text-xl mt-0.5">{icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(15,179,165,0.07) 0%,transparent 70%)" }} />
        <FadeIn className="max-w-3xl mx-auto text-center relative z-10">
          <div className="text-5xl mb-6">â</div>
          <h2 className="font-bold text-white mb-6" style={{ fontFamily: DF, fontSize: "clamp(2.5rem,6vw,4.5rem)", lineHeight: 1 }}>
            Your Recovery Toolkit<br /><span style={{ color: "#0fb3a5", fontStyle: "italic" }}>Starts Today.</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "#64748b" }}>
            41 evidence-based coping skills — 29 in the library, 13 instant SOS tools. Free forever. No signup required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 font-semibold text-white rounded-xl"
              style={{ padding: "16px 36px", fontSize: "1.05rem", background: "#0fb3a5", boxShadow: "0 8px 40px rgba(15,179,165,0.4)" }}>
              Open Anchor Free <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 font-medium rounded-xl"
              style={{ padding: "16px 36px", fontSize: "1.05rem", color: "#64748b", border: "1px solid rgba(30,45,80,0.8)" }}>
              Learn More
            </a>
          </div>
          <p className="mt-8 text-sm" style={{ color: "#2d3f5f" }}>Free forever â¢ Works offline â¢ Private & secure</p>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-10 border-t" style={{ borderColor: "rgba(30,45,80,0.5)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">â</span>
              <div>
                <span className="text-white font-bold" style={{ fontFamily: DF, fontSize: "1.2rem" }}>ANCHOR</span>
                <p className="text-xs" style={{ color: "#2d3f5f" }}>Recovery Coping Skills</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm" style={{ color: "#2d3f5f" }}>
              {[["#features","Features"],["#tools","SOS Tools"],["#how","How It Works"],[APP_URL,"Open App"]].map(([href,label]) => (
                <a key={String(label)} href={String(href)} target={String(href).startsWith("http")?"_blank":undefined} rel={String(href).startsWith("http")?"noopener noreferrer":undefined} className="hover:text-white transition-colors">{label}</a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs border-t" style={{ color: "#1e293b", borderColor: "rgba(30,45,80,0.4)" }}>
            <p>Â© {new Date().getFullYear()} Recovery Life Collective LLC. All rights reserved.</p>
            <p>Built with compassion for the recovery community.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
