"use client";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";

interface Position {
  top: number;
  left: number;
  size: number;
  opacity: number;
}

interface BackgroundPatternProps {
  image: StaticImageData | string;
  count?: number;
}

export default function BackgroundPattern({
  image,
  count = 20,
}: BackgroundPatternProps) {
  const [positions, setPositions] = useState<Position[]>([]);

  function generatePositions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const newPositions: Position[] = [];
    for (let i = 0; i < count; i++) {
      newPositions.push({
        top: Math.random() * height,
        left: Math.random() * width,
        size: 20 + Math.random() * 60,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }
    setPositions(newPositions);
  }

  useEffect(() => {
    generatePositions();

    let resizeTimeout: number;
    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        generatePositions();
      }, 200);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [count]);

  const src = typeof image === "string" ? image : image.src;

  return (
    <>
      {positions.map((pos, index) => (
        <img
          key={index}
          src={src}
          alt="Background pattern"
          className="pointer-events-none select-none fixed"
          style={{
            top: `${pos.top}px`,
            left: `${pos.left}px`,
            width: `${pos.size}px`,
            height: "auto",
            opacity: pos.opacity,
            zIndex: -1,
            userSelect: "none",
          }}
        />
      ))}
    </>
  );
}
