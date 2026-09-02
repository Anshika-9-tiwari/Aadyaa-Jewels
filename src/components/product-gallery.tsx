"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi || !thumbsApi) return;
      emblaApi.scrollTo(index);
      thumbsApi.scrollTo(index);
    },
    [emblaApi, thumbsApi],
  );

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-base-200 bg-base-200" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, i) => (
            <div key={src + i} className="embla__slide aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${name} — view ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-3 overflow-hidden" ref={thumbsRef}>
          <div className="embla__container gap-2">
            {images.map((src, i) => (
              <button
                key={src + i}
                onClick={() => scrollTo(i)}
                className={`embla-thumbs__slide aspect-square overflow-hidden rounded-xl border-2 transition-all ${
                  i === selectedIndex
                    ? "border-primary opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
