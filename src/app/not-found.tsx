import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <p className="font-serif text-8xl font-semibold gold-gradient-text">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold">This piece seems to have vanished</h1>
      <p className="mt-3 text-sm text-base-content/60">
        The page you&apos;re looking for doesn&apos;t exist — but our collection of lab-grown diamonds certainly does.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/shop" className="btn btn-primary rounded-full px-8 text-xs uppercase tracking-[0.25em]">
          Shop the Collection
        </Link>
        <Link href="/" className="btn btn-outline rounded-full px-8 text-xs uppercase tracking-[0.25em]">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
