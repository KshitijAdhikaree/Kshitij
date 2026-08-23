import Image from "next/image";

export default function WorkCard({ item, featured = false }) {
  const content = <>
    <div className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
      <Image src={item.image} alt={`${item.title} — ${item.discipline}`} fill className="object-cover" sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">{item.discipline}</span>
      {item.status === "draft" && <span className="absolute right-5 top-5 rounded-full bg-[var(--paper)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]">Coming soon</span>}
      <div className="absolute bottom-5 left-5 right-5 text-white"><p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/70">{item.year} / {item.type}</p><h3 className="display-title text-4xl sm:text-5xl">{item.title}</h3></div>
    </div>
    <div className="flex items-center justify-between gap-4 p-5"><p className="max-w-md text-sm leading-6 text-[var(--muted)]">{item.description}</p><span className="shrink-0 text-xl" aria-hidden="true">↗</span></div>
  </>;
  if (item.externalUrl) {
    return <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="work-card block" aria-label={`Open ${item.title} project`}>{content}</a>;
  }

  return <div className="work-card block">{content}</div>;
}
