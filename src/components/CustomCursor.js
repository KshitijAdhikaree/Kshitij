import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const dot = document.querySelector("[data-cursor-dot]");
    const ring = document.querySelector("[data-cursor-ring]");
    if (!dot || !ring) return undefined;

    let frame;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      dot.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px, 0)";
      ring.style.transform = "translate3d(" + ringX + "px, " + ringY + "px, 0)";
      frame = requestAnimationFrame(render);
    };

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const isInteractive = (target) => target?.closest?.("a, button, [role='button'], input, textarea, select, summary");

    const enterInteractive = (event) => {
      if (isInteractive(event.target)) document.body.classList.add("cursor-is-hovering");
    };

    const leaveInteractive = (event) => {
      if (!isInteractive(event.relatedTarget)) document.body.classList.remove("cursor-is-hovering");
    };

    const leaveWindow = () => document.body.classList.add("cursor-is-hidden");
    const enterWindow = () => document.body.classList.remove("cursor-is-hidden");

    document.body.classList.add("custom-cursor-enabled");
    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", enterInteractive, { passive: true });
    document.addEventListener("mouseout", leaveInteractive, { passive: true });
    document.addEventListener("mouseleave", leaveWindow);
    document.addEventListener("mouseenter", enterWindow);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      document.body.classList.remove("custom-cursor-enabled", "cursor-is-hovering", "cursor-is-hidden");
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enterInteractive);
      document.removeEventListener("mouseout", leaveInteractive);
      document.removeEventListener("mouseleave", leaveWindow);
      document.removeEventListener("mouseenter", enterWindow);
    };
  }, []);

  return (
    <>
      <span className="custom-cursor__dot" data-cursor-dot aria-hidden="true" />
      <span className="custom-cursor__ring" data-cursor-ring aria-hidden="true" />
    </>
  );
}