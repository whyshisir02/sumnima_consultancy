"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import {
  business,
  href,
  whatsappUrl,
  type Lang,
  type Page,
} from "@/lib/config";
import { labels } from "@/content/pages/navigation";
import { services } from "@/content/pages/services";
import type { PortfolioItem } from "@/content/pages/projects";

export function Navigation({ lang, page }: { lang: Lang; page: Page }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <div className="header-actions">
        <Link
          className="language"
          href={href(lang === "en" ? "ne" : "en", page)}
          lang={lang === "en" ? "ne" : "en"}
          aria-label={lang === "en" ? "Switch to Nepali" : "Switch to English"}
        >
          {lang === "en" ? "नेपाली" : "EN"}
        </Link>
        <Link className="button small header-cta" href={href(lang, "contact")}>
          {lang === "en" ? "Let’s talk" : "कुरा गरौँ"}
          <ArrowUpRight size={17} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={
            open
              ? lang === "en"
                ? "Close menu"
                : "मेनु बन्द गर्नुहोस्"
              : lang === "en"
                ? "Open menu"
                : "मेनु खोल्नुहोस्"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label={lang === "en" ? "Mobile navigation" : "मोबाइल नेभिगेसन"}
      >
        {(
          [
            "home",
            "about",
            "services",
            "projects",
            "gallery",
            "contact",
          ] as Page[]
        ).map((p) => (
          <Link
            key={p}
            aria-current={p === page ? "page" : undefined}
            href={href(lang, p)}
            onClick={() => setOpen(false)}
          >
            {labels[lang][p]}
            <ArrowUpRight size={16} />
          </Link>
        ))}
      </nav>
    </>
  );
}

export function ContactForm({ lang }: { lang: Lang }) {
  const ne = lang === "ne";
  const [state, setState] = useState<
    "idle" | "sending" | "ready" | "success" | "error"
  >("idle");
  const [url, setUrl] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;
    const message = `New consultation enquiry\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email") || "—"}\nService: ${data.get("service")}\n\n${data.get("message")}`;
    if (!business.formEndpoint) {
      setUrl(whatsappUrl(message));
      setState("ready");
      return;
    }
    setState("sending");
    try {
      const response = await fetch(business.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }
  return (
    <form
      className="enquiry-form"
      onSubmit={submit}
      onChange={() => {
        if (state !== "sending") setState("idle");
      }}
    >
      <h2>{ne ? "तपाईं के बनाउन चाहनुहुन्छ?" : "What do you have in mind?"}</h2>
      <p>
        {ne
          ? "आफ्नो योजनाबारे केही जानकारी दिनुहोस्।"
          : "Tell us a little about your plans. We’ll take it from there."}
      </p>
      <div className="form-row">
        <label>
          {ne ? "पूरा नाम" : "Full name"} *
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder={ne ? "तपाईंको नाम" : "Your name"}
          />
        </label>
        <label>
          {ne ? "फोन नम्बर" : "Phone number"} *
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            pattern="\+?[0-9][0-9\(\) \-]{5,18}[0-9]"
            title={
              ne
                ? "७–२० अंक वा फोन चिन्हहरू"
                : "Use 7–20 digits or phone punctuation"
            }
            maxLength={20}
            placeholder="98XXXXXXXX"
          />
        </label>
      </div>
      <label>
        {ne ? "इमेल (वैकल्पिक)" : "Email (optional)"}
        <input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={150}
          placeholder="you@example.com"
        />
      </label>
      <label>
        {ne ? "आवश्यक सेवा" : "I’m interested in"} *
        <select name="service" required defaultValue="">
          <option value="" disabled>
            {ne ? "सेवा छान्नुहोस्" : "Select a service"}
          </option>
          {services.map((s) => (
            <option key={s.id}>{s[lang][0]}</option>
          ))}
          <option>{ne ? "अन्य / निश्चित छैन" : "Other / Not sure yet"}</option>
        </select>
      </label>
      <label>
        {ne ? "तपाईंको परियोजनाबारे" : "About your project"} *
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={4}
          placeholder={
            ne
              ? "स्थान, योजनाहरू र तपाईंलाई चाहिएको सहयोग…"
              : "Location, ideas, and how we can help…"
          }
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-note">
        {ne
          ? "तपाईंको विवरण यस अनुरोधको जवाफ दिन प्रयोग हुन्छ।"
          : "Your details are used to respond to this enquiry."}{" "}
        <Link href={href(lang, "privacy")}>
          {ne ? "गोपनीयता" : "Privacy notice"}
        </Link>
      </p>
      <button className="button" disabled={state === "sending"} type="submit">
        {state === "sending"
          ? ne
            ? "पठाउँदै…"
            : "Sending…"
          : business.formEndpoint
            ? ne
              ? "अनुरोध पठाउनुहोस्"
              : "Send enquiry"
            : ne
              ? "व्हाट्सएप अनुरोध तयार गर्नुहोस्"
              : "Prepare WhatsApp enquiry"}
        <Send size={17} />
      </button>
      <div aria-live="polite">
        {state === "ready" && (
          <div className="form-result">
            <CheckCircle2 size={20} />
            <div>
              <strong>
                {ne ? "तपाईंको सन्देश तयार छ।" : "Your message is ready."}
              </strong>
              <p>
                {ne
                  ? "पठाउनका लागि व्हाट्सएप खोल्नुहोस्।"
                  : "Open WhatsApp and press send to share your enquiry."}
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                {ne ? "व्हाट्सएप खोल्नुहोस्" : "Continue to WhatsApp"}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
        {state === "success" && (
          <p className="form-result">
            {ne
              ? "अनुरोध पठाइयो। धन्यवाद!"
              : "Thank you. Your enquiry has been sent."}
          </p>
        )}
        {state === "error" && (
          <p role="alert" className="form-error">
            {ne
              ? "अनुरोध पठाउन सकिएन। फेरि प्रयास गर्नुहोस् वा फोन गर्नुहोस्।"
              : "We couldn’t send your enquiry. Please try again or call us."}
          </p>
        )}
      </div>
    </form>
  );
}

export function GalleryGrid({
  items,
  lang,
}: {
  items: PortfolioItem[];
  lang: Lang;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");
  const dialog = useRef<HTMLDialogElement>(null);
  const previous = useRef<HTMLElement | null>(null);
  const filtered = items.filter(
    (p) => filter === "all" || p.category[lang] === filter,
  );
  useEffect(() => {
    if (index !== null) {
      previous.current = document.activeElement as HTMLElement;
      dialog.current?.showModal();
      const old = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = old;
        previous.current?.focus();
      };
    }
    dialog.current?.close();
  }, [index === null]);
  function close() {
    setIndex(null);
    dialog.current?.close();
  }
  function step(n: number) {
    setIndex((i) =>
      i === null ? 0 : (i + n + filtered.length) % filtered.length,
    );
  }
  return (
    <>
      <div className="filters">
        {["all", ...new Set(items.map((p) => p.category[lang]))].map((c) => (
          <button
            className={filter === c ? "active" : ""}
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
            key={c}
          >
            {c === "all" ? (lang === "en" ? "All work" : "सबै काम") : c}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((p, i) => (
          <button
            className="gallery-item"
            key={p.id}
            onClick={() => setIndex(i)}
          >
            <img
              src={p.image}
              alt={p.alt[lang]}
              width={800}
              height={600}
              loading="lazy"
            />
            <span>
              {p.title[lang]}
              <ArrowUpRight size={20} />
            </span>
            <small>
              {p.category[lang]} · {p.location[lang]}
            </small>
          </button>
        ))}
      </div>
      <dialog
        className="lightbox"
        ref={dialog}
        onCancel={close}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        <button
          className="lightbox-close"
          onClick={close}
          aria-label={lang === "en" ? "Close image" : "तस्बिर बन्द गर्नुहोस्"}
        >
          <X />
        </button>
        {index !== null && filtered[index] && (
          <>
            <img src={filtered[index].image} alt={filtered[index].alt[lang]} />
            <div className="lightbox-controls">
              <button
                onClick={() => step(-1)}
                aria-label={lang === "en" ? "Previous image" : "अघिल्लो तस्बिर"}
              >
                <ChevronLeft />
              </button>
              <p>
                {filtered[index].title[lang]} · {index + 1}/{filtered.length}
              </p>
              <button
                onClick={() => step(1)}
                aria-label={lang === "en" ? "Next image" : "अर्को तस्बिर"}
              >
                <ChevronRight />
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
export function FloatingContact({ lang }: { lang: Lang }) {
  return (
    <a
      className="floating-contact"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        lang === "en" ? "Chat on WhatsApp" : "व्हाट्सएपमा कुरा गर्नुहोस्"
      }
    >
      <MessageCircle size={23} />
      <span>{lang === "en" ? "Let’s talk" : "कुरा गरौँ"}</span>
      <i />
    </a>
  );
}
