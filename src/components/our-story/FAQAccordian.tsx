"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What makes lab-grown diamonds different from mined diamonds?",
    a: "Lab-grown diamonds are chemically, physically and optically identical to mined diamonds — both are 100% real diamond. The difference is origin: ours are created in controlled laboratory environments using advanced technology (such as solar-powered CVD), while mined diamonds are extracted from the earth. That means the same brilliance with a far lighter environmental footprint and no ethical concerns.",
  },
  {
    q: "Can you tell the difference between lab-grown and natural diamonds?",
    a: "Not to the naked eye, and not with standard jewellery tools. A lab-grown diamond looks, feels and performs exactly like a natural one. Only specialised laboratory equipment can reliably distinguish the two — which is why every Aadyaa diamond ships with an independent certificate.",
  },
  {
    q: "Are lab-grown diamonds certified?",
    a: "Yes. Every diamond we set is independently graded and certified by recognised laboratories such as GIA, IGI and HRD. Your certificate confirms the 4Cs and clearly notes that the stone is lab-grown, so you always know exactly what you own.",
  },
  {
    q: "Do lab-grown diamonds hold their value?",
    a: "Lab-grown diamonds are durable, timeless pieces that retain their beauty for a lifetime. While their resale market is still maturing, values have been appreciating as technology improves and acceptance grows. We're happy to discuss the long-term value of any piece with you.",
  },
  {
    q: "Are lab-grown diamonds real diamonds?",
    a: "Absolutely. A lab-grown diamond is a real diamond — the same carbon crystal structure, the same hardness, fire and brilliance as a mined stone. The only difference is how and where it was formed.",
  },
  {
    q: "How do I care for my lab-grown diamond jewellery?",
    a: "Keep it clean and protected. Soak in warm water with a mild detergent, gently brush with a soft toothbrush, and rinse. Store pieces separately to avoid scratches, avoid harsh chemicals, and bring them in for a professional check-up once a year. Our care & repair team is always here to help.",
  },
  {
    q: "Do lab-grown diamonds fade or lose sparkle over time?",
    a: "No. Lab-grown diamonds do not fade, change colour or lose their sparkle. With basic care, your diamond will retain its brilliance for generations.",
  },
  {
    q: "How does buying lab-grown jewellery help the environment?",
    a: "Creating a lab-grown diamond uses a fraction of the energy and land of mining, with no open-pit disruption, no water contamination and no conflict. Choosing Aadyaa means owning a beautiful, conflict-free diamond while supporting a more sustainable future.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-colors duration-300 ${
              isOpen
                ? "border-accent/70 bg-base-100 shadow-md"
                : "border-base-300 bg-base-100/70 hover:border-accent/40"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-base-content text-sm sm:text-base">
                {f.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-base-content/60 leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
