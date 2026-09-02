"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  children: ReactNode[];
  slideClass?: string;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  showArrows?: boolean;
  showDots?: boolean;
  arrowsDark?: boolean;
  className?: string;
};

export default function Carousel({
  children,
  slideClass = "embla__slide",
  loop = true,
  autoplay = false,
  autoplayDelay = 4500,
  showArrows = false,
  showDots = false,
  arrowsDark = false,
  className = "",
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align: "start" },
    autoplay
      ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })]
      : [],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const arrowBtn = `btn btn-circle btn-sm absolute top-1/2 z-10 -translate-y-1/2 border-0 shadow-lg backdrop-blur ${
    arrowsDark
      ? "bg-base-100/90 text-base-content hover:bg-base-100"
      : "bg-base-100/80 text-base-content hover:bg-base-100"
  }`;

  return (
    <div className={`relative ${className}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {children.map((child, i) => (
            <div key={i} className={slideClass}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && children.length > 1 && (
        <>
          <button onClick={scrollPrev} aria-label="Previous slide" className={`${arrowBtn} left-2`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={scrollNext} aria-label="Next slide" className={`${arrowBtn} right-2`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showDots && scrollSnaps.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-8 bg-primary" : "w-1.5 bg-base-300 hover:bg-base-content/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
