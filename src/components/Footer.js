import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="page-shell grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-24">
        <div>
          <p className="eyebrow">Let&apos;s make something resonate</p>
          <h2 className="display-title mt-6 max-w-md text-5xl sm:text-6xl">
            Have a good idea? Let&apos;s give it a shape.
          </h2>
        </div>
        <div className="md:justify-self-end">
          <p className="eyebrow">Contact</p>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="mt-5 block text-lg hover:text-[var(--accent)]"
          >
            {siteContent.contact.email}
          </a>
          <p className="mt-3 text-sm text-[var(--muted)]">
            {siteContent.availability}
          </p>
        </div>
        <div className="md:justify-self-end">
          <p className="eyebrow">Elsewhere</p>
          <div className="mt-5 flex flex-col gap-3">
            {siteContent.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[var(--accent)]"
              >
                {item.label} 
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="page-shell flex flex-col justify-between gap-3 border-t hairline py-5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo />
          <span>© {new Date().getFullYear()} Kshitij Adhikaree</span>
        </div>
        <span>Code / image / motion</span>
      </div>
    </footer>
  );
}
