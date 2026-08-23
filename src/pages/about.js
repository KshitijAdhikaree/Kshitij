import Head from "next/head";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/data/siteContent";

const experience = [
  [
    "2024—Now",
    "Independent practice",
    "Creative development, visual direction, and selected client collaborations.",
  ],
  [
    "2022—2024",
    "Debugsoft Pvt. Ltd.",
    "Software engineering across full-stack products, payment platforms, and internal tools.",
  ],
  [
    "2016—2022",
    "Kathford College Of Engineering",
    "Bachelor of Electronics and Communication Engineering.",
  ],
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Kshitij Adhikaree</title>
        <meta name="description" content={siteContent.biography} />
      </Head>
      <Layout className="page-layout about-page">
        <section className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow">About the practice</p>
            <h1 className="display-title mt-8 text-[clamp(3.75rem,13vw,11rem)]">
              A mind
              <br />
              <em className="text-[var(--accent)]">in motion.</em>
            </h1>
          </div>
          <p className="max-w-xl text-xl leading-9 text-[var(--muted)]">
            {siteContent.biography}
          </p>
        </section>
        <section className="grid gap-12 border-y hairline py-24 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="display-title mt-6 text-6xl">
              Four ways
              <br />
              to collaborate.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Creative development",
              "Visual direction",
              "Photography",
              "Videography",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="rounded-3xl border hairline p-6">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-16 text-xl font-semibold">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    A focused, thoughtful approach shaped around the people,
                    place, and purpose behind the work.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="grid gap-12 py-24 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">The process</p>
            <h2 className="display-title mt-6 text-6xl">
              Good work
              <br />
              <em className="text-[var(--accent)]">has a rhythm.</em>
            </h2>
          </div>
          <div className="divide-y hairline">
            {siteContent.process.map((step) => (
              <div
                key={step.number}
                className="grid gap-4 py-7 sm:grid-cols-[80px_1fr_1.2fr]"
              >
                <span className="font-mono text-xs text-[var(--accent)]">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="border-t hairline py-24">
          <p className="eyebrow">Experience / education</p>
          <div className="mt-10 divide-y hairline">
            {experience.map(([date, title, text]) => (
              <div
                key={title}
                className="grid gap-3 py-7 md:grid-cols-[160px_1fr_1.5fr]"
              >
                <span className="font-mono text-xs text-[var(--accent)]">
                  {date}
                </span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
