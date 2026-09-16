interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}
    >
      {subtitle ? (
        <div
          className={`flex items-center gap-3 ${
            centered ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
          <p className="text-primary text-[0.68rem] font-semibold uppercase tracking-luxe">
            {subtitle}
          </p>
          <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
        </div>
      ) : null}
      <h2 className="font-serif mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-bold leading-tight text-base-content text-balance">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed text-base-content/60 ${
            centered ? "mx-auto" : ""
          } max-w-2xl`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
