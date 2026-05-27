"use client";
import dynamic from "next/dynamic";

const ZendeskCarousel = dynamic(() => import("./ZendeskCarousel"), { ssr: false });

export default function CarouselLoader() {
  return <ZendeskCarousel />;
}
