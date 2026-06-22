import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const UNSPLASH = "https://images.unsplash.com/photo-";

const useCases = [
  {
    title: "Annual Conference",
    description: "Give attendees a branded keepsake from your biggest event of the year. Scales to hundreds of guests.",
    tag: "Most booked",
  },
  {
    title: "Holiday Party",
    description: "Make the year-end celebration one people actually talk about on Monday. Custom overlays, seasonal props.",
    tag: null,
  },
  {
    title: "Team Building Day",
    description: "Break the ice and build culture. Group shots printed on the spot keep the energy going.",
    tag: null,
  },
  {
    title: "Product Launch",
    description: "Put your brand in every photo. Guests share to social automatically, creating built-in earned media.",
    tag: "High ROI",
  },
  {
    title: "Client Entertainment",
    description: "Impress clients at dinners, galas, and private events. A subtle detail that lands every time.",
    tag: null,
  },
  {
    title: "Awards Night",
    description: "Capture winners in the moment. Branded prints double as a memento they will keep on their desk.",
    tag: null,
  },
];

const features = [
  {
    heading: "Up in under 30 minutes",
    body: "Our team handles setup, breakdown, and troubleshooting. You focus on the event.",
  },
  {
    heading: "Fully branded prints",
    body: "Every photo strip carries your logo, colors, and event name. No generic booths.",
  },
  {
    heading: "Digital gallery same day",
    body: "All photos delivered to a shareable link before your guests leave the room.",
  },
  {
    heading: "Stationary and roaming options",
    body: "Open-air booth with backdrop, enclosed booth, or a roaming attendant. Your call.",
  },
];

const galleryIds = [
  "1540575467063-178a50c2df87",
  "1531058020387-3be344556be6",
  "1523580494863-6f3031224c94",
  "1529543544282-ea669407fca3",
  "1475721027785-f74eccf877e2",
  "1560523159-4a9692d222ef",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-20 pb-0 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-16 text-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-6">
              Corporate Photo Booth Rentals
            </span>
            <h1 className="text-6xl md:text-[88px] font-bold text-charcoal leading-[0.92] tracking-tight mb-8">
              Photo booths<br />
              <span className="text-blue">for the office.</span>
            </h1>
            <p className="text-lg text-slate max-w-2xl mx-auto mb-10 leading-relaxed">
              Frame &amp; Co. brings professional photo booth experiences to corporate events of any size. Branded prints, same-day digital gallery, zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-blue text-white px-8 py-4 rounded-md font-medium text-sm hover:bg-blue-dark transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/pricing"
                className="inline-block border border-border text-slate px-8 py-4 rounded-md font-medium text-sm hover:border-slate hover:text-charcoal transition-colors"
              >
                See Packages
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Photo strip */}
        <div className="flex gap-3 px-6 pb-16 justify-center flex-wrap max-w-6xl mx-auto">
          {galleryIds.map((id, i) => (
            <div
              key={id}
              className="relative rounded-lg overflow-hidden flex-shrink-0 w-[150px] h-[210px] border border-border"
            >
              <Image
                src={`${UNSPLASH}${id}?w=300&h=420&fit=crop&crop=faces&q=80`}
                alt="Corporate event photo"
                fill
                className="object-cover"
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 px-6 bg-offwhite border-t border-border">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-3">Event Types</p>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Built for every<br />corporate occasion.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map(({ title, description, tag }, i) => (
              <FadeIn key={title} delay={i * 60}>
                <div className="relative bg-white rounded-xl p-7 border border-border hover:border-blue/40 hover:shadow-sm transition-all duration-300 group h-full flex flex-col">
                  {tag && (
                    <span className="absolute top-5 right-5 text-xs font-medium text-blue bg-blue-light px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  )}
                  <div className="w-6 h-0.5 bg-blue mb-5" />
                  <h3 className="font-semibold text-charcoal text-base mb-2">{title}</h3>
                  <p className="text-sm text-slate leading-relaxed flex-1">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-blue text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">Why Frame &amp; Co.</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional from<br />start to finish.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(({ heading, body }, i) => (
              <FadeIn key={heading} delay={i * 80}>
                <div className="flex gap-5 items-start border-t border-white/10 pt-6">
                  <div>
                    <h3 className="font-semibold text-white mb-1.5">{heading}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white border-t border-border text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-4">Ready to Book?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Your next event<br />deserves a booth.
          </h2>
          <p className="text-slate mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us about your event and we will get back to you within a few hours with a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue text-white px-10 py-4 rounded-md font-medium text-sm hover:bg-blue-dark transition-colors"
          >
            Get a Free Quote
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
