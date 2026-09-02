interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}: Props) {
  const alignCls = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col ${alignCls[align]} max-w-3xl mx-auto`}>
      {subtitle && (
        <p className="text-gold-600 text-sm font-semibold uppercase tracking-[0.15em] mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 text-base md:text-lg mt-4 max-w-2xl">
          {description}
        </p>
      )}
      <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-rose-400 mt-6 rounded-full" />
    </div>                    
  );
}