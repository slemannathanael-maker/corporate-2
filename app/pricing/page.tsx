import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const packages = [
  {
    name: "Starter",
    tagline: "Perfect for smaller team events",
    price: "$[Price]",
    duration: "3 Hours",
    featured: false,
    features: [
      { label: "Open-air booth setup", included: true },
      { label: "Unlimited print sessions", included: true },
      { label: "2x6 photo strips", included: true },
      { label: "1 custom backdrop", included: true },
      { label: "Standard prop kit", included: true },
      { label: "Online gallery (30 days)", included: true },
      { label: "Booth attendant on site", included: false },
      { label: "Branded overlay design", included: false },
      { label: "GIF and boomerang mode", included: false },
      { label: "Social media share station", included: false },
    ],
  },
  {
    name: "Professional",
    tagline: "Our most popular corporate package",
    price: "$[Price]",
    duration: "5 Hours",
    featured: true,
    features: [
      { label: "Open-air or enclosed booth", included: true },
      { label: "Unlimited print sessions", included: true },
      { label: "2x6 and 4x6 print options", included: true },
      { label: "2 custom backdrops", included: true },
      { label: "Premium prop collection", included: true },
      { label: "Online gallery (90 days)", included: true },
      { label: "Dedicated booth attendant", included: true },
      { label: "Branded overlay design", included: true },
      { label: "GIF and boomerang mode", included: true },
      { label: "Social media share station", included: false },
    ],
  },
  {
    name: "Enterprise",
    tagline: "For large-scale corporate events",
    price: "Custom",
    duration: "All Day",
    featured: false,
    features: [
      { label: "Multiple booth configurations", included: true },
      { label: "Unlimited print sessions", included: true },
      { label: "All print size options", included: true },
      { label: "Unlimited backdrops", included: true },
      { label: "Luxury prop collection", included: true },
      { label: "Permanent gallery link", included: true },
      { label: "Dedicated attendant team", included: true },
      { label: "Custom branded experience", included: true },
      { label: "GIF and boomerang mode", included: true },
      { label: "Social media share station", included: true },
    ],
  },
];

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "We recommend booking at least 4 to 6 weeks before your event. For large conferences or peak season (October through January), 2 to 3 months is ideal.",
  },
  {
    q: "Can you accommodate multi-day conferences?",
    a: "Yes. Our Enterprise package is built for multi-day events. Contact us for a custom quote with volume pricing.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 20 to 30 minutes. We coordinate with your venue team to be ready before guests arrive.",
  },
  {
    q: "Can we brand the photo strips with our logo?",
    a: "Absolutely. Every Professional and Enterprise booking includes a custom branded overlay designed to match your event guidelines.",
  },
  {
    q: "Do you travel outside the city?",
    a: "Yes. Travel fees apply beyond [X] miles. Reach out with your venue details and we will include it in your quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-24 pb-16 px-6 bg-white text-center border-b border-border">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-3">Packages</p>
          <h1 className="text-5xl md:text-6xl font-black text-charcoal mb-4 leading-tight">Straightforward pricing.</h1>
          <p className="text-slate max-w-xl mx-auto">No hidden fees. No surprises. Pick a package and we handle everything else.</p>
        </FadeIn>
      </section>

      <section className="py-16 px-6 bg-offwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map(({ name, tagline, price, duration, featured, features }, i) => (
            <FadeIn key={name} delay={i * 100}>
              <div className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                featured
                  ? "bg-charcoal border-charcoal shadow-2xl md:scale-105"
                  : "bg-white border-border shadow-sm"
              }`}>
                <div className={`p-8 border-b ${featured ? "border-white/10" : "border-border"}`}>
                  {featured && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-charcoal bg-blue px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <p className={`text-xs uppercase tracking-widest mb-1 ${featured ? "text-white/40" : "text-muted"}`}>
                    {tagline}
                  </p>
                  <h2 className={`text-3xl font-black mb-4 ${featured ? "text-white" : "text-charcoal"}`}>{name}</h2>
                  <span className={`text-5xl font-black ${featured ? "text-white" : "text-charcoal"}`}>{price}</span>
                  <p className={`text-sm mt-2 ${featured ? "text-white/40" : "text-muted"}`}>{duration} of coverage</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {features.map(({ label, included }) => (
                      <li
                        key={label}
                        className={`text-sm flex items-center gap-3 ${
                          included
                            ? featured ? "text-white/80" : "text-slate"
                            : featured ? "text-white/20" : "text-charcoal/20"
                        }`}
                      >
                        <span className={included ? "text-blue" : featured ? "text-white/15" : "text-charcoal/15"}>
                          {included ? "✓" : "✕"}
                        </span>
                        {label}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center text-sm px-6 py-3.5 rounded-lg font-semibold transition-colors duration-200 ${
                      featured
                        ? "bg-blue text-white hover:bg-blue-dark"
                        : "border border-border text-slate hover:border-blue hover:text-blue"
                    }`}
                  >
                    {name === "Enterprise" ? "Contact Us" : "Book This Package"}
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-3">FAQ</p>
            <h2 className="text-4xl font-black text-charcoal">Common questions.</h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <FadeIn key={q} delay={i * 60}>
                <div className="bg-offwhite rounded-xl px-7 py-6 border border-border hover:border-blue/30 transition-colors">
                  <h3 className="font-bold text-charcoal mb-2">{q}</h3>
                  <p className="text-sm text-slate leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-charcoal text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-4">Get Started</p>
          <h2 className="text-4xl font-black text-white mb-6">Need a custom quote?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">Large events, multi-day bookings, or something outside the standard packages — we do it all.</p>
          <Link
            href="/contact"
            className="inline-block bg-blue text-white px-10 py-4 rounded-lg font-semibold text-sm hover:bg-blue-dark transition-colors"
          >
            Contact Us
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
