import Link from "next/link";
import React, { useMemo } from "react";
import { Circle } from "../components/Icons";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  return (
    "#" +
    Array.from(
      { length: 6 },
      () => letters[Math.floor(Math.random() * 16)]
    ).join("")
  );
};

const HireMe = () => {
  const circleCount = 8;
  const radius = 80;
  const angleIncrement = 360 / circleCount;

  const randomColors = useMemo(
    () => Array.from({ length: circleCount }, () => generateRandomColor()),
    []
  );

  return (
    <div className="fixed left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:hidden">
      <div className="relative w-60 h-60 md:w-40 md:h-40 flex items-center justify-center">
        {/* Rotating circle wrapper */}
        <div className="absolute w-full h-full animate-rotate-slow">
          {Array.from({ length: circleCount }).map((_, i) => {
            const angle = i * angleIncrement;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Circle className="w-4 h-4" style={{ fill: randomColors[i] }} />
              </div>
            );
          })}
        </div>

        {/* Connect Button */}
        <Link
          href="mailto:adhikareekshitij@gmail.com"
          className="absolute flex items-center justify-center bg-dark text-light dark:text-dark dark:bg-light w-20 h-20 rounded-full font-semibold z-10 
             hover:bg-light hover:border-2 hover:border-dark hover:text-dark  dark:hover:border-light
             dark:hover:bg-dark dark:hover:text-light md:w-14 md:h-14 md:text-[10px]"
        >
          Connect
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
