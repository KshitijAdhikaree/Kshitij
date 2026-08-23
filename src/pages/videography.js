
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/data/siteContent";
import { videoChannel, longFormVideos, shortVideos } from "@/data/videography";

const getVideoDetails = (video, kind = "long") => ({
  title: kind === "short" ? "Short-form study" : "Featured film",
  description: kind === "short" ? "A concise visual note made for the quick pulse of the Shorts format." : "A selected moving-image story shaped around atmosphere, rhythm, and place.",
  format: kind === "short" ? "Shorts" : "Long form",
  year: "2026",
  duration: kind === "short" ? "Few Seconds" : "Long",
  ...video,
});

function YouTubeFacade({ video, featured = false, kind = "long" }) {
  const details = getVideoDetails(video, kind);
  const isVertical = details.format === "Shorts";

  if (details.videoId) {
    const autoplay = featured && !isVertical;
    const params = `autoplay=${autoplay ? "1" : "0"}&mute=1&playsinline=1&controls=1&rel=0&modestbranding=1`;
    return (
      <div className={`video-frame ${isVertical ? "video-frame--short" : ""}`}>
        <iframe src={`https://www.youtube-nocookie.com/embed/${details.videoId}?${params}`} title={details.title} loading={autoplay ? "eager" : "lazy"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
    );
  }

  return <div className={`video-facade ${featured ? "video-facade--featured" : ""}`}><div className="video-facade__wash" /><span className="video-coming-soon">Coming soon</span></div>;
}

function VideoRow({ video, index }) {
  return <Reveal delay={index * 0.06}><article className="video-row video-row--short"><div className="video-row__media"><YouTubeFacade video={video} kind="short" /></div></article></Reveal>;
}export default function Videography() {
  const featuredVideo = getVideoDetails(longFormVideos[0], "long");
  const subscriberCount = 247;
  return (
    <>
      <Head>
        <title>Videography — Kshitij Adhikaree</title>
        <meta
          name="description"
          content="Short films, visual studies, and moving-image stories by Kshitij Adhikaree."
        />
      </Head>
      <Layout className="page-layout videography-page">
        <section className="video-hero">
          <div>
            <p className="eyebrow">Motion / sound / feeling</p>
            <h1 className="display-title mt-8 text-[clamp(3.75rem,14vw,12rem)]">
              Stories in
              <br />
              <em className="text-[var(--accent)]">motion.</em>
            </h1>
          </div>
          <div className="video-hero__aside">
            <p className="max-w-xl text-xl leading-9 text-[var(--muted)]">
              Moving images with a patient eye: from short, immediate studies to
              longer stories that have room to breathe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#films" className="button-primary">
                Explore the films ↓
              </Link>
              <div className="video-youtube-cta">
                <a
                  href={videoChannel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-quiet video-youtube-link"
                  aria-label="Subscribe on YouTube"
                >
                  <Image
                    src="/images/youtube.png"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                  <span className="sr-only">YouTube</span>
                  <span>Subscribe</span>
                </a>
                <span className="video-youtube-subscribers">
                  <strong>{subscriberCount.toLocaleString()}</strong>
                  <small>subscribers</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-4 border-y hairline py-5 text-xs uppercase tracking-[.16em] text-[var(--muted)] sm:grid-cols-3">
          <div>
            <strong className="block text-3xl font-normal tracking-normal text-[var(--ink)]">
              {longFormVideos.length}
            </strong>
            long-form films
          </div>
          <div>
            <strong className="block text-3xl font-normal tracking-normal text-[var(--ink)]">
              {shortVideos.length}
            </strong>
            short-form studies
          </div>
          <div>
            <strong className="block text-3xl font-normal tracking-normal text-[var(--ink)]">
              YouTube
            </strong>
            primary home
          </div>
        </section>

        <section id="films" className="section-space">
          <div className="mb-8 flex items-end justify-between border-b hairline pb-6">
            <div>
              <p className="eyebrow">The featured cut</p>
              <h2 className="display-title mt-6 text-5xl sm:text-7xl">
                Long form,
                <br />
                <em className="text-[var(--accent)]">slow burn.</em>
              </h2>
            </div>
            <span className="hidden font-mono text-xs text-[var(--muted)] sm:block">
              01 / 02
            </span>
          </div>
          <div className="video-feature">
            <YouTubeFacade video={featuredVideo} featured />
          </div>
        </section>

        <section className="section-space-lg">
          <div className="mb-8 flex items-end justify-between border-b hairline pb-6">
            <div>
              <p className="eyebrow">Shorts / quick studies</p>
              <h2 className="display-title mt-6 text-5xl sm:text-7xl">
                Small frame,
                <br />
                <em className="text-[var(--accent)]">full feeling.</em>
              </h2>
            </div>
            <span className="hidden font-mono text-xs text-[var(--muted)] sm:block">
              02 / 02
            </span>
          </div>
          <div className="video-rows">
            {shortVideos.map((video, index) => (
              <VideoRow key={video.videoId} video={video} index={index} />
            ))}
          </div>
        </section>

        <section className="section-space-lg border-t hairline pt-10 ">
          <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">The moving-image practice</p>
              <h2 className="display-title mt-6 text-5xl sm:text-6xl">
                Find the beat
                <br />
                <em className="text-[var(--accent)]">between frames.</em>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <span className="font-mono text-xs text-[var(--accent)]">
                  01
                </span>
                <h3 className="mt-5 font-semibold">Observe</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Start with the atmosphere, gesture, and detail that make a
                  story worth seeing.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-[var(--accent)]">
                  02
                </span>
                <h3 className="mt-5 font-semibold">Shape</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Build a visual rhythm through framing, movement, sound, and
                  restraint.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-[var(--accent)]">
                  03
                </span>
                <h3 className="mt-5 font-semibold">Deliver</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Create a finished piece that feels at home on a screen, feed,
                  or campaign.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space-lg rounded-[2rem] bg-[var(--ink)] px-7 py-12 text-[var(--paper)]  sm:px-12 sm:py-16">
          <p className="eyebrow !text-[var(--accent-soft)]">
            Have a story to tell?
          </p>
          <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="display-title max-w-2xl text-5xl sm:text-7xl">
              Let&apos;s give it
              <br />a moving image.
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
