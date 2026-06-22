import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const UNSPLASH = "https://images.unsplash.com/photo-";

const stats = [
  { number: "[###]", label: "Events Delivered" },
  { number: "[###]", label: "Corporate Clients" },
  { number: "[##]", label: "Cities Served" },
  { number: "[###k]", label: "Photos Printed" },
];

const values = [
  {
    title: "Reliability First",
    description: "We show up early, set up fast, and have backup equipment on every job. You will never hear the words 'technical issue' from us.",
  },
  {
    title: "Brand Precision",
    description: "Your logo, your colors, your fonts. We match your brand guidelines to the pixel so every print looks like it belongs.",
  },
  {
    title: "White-Glove Service",
    description: "A dedicated attendant manages the booth, guides guests, and keeps the line moving. Invisible until needed, always present.",
  },
];

const team = [
  { name: "[Name]", role: "Founder and CEO",         photo: "1494790108377-be9c29b29330" },
  { name: "[Name]", role: "Head of Operations",       photo: "1500648767791-00dcc994a43e" },
  { name: "[Name]", role: "Creative Director",        photo: "1514960919797-5ff58c52e5ba" },
  { name: "[Name]", role: "Lead Booth Technician",    photo: "1506863530036-1efeddceb993" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-20 px-6 bg-white border-b border-border text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-3">About Us</p>
          <h1 className="text-5xl md:text-6xl font-black text-charcoal mb-4 leading-tight">We live for the moment<br />after the meeting.</h1>
          <p className="text-slate max-w-xl mx-auto leading-relaxed">
            Frame &amp; Co. was built to give corporate events something they have always been missing — a reason to actually enjoy the party.
          </p>
        </FadeIn>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-4">Our Story</p>
            <h2 className="text-4xl font-black text-charcoal mb-6 leading-tight">Started in a conference room. Built for every room after that.</h2>
            <div className="space-y-4 text-sm text-slate leading-relaxed">
              <p>[Share how Frame &amp; Co. started. What gap in the corporate events market did you notice? What made you decide to build something better?]</p>
              <p>[Talk about the early days, the first clients, the lessons learned. What does your team look like now, and what keeps you committed to this work?]</p>
              <p>[End with your mission. What do you want every client to feel after working with Frame &amp; Co.?]</p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg aspect-[4/3]">
              <Image
                src={`${UNSPLASH}1527192491265-7e15c55b1ed2?w=800&h=600&fit=crop&q=80`}
                alt="Team at work"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ number, label }, i) => (
            <FadeIn key={label} delay={i * 80}>
              <p className="text-4xl md:text-5xl font-black text-blue mb-2">{number}</p>
              <p className="text-xs uppercase tracking-widest text-white/40">{label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-3">How We Work</p>
            <h2 className="text-4xl font-black text-charcoal">What we stand for.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ title, description }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-border hover:border-blue/30 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-8 h-0.5 bg-blue mb-6" />
                  <h3 className="font-bold text-charcoal text-lg mb-3">{title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-3">The Team</p>
            <h2 className="text-4xl font-black text-charcoal">The people behind the lens.</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map(({ name, role, photo }, i) => (
              <FadeIn key={`${name}-${i}`} delay={i * 80}>
                <div className="text-center">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-border mb-4 relative hover:border-blue/40 transition-colors">
                    <Image
                      src={`${UNSPLASH}${photo}?w=400&h=400&fit=crop&crop=faces&q=80`}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-bold text-charcoal text-sm">{name}</p>
                  <p className="text-xs text-muted mt-0.5">{role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-light border-y border-blue/10 text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-4">Work With Us</p>
          <h2 className="text-4xl font-black text-charcoal mb-6">Let us make your next event memorable.</h2>
          <Link
            href="/contact"
            className="inline-block bg-blue text-white px-10 py-4 rounded-lg font-semibold text-sm hover:bg-blue-dark transition-colors"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
