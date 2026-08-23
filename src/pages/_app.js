import "@/styles/globals.css";
import { Cormorant_Garamond, DM_Mono, DM_Sans } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeContext";
import CustomCursor from "@/components/CustomCursor";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });
const mono = DM_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111110" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <div className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[var(--paper)] text-[var(--ink)]`}>
          <NavBar />
          <main><Component {...pageProps} /></main>
          <Footer />
          <div className="grain fixed inset-0 z-50" aria-hidden="true" />
        </div>
      </ThemeProvider>
    </>
  );
}
