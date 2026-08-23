import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext";
import { siteContent } from "@/data/siteContent";
import Logo from "./Logo";

const links = [
  { href: "/applications", label: "Code" },
  { href: "/photography", label: "Image" },
  { href: "/videography", label: "Motion" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const router = useRouter();
  const { mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const previousFocusRef = useRef(null);
  const previousBodyStylesRef = useRef(null);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeComplete", close);
    return () => router.events.off("routeChangeComplete", close);
  }, [router.events]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && open) {
        const focusable = mobileMenuRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex="0"]'
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    const html = document.documentElement;

    if (open) {
      previousFocusRef.current = document.activeElement;
      previousBodyStylesRef.current = {
        bodyOverflow: document.body.style.overflow,
        htmlOverflowY: html.style.overflowY,
      };

      // Lock page scrolling while preserving the document scrollbar and layout width.
      html.style.overflowY = "scroll";
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => mobileMenuRef.current?.querySelector("a")?.focus());
    } else if (previousBodyStylesRef.current) {
      document.body.style.overflow = previousBodyStylesRef.current.bodyOverflow;
      html.style.overflowY = previousBodyStylesRef.current.htmlOverflowY;
      previousBodyStylesRef.current = null;
      previousFocusRef.current?.focus?.();
      previousFocusRef.current = null;
    }

    return () => {
      if (!open && previousBodyStylesRef.current) {
        document.body.style.overflow = previousBodyStylesRef.current.bodyOverflow;
        html.style.overflowY = previousBodyStylesRef.current.htmlOverflowY;
      }
    };
  }, [open]);

  const isActive = (href) => router.pathname === href || router.pathname.startsWith(`${href}/`);
  const toggleTheme = () => setMode(mode === "dark" ? "light" : "dark");
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <div className="site-brand"><Logo /></div>

        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className={`site-nav__link ${isActive(link.href) ? "is-active" : ""}`}>{link.label}</Link>)}
                    <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}>
            <span className="theme-toggle__icon" aria-hidden="true">
              {mode === "dark" ? (
                <svg viewBox="0 0 24 24" focusable="false"><path d="M20.7 15.1A8.5 8.5 0 0 1 8.9 3.3 8.5 8.5 0 1 0 20.7 15.1Z" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>
              )}
            </span>
          </button>
        </nav>

        <button ref={menuButtonRef} type="button" className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
          <span className="menu-toggle__label">{open ? "Close" : "Menu"}</span><span className="menu-toggle__icon" aria-hidden="true"><i /><i /></span>
        </button>
      </div>

      <div className={`mobile-nav ${open ? "is-open" : ""}`} id="mobile-menu" ref={mobileMenuRef} aria-hidden={!open}>
        <button type="button" className="mobile-nav__backdrop" onClick={closeMenu} tabIndex={-1} aria-label="Close navigation menu" />
        <div className="mobile-nav__panel">
          <div className="mobile-nav__meta"><span>Navigation</span><span>{siteContent.identity.location}</span></div>
          <nav className="mobile-nav__links" aria-label="Mobile navigation">
            {links.map((link, index) => <Link key={link.href} href={link.href} tabIndex={open ? 0 : -1} onClick={closeMenu} className={`mobile-nav__link ${isActive(link.href) ? "is-active" : ""}`}><span>0{index + 1}</span>{link.label}<b aria-hidden="true">↗</b></Link>)}
          </nav>
                    <div className="mobile-nav__footer">
            <button type="button" onClick={toggleTheme} className="theme-toggle mobile-theme-toggle" tabIndex={open ? 0 : -1} aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}>
              <span className="theme-toggle__icon" aria-hidden="true">
                {mode === "dark" ? (
                  <svg viewBox="0 0 24 24" focusable="false"><path d="M20.7 15.1A8.5 8.5 0 0 1 8.9 3.3 8.5 8.5 0 1 0 20.7 15.1Z" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

