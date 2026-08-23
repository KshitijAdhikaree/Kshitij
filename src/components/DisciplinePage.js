import Head from "next/head";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { work } from "@/data/work";

const copy = {
  Applications: { intro: "Digital products, websites, and interactive systems designed to make an idea feel clear, useful, and alive.", label: "Code / systems / interaction", heading: ["Ideas into", "interfaces."] },
  Photography: { intro: "Quiet frames, human details, and visual studies shaped by observation, light, and a slower point of view.", label: "Light / texture / stillness", heading: ["A slower", "look."] },
  Videography: { intro: "Short films and moving-image stories built around atmosphere, rhythm, and the details that stay with you.", label: "Motion / sound / feeling", heading: ["Stories in", "motion."] },
};

export default function DisciplinePage({ discipline }) {
  const items = work.filter((item) => item.discipline === discipline);
  const section = copy[discipline];
  return (
    <>
      <Head><title>{`${discipline} — Kshitij Adhikaree`}</title><meta name="description" content={section.intro} /></Head>
      <Layout className="page-layout">
        <section className="max-w-5xl">
          <p className="eyebrow">{section.label}</p>
          <h1 className="display-title mt-8 text-[clamp(5rem,14vw,12rem)]">{section.heading[0]}<br /><em className="text-[var(--accent)]">{section.heading[1]}</em></h1>
          <p className="mt-10 max-w-2xl text-xl leading-9 text-[var(--muted)]">{section.intro}</p>
        </section>
        <div className="mt-20 grid gap-6 md:grid-cols-2">{items.map((item, index) => <Reveal key={item.slug} delay={index * .06}><WorkCard item={item} featured={index === 0 && items.length > 1} /></Reveal>)}</div>
        {items.length === 0 && <div className="mt-20 rounded-3xl border hairline p-10 text-[var(--muted)]">More work from this practice is being prepared.</div>}
      </Layout>
    </>
  );
}
