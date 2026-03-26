import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
    try {
      const stored = localStorage.getItem("theme");
      const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = stored || (system ? "dark" : "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch (e) {}
  `}
        </Script>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
