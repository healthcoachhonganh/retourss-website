import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { mainNav, site } from "@/data/site";

const imageCaptionFrame = "inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6";
const imageCaptionSurface =
  "bg-forest/90 px-4 py-3 text-[0.95rem]/7 font-medium text-ivory ring-1 ring-ivory/12 backdrop-blur-md sm:text-base/7";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-ivory/95 shadow-[0_10px_40px_rgba(33,56,42,0.06)] backdrop-blur">
      <div className="container-soft flex min-h-[4.75rem] items-center justify-between gap-4 py-3">
        <Link to="/" className="block shrink-0 rounded-md focus:outline-none focus:ring-2 focus:ring-moss/30" aria-label="Retour trang chủ">
          <img
            src="/retour-logo.png"
            alt="Retour - Peace with yourself"
            width={372}
            height={146}
            loading="eager"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <Link
          to="/bat-dau-tai-day/danh-gia-muc-do-hoi-phuc"
          className="inline-flex shrink-0 items-center rounded-full bg-forest px-4 py-2.5 text-xs font-medium leading-none text-ivory shadow-soft transition hover:bg-moss sm:px-5 sm:py-3 sm:text-sm"
        >
          {site.cta}
        </Link>
      </div>
      <nav className="border-t border-forest/10" aria-label="Menu chính">
        <div className="container-soft no-scrollbar flex gap-2 overflow-x-auto py-3 text-sm text-forest lg:justify-center">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 leading-none text-forest/78 transition hover:bg-oat/70 hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest text-ivory">
      <div className="container-soft grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-serif text-3xl font-medium">Retour</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-ivory/75">
            Điều hòa hệ thần kinh, ngủ sâu & tái tạo năng lượng thông qua Yoga hồi phục.
          </p>
        </div>
        <div>
          <p className="font-medium">Bắt đầu</p>
          <div className="mt-4 grid gap-3 text-sm text-ivory/75">
            <Link to="/bat-dau-tai-day/danh-gia-muc-do-hoi-phuc">Đánh giá nhu cầu hồi phục</Link>
            <Link to="/bat-dau-tai-day/audio-thu-gian-mien-phi">Audio thư giãn miễn phí</Link>
            <a href="https://web.facebook.com/honganh.retour" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="mailto:retourss.com@gmail.com">
              retourss.com@gmail.com
            </a>
          </div>
        </div>
        <div>
          <p className="font-medium">Kết nối</p>
          <p className="mt-4 text-sm leading-7 text-ivory/75">
            {site.contactEmail}
            <br />
            Sóc Sơn, Hà Nội
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium text-clay">{eyebrow}</p>
      ) : null}
      <h1 className="text-balance font-serif text-4xl font-medium leading-[1.18] text-forest md:text-[3.2rem]">{title}</h1>
      {body ? <p className="mt-6 whitespace-pre-line text-lg leading-8 text-earth">{body}</p> : null}
    </div>
  );
}

export function CtaLink({ href, children, tone = "dark" }: { href: string; children: ReactNode; tone?: "dark" | "light" }) {
  const classes =
    tone === "dark"
      ? "bg-forest text-ivory hover:bg-moss"
      : "bg-ivory text-forest hover:bg-oat";

  const className = `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${classes}`;
  const isExternal = href.startsWith("http");

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ArrowRight size={16} />
    </a>
  ) : (
    <Link to={href} className={className}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-oat shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_28%),linear-gradient(135deg,#7b8354,#e8ddc7_52%,#9b7658)]" />
      <div className={`absolute rounded-md ${imageCaptionFrame} ${imageCaptionSurface}`}>
        {label}
      </div>
    </div>
  );
}

export function FeatureImage({
  src,
  alt,
  caption,
  position = "center",
  captionClassName,
  captionFrameClassName
}: {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
  captionClassName?: string;
  captionFrameClassName?: string;
}) {
  return (
    <figure className="relative min-h-[360px] overflow-hidden rounded-lg bg-oat shadow-soft md:min-h-[520px]">
      <img
        src={src}
        alt={alt}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/34 via-transparent to-transparent" />
      {caption ? (
        <figcaption className={`absolute rounded-md ${captionFrameClassName || imageCaptionFrame} ${captionClassName || imageCaptionSurface}`}>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3 rounded-md border border-forest/10 bg-white/45 p-4">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-moss text-ivory">
            <Check size={15} />
          </span>
          <span className="text-forest">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function TextCard({ title, body }: { title: string; body: string }) {
  const paragraphs = body.split(/\n\s*\n/).filter(Boolean);

  return (
    <article className="rounded-lg border border-forest/10 bg-white/50 p-6 shadow-soft">
      <h3 className="font-serif text-2xl font-medium leading-snug text-forest">{title}</h3>
      <div className="mt-4 space-y-4 leading-7 text-earth">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
