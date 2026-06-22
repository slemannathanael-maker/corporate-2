import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Frame & Co. — Corporate Photo Booth Rentals",
  description: "Professional photo booth experiences for conferences, holiday parties, team events, and product launches.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-charcoal font-semibold text-lg tracking-tight">
              Frame <span className="text-blue">&</span> Co.
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate">
              <Link href="/about" className="hover:text-charcoal transition-colors">About</Link>
              <Link href="/pricing" className="hover:text-charcoal transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
            </nav>
            <Link
              href="/contact"
              className="text-sm font-medium bg-blue text-white px-5 py-2.5 rounded-md hover:bg-blue-dark transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </header>

        <main className="flex-1 pt-16">
          {children}
        </main>

        <footer className="border-t border-border bg-offwhite">
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
              <div>
                <p className="font-semibold text-charcoal text-lg tracking-tight mb-1">Frame <span className="text-blue">&</span> Co.</p>
                <p className="text-sm text-muted">Corporate photo booth rentals for every occasion.</p>
              </div>
              <nav className="flex gap-8 text-sm text-muted">
                <Link href="/about" className="hover:text-charcoal transition-colors">About</Link>
                <Link href="/pricing" className="hover:text-charcoal transition-colors">Pricing</Link>
                <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
              </nav>
              <div className="space-y-2 text-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Contact</p>
                <a href="mailto:hello@frameandco.com" className="block text-slate hover:text-charcoal transition-colors">hello@frameandco.com</a>
                <a href="tel:+10000000000" className="block text-slate hover:text-charcoal transition-colors">(000) 000-0000</a>
                <p className="text-slate">[City, State]</p>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Frame &amp; Co. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
