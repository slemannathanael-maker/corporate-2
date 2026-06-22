import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Frame & Co. — Corporate Photo Booth Rentals",
  description: "Professional photo booth experiences for conferences, holiday parties, team events, and product launches.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
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
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="font-semibold text-charcoal text-lg tracking-tight">Frame <span className="text-blue">&</span> Co.</p>
              <p className="text-sm text-muted mt-1">Corporate photo booth rentals for every occasion.</p>
            </div>
            <nav className="flex gap-6 text-sm text-muted">
              <Link href="/about" className="hover:text-charcoal transition-colors">About</Link>
              <Link href="/pricing" className="hover:text-charcoal transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
            </nav>
            <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Frame &amp; Co. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
