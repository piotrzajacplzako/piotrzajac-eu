import { PERSONAL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL.fullName}. All rights
          reserved.
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-slide text-sm text-text-muted hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-slide text-sm text-text-muted hover:text-accent"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
