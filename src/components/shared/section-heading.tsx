export function SectionHeading({
  title,
  as = "h2",
}: {
  title: string;
  as?: "h1" | "h2";
}) {
  const Tag = as;

  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 h-[2px] w-16 bg-[#9a1818]" />
      <Tag className="text-xl font-bold tracking-wider text-white uppercase md:text-2xl">
        {title}
      </Tag>
    </div>
  );
}
