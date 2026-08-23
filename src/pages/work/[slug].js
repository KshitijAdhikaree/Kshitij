import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { getWorkBySlug, work } from "@/data/work";
const categoryPath = { Applications: "/applications", Photography: "/photography", Videography: "/videography" };

export async function getStaticPaths() { return { paths: work.filter((item) => item.status === "published").map((item) => ({ params: { slug: item.slug } })), fallback: false }; }
export async function getStaticProps({ params }) { return { props: { item: getWorkBySlug(params.slug) } }; }

export default function CaseStudy({ item }) {
  const router = useRouter();
  if (router.isFallback || !item) return null;
  return <><Head><title>{`${item.title} — Kshitij Adhikaree`}</title><meta name="description" content={item.description} /></Head><Layout className="page-layout"><Link href={categoryPath[item.discipline] || "/applications"} className="button-quiet">← Back to {item.discipline}</Link><header className="mt-16 max-w-5xl"><p className="eyebrow">{item.discipline} / {item.year}</p><h1 className="display-title mt-8 text-[clamp(3.75rem,13vw,11rem)]">{item.title}</h1><p className="mt-10 max-w-2xl text-xl leading-8 text-[var(--muted)]">{item.description}</p><div className="mt-10 flex flex-wrap gap-8 text-sm"><span><strong className="block text-[var(--muted)]">Role</strong><span className="mt-2 block">{item.role}</span></span><span><strong className="block text-[var(--muted)]">Tools</strong><span className="mt-2 block">{item.tools.join(" / ")}</span></span></div></header><Reveal className="relative mt-20 aspect-[16/9] overflow-hidden rounded-[2rem]"><Image src={item.image} alt={`${item.title} feature`} fill priority className="object-cover" sizes="100vw" /></Reveal><section className="grid gap-12 py-24 md:grid-cols-3"><div><p className="eyebrow">01 / Challenge</p><p className="mt-5 leading-7 text-[var(--muted)]">{item.challenge}</p></div><div><p className="eyebrow">02 / Process</p><p className="mt-5 leading-7 text-[var(--muted)]">{item.process}</p></div><div><p className="eyebrow">03 / Outcome</p><p className="mt-5 leading-7 text-[var(--muted)]">{item.outcome}</p></div></section><section className="grid gap-6 md:grid-cols-2">{item.gallery.map((image, index) => <div key={`${item.slug}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src={image} alt={`${item.title} gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /></div>)}</section></Layout></>;
}
