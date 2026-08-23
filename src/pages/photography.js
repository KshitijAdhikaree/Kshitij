import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/data/siteContent";
import { photoGallery } from "@/data/photography";
import { InstagramIcon } from "@/components/Icons";

function PhotoTile({ photo, onOpen }) {
  return (
    <figure className="photo-masonry__item">
      <button
        type="button"
        onClick={() => onOpen(photo)}
        className="photo-masonry__button group"
        aria-label={`Open ${photo.title}`}
      >
        <Image
          src={photo.image}
          alt={photo.title}
          width={photo.image.width}
          height={photo.image.height}
          className="photo-masonry__image"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="photo-masonry__veil" />
        <span className="photo-masonry__caption">
          <span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-white/65">
              {photo.caption}
            </span>
            <strong className="mt-2 block text-lg font-medium">
              {photo.title}
            </strong>
          </span>
          <span
            className="text-xl opacity-0 transition group-hover:opacity-100"
            aria-hidden="true"
          >
            ↗
          </span>
        </span>
        <span className="photo-masonry__number">{photo.id}</span>
      </button>
    </figure>
  );
}

export default function Photography() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const close = (event) => event.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", close);
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [selected]);
  return (
    <>
      <Head>
        <title>Photography — Kshitij Adhikaree</title>
        <meta
          name="description"
          content="Photography and visual studies by Kshitij Adhikaree."
        />
      </Head>
      <Layout className="page-layout photography-page">
        <section className="grid gap-12 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div>
            <p className="eyebrow">Photography / light / presence</p>
            <h1 className="display-title mt-8 text-[clamp(3.75rem,14vw,12rem)]">
              A slower
              <br />
              <em className="text-[var(--accent)]">look.</em>
            </h1>
          </div>
          <div>
            <p className="max-w-xl text-xl leading-9 text-[var(--muted)]">
              Portraits, places, and small observations shaped by natural light
              and an instinct to stay with the moment a little longer.
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              Selected visual studies / 2025—26
            </p>
          </div>
        </section>
        <section
          className="photo-masonry mt-20"
          aria-label="Selected photography"
        >
          {photoGallery.map((photo, index) => (
            <Reveal key={photo.id} delay={index * 0.06}>
              <PhotoTile photo={photo} onOpen={setSelected} />
            </Reveal>
          ))}
        </section>
        <section
          className="instagram-cta section-space"
          aria-label="Instagram photography gallery"
        >
          <div>
            <p className="eyebrow">More frames / Instagram</p>
            <h2 className="display-title mt-6 text-5xl sm:text-7xl">
              See the latest
              <br />
              <em className="text-[var(--accent)]">on Instagram.</em>
            </h2>
            <p className="instagram-cta__copy">
              Follow along for new photographs, quiet observations, and visual
              notes from the ongoing series.
            </p>
          </div>
          <a
            href="https://www.instagram.com/life.on.the.horizon/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-cta__link"
            aria-label="Follow life.on.the.horizon on Instagram"
          >
            <span className="instagram-cta__icon">
              <InstagramIcon aria-hidden="true" />
            </span>
            <span>
              <strong>@life.on.the.horizon</strong>
              <small>2,045 followers</small>
            </span>
            <span className="instagram-cta__action">Follow</span>
          </a>
        </section>{" "}
        <section className="section-space-lg grid gap-10 border-t hairline pt-10  md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">The series</p>
            <h2 className="display-title mt-6 text-5xl sm:text-7xl">
              Stillness is
              <br />
              <em className="text-[var(--accent)]">a direction.</em>
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              This is the beginning of a larger collection of photographs
              exploring people, texture, and the quiet geometry of everyday
              places. New frames and commissioned series are on the way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border hairline px-4 py-2 text-xs text-[var(--muted)]">
                Portraits
              </span>
              <span className="rounded-full border hairline px-4 py-2 text-xs text-[var(--muted)]">
                Editorial
              </span>
              <span className="rounded-full border hairline px-4 py-2 text-xs text-[var(--muted)]">
                Location stories
              </span>
            </div>
          </div>
        </section>
        <section className="section-space-lg rounded-[2rem] bg-[var(--ink)] px-7 py-12 text-[var(--paper)]  sm:px-12 sm:py-16">
          <p className="eyebrow !text-[var(--accent-soft)]">
            Photography commissions
          </p>
          <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="display-title max-w-2xl text-5xl sm:text-7xl">
              Have a story worth framing?
            </h2>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="button-primary shrink-0 !bg-[var(--paper)] !text-[var(--ink)] hover:!bg-[var(--accent)] hover:!text-white"
            >
              Start a conversation 
            </a>
          </div>
        </section>
      </Layout>
      {selected && (
        <div
          className="photo-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="photo-lightbox__close absolute right-6 top-6 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white"
            onClick={() => setSelected(null)}
          >
            Close ×
          </button>
          <div
            className="relative h-[78vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <p className="absolute bottom-[-28px] left-0 text-xs uppercase tracking-[0.16em] text-white/60">
              {selected.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
