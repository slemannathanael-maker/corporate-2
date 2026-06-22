import FadeIn from "@/components/FadeIn";

const contactInfo = [
  { label: "Email",    value: "hello@frameandco.com",   href: "mailto:hello@frameandco.com" },
  { label: "Phone",   value: "(000) 000-0000",           href: "tel:+10000000000" },
  { label: "Hours",   value: "Mon to Fri, 9am to 6pm",  href: null },
  { label: "Location", value: "[City, State]",           href: null },
];

const eventTypes = [
  "Annual Conference", "Holiday Party", "Team Building", "Product Launch",
  "Client Entertainment", "Awards Night", "Other",
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-16 px-6 bg-white border-b border-border text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-3">Contact</p>
          <h1 className="text-5xl md:text-6xl font-black text-charcoal mb-4 leading-tight">Get a Quote</h1>
          <p className="text-slate max-w-md mx-auto">
            Fill out the form and we will get back to you within a few hours with a custom quote.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 px-6 bg-offwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          <FadeIn direction="left" className="lg:col-span-3">
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

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Work Email</label>
                <input type="email" placeholder="jane@company.com" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Company Name</label>
                <input type="text" placeholder="Acme Corp" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
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

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Expected Guest Count</label>
                <input type="text" placeholder="e.g. 150 guests" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-slate mb-2">Venue or Location</label>
                <input type="text" placeholder="The Grand Ballroom, New York" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-blue transition-colors" />
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

          <FadeIn direction="right" delay={100} className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue mb-5">Contact Details</p>
              <div className="space-y-5">
                {contactInfo.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-xs text-muted uppercase tracking-widest mb-1">{label}</p>
                    {href
                      ? <a href={href} className="text-sm text-charcoal hover:text-blue transition-colors">{value}</a>
                      : <p className="text-sm text-charcoal">{value}</p>
                    }
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-offwhite border border-border aspect-square flex items-center justify-center">
              <p className="text-xs text-muted uppercase tracking-widest">Map Placeholder</p>
            </div>

            <div className="bg-blue-light rounded-2xl p-6 border border-blue/10">
              <p className="font-bold text-charcoal mb-2 text-sm">Fast turnaround.</p>
              <p className="text-xs text-slate leading-relaxed">
                We typically respond to all inquiries within a few hours during business hours. For urgent requests, call us directly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
