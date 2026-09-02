"use client";

export default function SortSelect({
  category,
  q,
  currentSort,
  options,
}: {
  category: string;
  q: string;
  currentSort: string;
  options: { value: string; label: string }[];
}) {
  function buildHref(sort: string) {
    const sp = new URLSearchParams();
    if (category && category !== "all") sp.set("category", category);
    if (q) sp.set("q", q);
    if (sort && sort !== "newest") sp.set("sort", sort);
    const qs = sp.toString();
    return qs ? `/shop?${qs}` : "/shop";
  }

  return (
    <select
      value={currentSort}
      onChange={(e) => {
        window.location.href = buildHref(e.target.value);
      }}
      className="select select-sm select-bordered rounded-full text-xs uppercase tracking-[0.15em]"
      aria-label="Sort products"
    >
      {options.map((s) => (
        <option key={s.value} value={s.value}>
          {s.label}
        </option>
      ))}
    </select>
  );
}
