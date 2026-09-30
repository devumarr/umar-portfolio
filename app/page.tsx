"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Globe,
  Smartphone,
  LayoutGrid,
  Sparkles,
  Wallet,
  Mail,
} from "lucide-react";

const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };

const WORK = [
  {
    name: "My Kit Tool",
    note: "120+ free AI, PDF and image tools.",
    href: "https://mykittool.vercel.app",
    img: "/work/mykittool.png",
  },
  {
    name: "Countora",
    note: "Shop ledger and daily accounts.",
    href: "https://countora.vercel.app",
    img: "/work/countora.png",
  },
  {
    name: "Name Pix",
    note: "Stylish game names, copy ready.",
    href: "https://namepix.vercel.app",
    img: "/work/namepix.png",
  },
  {
    name: "FittPic",
    note: "Full WhatsApp DP without crop.",
    href: "https://fittpic.vercel.app",
    img: "/work/fittpic.png",
  },
  {
    name: "Vortex Reach",
    note: "Social growth panel.",
    href: "https://vortexreach.vercel.app",
    img: "/work/vortexreach.png",
  },
  {
    name: "Apk Vault",
    note: "The App Or Software Store.",
    href: "https://apkvault.vercel.app",
    img: "/work/apkvault.png",
  },
];
const FAQ = [
  {
    q: "How long does a project take?",
    a: "A shop landing page is usually live in 2 days. A tools site can take 4 to 7 days, depending on features.",
  },
  {
    q: "What is the starting price?",
    a: "Most work starts from 5,000 PKR. Full sites and tool dashboards go up to 8,000 PKR.",
  },
  {
    q: "How does payment work?",
    a: "Half before work starts. The rest after the site is live and you have checked it.",
  },
  {
    q: "Do I get the live link first?",
    a: "Yes. You can open the live page before messaging. No demo-only screenshots.",
  },
];
const SKILLS = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <main className="min-h-screen bg-[#F3EBDE] text-[#16120E]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(224,122,27,0.16),_transparent_42%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-6 md:px-8 md:py-8">
        <nav className="z-50 mb-16 flex items-center justify-between rounded-full bg-[#FBF6EE] px-3 py-2 shadow-[0_8px_30px_rgba(80,40,10,0.08)] ring-1 ring-[#E8D7BE]">
          <div className="flex items-center gap-2.5 pl-1">
            <img
              src="/umar.jpg"
              alt=""
              className="h-8 w-8 rounded-full object-cover object-top"
            />
            <span className="text-[13px] font-semibold tracking-tight text-[#16120E]">
              Umar Farooq
            </span>
          </div>
          <div className="flex items-center gap-1 text-[13px] text-[#6B5B4A]">
            <a
              href="#work"
              className="rounded-full px-3 py-1.5 hover:bg-[#F3E0C4]"
            >
              Work
            </a>
            <a
              href="#faq"
              className="rounded-full px-3 py-1.5 hover:bg-[#F3E0C4]"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-3 py-2 text-sm font-medium text-white shadow-[0_18px_40px_rgba(211,108,18,0.34)] transition hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
              Contact
            </a>
          </div>
        </nav>

        <motion.header
          initial="hidden"
          animate="show"
          variants={fade}
          className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16"
        >
          <div>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="badge-shine relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#D36C12] shadow-[0_8px_24px_rgba(211,108,18,0.16)] ring-1 ring-[#F0C48A]">
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#D36C12] shadow-[0_0_10px_#D36C12]" />
                  Web developer
                </div>
                <h1 className="mt-5 text-[2.6rem] font-semibold leading-[0.92] tracking-tight md:text-[5.2rem]">
                  Umar
                  <br />
                  <span className="text-[#D36C12]">Farooq</span>
                </h1>
              </div>

              <img
                src="/umar.jpg"
                alt="Umar Farooq"
                className="mt-6 h-25 w-27 shrink-0 rounded-2xl object-cover object-[center_12%] ring-4 ring-[#EFE6D6] md:hidden"
              />
            </div>

            <p className="mt-5 max-w-[28rem] text-[16px] leading-relaxed text-[#6E5C49] md:mt-6 md:text-[17px]">
              I build clean websites and live tools for shops and creators. Fast
              pages. WhatsApp ready. You can open the work first.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-8">
              <a
                href="https://wa.me/923259168123"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#D36C12] px-6 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(211,108,18,0.34)] transition hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />

                <MessageCircle className="h-3.5 w-3.5" />

                <span className="relative">WhatsApp</span>
              </a>
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-3 py-3 text-sm font-medium text-black shadow-[0_18px_40px_rgba(211,108,18,0.34)] transition hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                View work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[360px] md:block">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#D36C12]/20 blur-3xl" />
            <img
              src="/umar.jpg"
              alt="Umar Farooq"
              className="relative z-10 aspect-[4/5] w-full rounded-[2.2rem] object-cover object-[center_12%] shadow-[0_50px_90px_rgba(40,20,5,0.18)] ring-[14px] ring-[#EFE6D6]"
            />
          </div>
        </motion.header>

        <section className="mt-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C4A27A]">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            What I use
          </h2>
          <div className="relative mt-7 overflow-hidden rounded-[1.6rem] bg-white py-5 ring-1 ring-[#E8D7BE] shadow-[0_12px_32px_rgba(120,70,20,0.06)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
            <div className="skills-track flex w-max gap-3 px-4">
              {[...SKILLS, ...SKILLS].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl bg-[#FBF6EE] px-4 py-3 ring-1 ring-[#E8D7BE]"
                >
                  <img src={s.src} alt="" className="h-8 w-8 object-contain" />
                  <span className="whitespace-nowrap text-sm font-semibold">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mt-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C4A27A]">
            Selected work
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Live sites
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {WORK.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-[1.7rem] bg-white shadow-[0_18px_44px_rgba(120,70,20,0.08)] ring-1 ring-[#E8D7BE] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(211,108,18,0.16)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F3E6D2]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1C12]/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#8A5A22]">
                    0{i + 1}
                  </span>
                  <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-[#D36C12] px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Visit
                  </span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-lg font-semibold tracking-tight">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#6E5C49]">
                    {item.note}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C4A27A]">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Common questions
          </h2>
          <div className="mt-7 overflow-hidden rounded-[1.6rem] bg-white shadow-[0_16px_40px_rgba(120,70,20,0.06)] ring-1 ring-[#E8D7BE]">
            {FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={item.q}
                  className={
                    i !== FAQ.length - 1 ? "border-b border-[#EFE6D6]" : ""
                  }
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold tracking-tight">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#F6EFE3] text-sm text-[#D36C12] transition ${open ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-[#6E5C49]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="contact"
          className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#17120E] px-6 py-12 text-[#F6EFE3] shadow-[0_28px_70px_rgba(40,20,8,0.3)] md:px-10 md:py-14"
        >
          <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-[#D36C12]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-0 h-48 w-48 rounded-full bg-[#C4A27A]/15 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C4A27A]">
                Contact
              </p>
              <h2 className="mt-4 max-w-sm text-4xl font-semibold tracking-tight">
                Let’s build it
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#C4B6A5]">
                Send the idea, a reference, or just the shop name. I reply on
                WhatsApp first. Email is fine if you have files.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/923259168123"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#D36C12] px-6 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(211,108,18,0.34)] transition hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />

                  <MessageCircle className="h-3.5 w-3.5" />

                  <span className="relative">WhatsApp</span>
                </a>
                <a
                  href="mailto:ummarfarooq38990@gmail.com"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#C4A27A]">
                  Reply time
                </p>
                <p className="mt-1 text-sm">Usually same day</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#C4A27A]">
                  Best for
                </p>
                <p className="mt-1 text-sm">
                  Shops, Restaurants, landing pages
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#C4A27A]">
                  Start
                </p>
                <p className="mt-1 text-sm">From 5,000 PKR</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-0 mt-16 w-full rounded-[2rem] border border-[#E8D7BE] bg-[#FBF7F1] pt-16 pb-16">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/umar.jpg"
                  alt="Umar Farooq"
                  className="h-9 w-9 rounded-xl object-cover"
                />
                <div>
                  <p className="text-sm font-semibold tracking-tight">
                    Umar Farooq
                  </p>
                  <p className="text-[11px] text-[#8A735A]">Web developer</p>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6E5C49]">
                I design and launch clean websites for local shops — so
                customers can find you, trust you, and message you on WhatsApp.
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#C4A27A]">
                Pages
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <a href="#work" className="block hover:text-[#D36C12]">
                  Work
                </a>
                <a href="#faq" className="block hover:text-[#D36C12]">
                  FAQ
                </a>
                <a href="#contact" className="block hover:text-[#D36C12]">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#C4A27A]">
                Contact
              </p>
              <div className="mt-3 space-y-3 text-sm">
                <a
                  href="#contact"
                  className="flex items-center gap-2 hover:text-[#D36C12]"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 hover:text-[#D36C12]"
                >
                  <Mail className="h-4 w-4 text-[#D36C12]" />
                  Email
                </a>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-5xl border-t border-[#E8D7BE] px-6 pt-5 text-center text-[11px] text-[#B39A80]">
            © {new Date().getFullYear()} Umar Farooq
          </p>
        </footer>
      </div>
    </main>
  );
}
