import Head from "next/head";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiImage, FiPlay } from "react-icons/fi";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { siteContent } from "@/data/siteContent";
import { work } from "@/data/work";
import { photoGallery } from "@/data/photography";
import portrait from "../../public/images/profile/profile1.png";
function FeaturedVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="homepage-video-card homepage-video-card--full">
      <div className="homepage-video-card__screen">
        {isLoaded ? (
          <iframe src="https://www.youtube-nocookie.com/embed/CZAfqMWOBd0?autoplay=1&mute=1&playsinline=1&loop=1&playlist=CZAfqMWOBd0&controls=0&rel=0&modestbranding=1" title="Featured YouTube Short" allow="autoplay; encrypted-media; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" />
        ) : (
          <button type="button" className="homepage-video-card__facade" onClick={() => setIsLoaded(true)} aria-label="Play featured YouTube Short">
            <Image src="https://i.ytimg.com/vi/CZAfqMWOBd0/hqdefault.jpg" alt="" fill sizes="(max-width: 767px) 100vw, 270px" unoptimized />
            <span aria-hidden="true">Play film ↗</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const featured = work.slice(0, 3);
  const featuredPhotos = photoGallery.slice(0, 3);
  const reducedMotion = useReducedMotion();
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const disciplines = [
    { label: "Code", Icon: FiCode },
    { label: "Image", Icon: FiImage },
    { label: "Motion", Icon: FiPlay },
  ];
  const currentDiscipline = disciplines[disciplineIndex];

  useEffect(() => {
    if (reducedMotion) return undefined;
    const cycle = window.setInterval(() => {
      setDisciplineIndex((index) => (index + 1) % 3);
    }, 2400);
    return () => window.clearInterval(cycle);
  }, [reducedMotion]);
  return (
    <>
      <Head><title>{siteContent.identity.name + " — Creative developer + visual storyteller"}</title><meta name="description" content={siteContent.identity.intro} /></Head>
      <Layout className="homepage-shell page-layout">
        <section className="homepage-hero">
          <div className="homepage-hero__copy"><p className="eyebrow">{siteContent.identity.eyebrow} / {siteContent.identity.location}</p><h1 className="display-title homepage-hero__heading">Creative developer <em className="text-[var(--accent)]">+</em> visual storyteller.</h1><p className="homepage-hero__intro">{siteContent.identity.intro}</p></div>
          <div className="homepage-hero__media"><div className="homepage-hero__ring" /><div className="homepage-hero__portrait"><Image src={portrait} alt="Portrait of Kshitij Adhikaree" fill priority className="object-cover grayscale-[.15]" sizes="(max-width: 767px) 88vw, (max-width: 1023px) 65vw, 40vw" /></div><div className="homepage-hero__badge" aria-label={"Current discipline: " + currentDiscipline.label}>
  <AnimatePresence initial={false} mode="wait">
    <motion.div key={currentDiscipline.label} className="homepage-hero__badge-icon" initial={reducedMotion ? false : { opacity: 0, scale: .7, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={reducedMotion ? undefined : { opacity: 0, scale: .7, rotate: 12 }} transition={{ duration: .45, ease: [0.22, 1, .36, 1] }}>
      <currentDiscipline.Icon aria-hidden="true" />
      <span className="sr-only">{currentDiscipline.label}</span>
    </motion.div>
  </AnimatePresence>
</div></div>
        </section>

        <section className="homepage-facts"><div><span className="eyebrow">01 / Practice</span><p>Code, image, motion</p></div><div><span className="eyebrow">02 / Based in</span><p>Kathmandu, Nepal / working globally</p></div><div><span className="eyebrow">03 / Focus</span><p>Digital experiences with a point of view</p></div></section>

        <section className="homepage-media">
  <div className="homepage-media__intro">
    <p className="eyebrow">Image / motion</p>
    <h2 className="display-title homepage-section-title">The work<br /><em className="text-[var(--accent)]">between frames.</em></h2>
    <p className="homepage-media__copy">A closer look at the visual side of the practice: photographs made slowly, and moving images shaped by atmosphere.</p>
  </div>
  <div className="homepage-media__visuals">
    <div className="homepage-photo-grid" aria-label="Selected photography">
      {featuredPhotos.map((photo, index) => <div key={photo.id} className={"homepage-photo homepage-photo--" + (index + 1)}><Image src={photo.image} alt={photo.title} fill className="object-cover" sizes="(max-width: 767px) 50vw, 24vw" /></div>)}
    </div>
    <FeaturedVideo />

  </div>
</section>
<section className="homepage-work">
  <div className="homepage-section-heading">
    <p className="eyebrow">Selected work / 03</p>
    <h2 className="display-title homepage-section-title">A few things <em className="text-[var(--accent)]">made with care.</em></h2>
  </div>
  <div className="homepage-work-grid">
    {featured.map((item, index) => <Reveal key={item.slug} delay={index * .08} className={`homepage-work-grid__item homepage-work-grid__item--${index + 1}`}><WorkCard item={item} featured={index === 0} /></Reveal>)}
  </div>
</section>

        <section className="homepage-services"><div><p className="eyebrow">What I do</p><h2 className="display-title homepage-section-title">Different tools.<br /><em className="text-[var(--accent)]">Same intention.</em></h2></div><div className="homepage-services__list">{siteContent.services.map((service) => <div key={service.number} className="homepage-service"><span className="font-mono text-xs text-[var(--accent)]">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p></div>)}</div></section>
      </Layout>
    </>
  );
}
