import FadeIn from "@/components/FadeIn";

const eventTypes = [
  "Annual Conference", "Holiday Party", "Team Building", "Product Launch",
  "Client Entertainment", "Awards Night", "Other",
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 px-6 bg-white border-b border-border text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-3">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4 leading-tight">We are here to help.</h1>
          <p className="text-slate max-w-md mx-auto leading-relaxed">
            Have a question before you commit? Reach us directly. No forms, no pressure.
          </p>
        </FadeIn>
      </section>

      {/* Direct contact — prominent, above the fold */}
      <section className="py-12 px-6 bg-blue">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn>
            <a href="tel:+10000000000" className="flex flex-col items-center text-center p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Call Us</p>
              <p className="text-white font-semibold text-lg group-hover:underline">(000) 000-0000</p>
              <p className="text-white/50 text-xs mt-1">Mon to Fri, 9am to 6pm</p>
            </a>
          </FadeIn>

          <FadeIn delay={80}>
            <a href="mailto:hello@frameandco.com" className="flex flex-col items-center text-center p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Email Us</p>
              <p className="text-white font-semibold text-lg group-hover:underline">hello@frameandco.com</p>
              <p className="text-white/50 text-xs mt-1">We reply within a few hours</p>
            </a>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/10">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Location</p>
              <p className="text-white font-semibold text-lg">[City, State]</p>
              <p className="text-white/50 text-xs mt-1">Serving the surrounding area</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-offwhite border-b border-border px-6 py-8 text-center">
        <p className="text-sm text-slate">Ready to get a quote? Fill out the form below and we will follow up with details and availability.</p>
      </div>

      {/* Quote form */}
      <section className="py-16 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-2">Optional</p>
            <h2 className="text-2xl font-bold text-charcoal mb-8">Request a Quote</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">First Name</label>
                  <input type="text" placeholder="Jane" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Last Name</label>
                  <input type="text" placeholder="Smith" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Work Email</label>
                  <input type="email" placeholder="jane@company.com" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Company Name</label>
                  <input type="text" placeholder="Acme Corp" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Event Date</label>
                  <input type="date" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal/60 focus:outline-none focus:border-blue transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Event Type</label>
                  <select className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal/60 focus:outline-none focus:border-blue transition-colors appearance-none">
                    <option value="">Select type...</option>
                    {eventTypes.map((t) => <option key={t} value={t.toLowerCase()}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Expected Guest Count</label>
                  <input type="text" placeholder="e.g. 150 guests" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Venue or Location</label>
                  <input type="text" placeholder="The Grand Ballroom, New York" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Tell Us About the Event</label>
                <textarea rows={4} placeholder="Any details about your event, brand guidelines, or specific requirements..." className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors resize-none" />
              </div>

              <button type="submit" className="w-full bg-blue text-white py-4 rounded-lg text-sm font-semibold hover:bg-blue-dark transition-colors">
                Submit Request
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
