export function SuperSaleBanner() {
  return (
    <section className="my-12 rounded-2xl bg-[#fd6f5e] p-8 text-center md:p-12">
      <h2
        className="mb-2 text-4xl font-bold text-white md:text-5xl"
        style={{ fontFamily: "var(--font-dancing)" }}
      >
        Super sale
      </h2>
      <p className="text-lg font-bold text-white/90 md:text-xl">
        Festive - Sale up to 50% – 70%
      </p>
    </section>
  );
}
