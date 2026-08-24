import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const ROUTE_TRANSITIONS = [
  { key: "home", match: (pathname) => pathname === "/" },
  { key: "application", match: (pathname) => pathname === "/applications" || pathname.startsWith("/work/") || pathname === "/projects" },
  { key: "photography", match: (pathname) => pathname === "/photography" },
  { key: "motion", match: (pathname) => pathname === "/videography" },
  { key: "about", match: (pathname) => pathname === "/about" },
];

export function getRouteTransition(pathname = "/") {
  return ROUTE_TRANSITIONS.find((transition) => transition.match(pathname))?.key || "default";
}

function isInternalNavigation(event, anchor) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && !anchor.target && !anchor.hasAttribute("download") && anchor.origin === window.location.origin;
}

export default function RouteTransition() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [transitionKey, setTransitionKey] = useState(getRouteTransition(router.pathname));
  const nativeNavigationRef = useRef(false);
  const finishTimerRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const beginFallback = (url) => {
      nativeNavigationRef.current = false;
      const key = getRouteTransition(url.split("?")[0].split("#")[0]);
      setTransitionKey(key);
      root.dataset.routeTransition = key;
      setActive(true);
    };
    const finish = () => {
      window.clearTimeout(finishTimerRef.current);
      finishTimerRef.current = window.setTimeout(() => {
        setActive(false);
        delete root.dataset.routeTransition;
      }, reducedMotion ? 0 : 120);
    };
    const onRouteStart = (url) => { if (!nativeNavigationRef.current) beginFallback(url); };
    const onRouteDone = () => {
      if (nativeNavigationRef.current) { nativeNavigationRef.current = false; return; }
      finish();
    };
    const onClick = (event) => {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor || !isInternalNavigation(event, anchor) || !document.startViewTransition || reducedMotion) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const url = new URL(anchor.href);
      const key = getRouteTransition(url.pathname);
      nativeNavigationRef.current = true;
      root.dataset.routeTransition = key;
      setTransitionKey(key);
      try {
        document.startViewTransition(async () => {
          await router.push(`${url.pathname}${url.search}${url.hash}`);
        }).finished.catch(() => {
          nativeNavigationRef.current = false;
          beginFallback(url.pathname);
          finish();
        });
      } catch {
        nativeNavigationRef.current = false;
        beginFallback(url.pathname);
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }
    };
    document.addEventListener("click", onClick, true);
    router.events.on("routeChangeStart", onRouteStart);
    router.events.on("routeChangeComplete", onRouteDone);
    router.events.on("routeChangeError", onRouteDone);
    return () => {
      document.removeEventListener("click", onClick, true);
      router.events.off("routeChangeStart", onRouteStart);
      router.events.off("routeChangeComplete", onRouteDone);
      router.events.off("routeChangeError", onRouteDone);
      window.clearTimeout(finishTimerRef.current);
    };
  }, [router, router.events]);

  return <div className={`route-transition route-transition--${transitionKey}${active ? " is-active" : ""}`} aria-hidden="true"><span className="route-transition__code" /><span className="route-transition__image" /><span className="route-transition__motion" /><span className="route-transition__scan" /></div>;
}
