import "@/styles/globals.css";
import { Cormorant_Garamond, DM_Mono, DM_Sans } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeContext";
import CustomCursor from "@/components/CustomCursor";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";
import RouteTransition from "@/components/RouteTransition";
import ScrollToTop from "@/components/ScrollToTop";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });
const mono = DM_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const reducedMotion = useReducedMotion();

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
          <main className="route-content">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={router.asPath}
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
          <CustomCursor />
          <ScrollToTop />
          <div className="grain fixed inset-0 z-50" aria-hidden="true" />
          <RouteTransition />
        </div>
      </ThemeProvider>
    </>
  );
}
