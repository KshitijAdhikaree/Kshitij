import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function NotFound() { return <><Head><title>Page not found — Kshitij Adhikaree</title></Head><Layout className="page-layout flex min-h-[70vh] flex-col justify-center"><p className="eyebrow">404 / Lost in the edit</p><h1 className="display-title mt-8 max-w-4xl text-[clamp(3.75rem,13vw,11rem)]">This frame<br /><em className="text-[var(--accent)]">doesn&apos;t exist.</em></h1><p className="mt-8 max-w-md text-lg leading-8 text-[var(--muted)]">The page may have moved, or perhaps it was never part of the final cut.</p><Link href="/" className="button-primary mt-10 w-fit">Return home ↗</Link></Layout></>; }
