"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/zendesk-1.png", alt: "Zendesk AI-assisted onboarding — step 1" },
  { src: "/zendesk-2.png", alt: "Zendesk AI-assisted onboarding — step 2" },
  { src: "/zendesk-3.png", alt: "Zendesk AI-assisted onboarding — step 3" },
  { src: "/zendesk-4.png", alt: "Zendesk AI-assisted onboarding — step 4" },
  { src: "/zendesk-5.png", alt: "Zendesk AI-assisted onboarding — step 5" },
  { src: "/zendesk-6.png", alt: "Zendesk AI-assisted onboarding — step 6" },
];

const green = "#4a7c59";

export default function ZendeskCarousel() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 4000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <div className="mt-4 md:mt-0 w-full md:w-80 shrink-0">
      <div
        className="relative w-full rounded-xl overflow-hidden border border-gray-200"
        style={{ aspectRatio: "1200 / 968" }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1.5 mt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{ backgroundColor: i === current ? green : "#d1d5db" }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
