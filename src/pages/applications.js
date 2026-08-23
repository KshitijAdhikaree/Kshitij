import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/data/siteContent";
import { work } from "@/data/work";

const applications = work.filter((item) => item.discipline === "Applications");
const featured = applications[0];
const supporting = applications.slice(1);
const liveCount = applications.filter((item) => item.externalUrl).length;

function ApplicationTile({ item, featured = false }) {
  const tile = (
    <article
      className={
        "application-tile" + (featured ? " application-tile--featured" : "")
      }
    >
      <div className="application-tile__image">
        <Image
          src={item.image}
          alt={item.title + " application preview"}
          fill
          priority={featured}
          className="object-cover"
          sizes={
            featured
              ? "(max-width: 767px) 100vw, 62vw"
              : "(max-width: 767px) 100vw, 38vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <span className="application-tile__type">{item.type}</span>
        <div className="application-tile__title">
          <span>{item.year}</span>
          <h2 className="display-title">{item.title}</h2>
        </div>
        <span className="application-tile__open" aria-hidden="true">
          Open project ↗
        </span>
      </div>
      <div className="application-tile__body">
        <p>{item.description}</p>
      </div>
    </article>
  );

  return item.externalUrl ? (
    <a
      href={item.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="application-tile-link"
      aria-label={`Open ${item.title} project`}
    >
      {tile}
    </a>
  ) : (
    <Link
      href={`/work/${item.slug}`}
      className="application-tile-link"
      aria-label={`Open ${item.title} case study`}
    >
      {tile}
    </Link>
  );
}
export default function Applications() {
  return (
    <>
      <Head>
        <title>Applications — Kshitij Adhikaree</title>
        <meta
          name="description"
          content="Digital products, websites, and interactive applications by Kshitij Adhikaree."
        />
      </Head>
      <Layout className="page-layout application-page">
        <section className="application-hero">
          <div>
            <p className="eyebrow">Applications / digital craft</p>
            <h1 className="display-title mt-8 text-[clamp(3.75rem,13vw,11rem)]">
              Interfaces
              <br />
              <em className="text-[var(--accent)]">with intent.</em>
            </h1>
          </div>
          <div className="application-hero__aside">
            <p className="max-w-xl text-xl leading-9 text-[var(--muted)]">
              Digital experiences that make complex ideas feel clear, useful,
              and worth returning to — from full websites to focused browser
              experiments.
            </p>
            <div className="mt-8 grid grid-cols-3 border-y hairline py-5 text-xs uppercase tracking-[.16em] text-[var(--muted)]">
              <div>
                <strong className="block text-3xl font-normal tracking-normal text-[var(--ink)]">
                  {applications.length}
                </strong>
                selected builds
              </div>
              <div>
                <strong className="block text-3xl font-normal tracking-normal text-[var(--ink)]">
                  {liveCount}
                </strong>
                live projects
              </div>
              <div>
                <strong className="block text-3xl font-normal tracking-normal text-[var(--ink)]">
                  2023—25
                </strong>
                recent work
              </div>
            </div>
          </div>
        </section>

        <section className="section-space application-gallery">
          <div className="application-section-heading">
            <div>
              <p className="eyebrow">Selected applications</p>
              <h2 className="display-title mt-6 text-5xl sm:text-7xl">
                Built to be
                <br />
                <em className="text-[var(--accent)]">experienced.</em>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">
              A visual index of digital products, browser experiments, and
              websites shaped with clarity and intent.
            </p>
          </div>
          <div className="application-grid">
            <Reveal>
              <ApplicationTile item={featured} featured />
            </Reveal>
            <div className="application-grid__supporting">
              {supporting.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.06}>
                  <ApplicationTile item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="section-space-lg grid gap-10 border-t hairline pt-10  md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">How I build</p>
            <h2 className="display-title mt-6 text-5xl sm:text-6xl">
              Useful can
              <br />
              <em className="text-[var(--accent)]">still be beautiful.</em>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <span className="font-mono text-xs text-[var(--accent)]">01</span>
              <h3 className="mt-5 font-semibold">Find the signal</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Understand the real problem before choosing the technology.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-[var(--accent)]">02</span>
              <h3 className="mt-5 font-semibold">Make it legible</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Turn complexity into an interface with rhythm and clarity.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-[var(--accent)]">03</span>
              <h3 className="mt-5 font-semibold">Leave a feeling</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Add the detail that makes a useful product memorable.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space-lg rounded-[2rem] bg-[var(--ink)] px-7 py-12 text-[var(--paper)]  sm:px-12 sm:py-16">
          <p className="eyebrow !text-[var(--accent-soft)]">
            Have an application in mind?
          </p>
          <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="display-title max-w-2xl text-5xl sm:text-7xl">
              Let&apos;s make the next useful thing.
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
    </>
  );
}
