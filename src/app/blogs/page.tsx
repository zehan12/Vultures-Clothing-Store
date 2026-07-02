import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Gengy Summer",
};

export default function BlogsPage() {
  const posts = [
    { title: "The Evolution of Indian Streetwear", date: "June 12, 2026", snippet: "How the underground scene became mainstream and what's next for the movement." },
    { title: "How to style Baggy Jeans", date: "May 24, 2026", snippet: "The ultimate guide to pulling off the oversized look without looking sloppy." },
    { title: "Why Biowashed Cotton Matters", date: "April 18, 2026", snippet: "Understanding the fabric behind our premium hoodies and t-shirts." }
  ];

  return (
    <div className="mx-auto max-w-[800px] px-6 py-12 md:py-24">
      <h1 className="mb-4 text-center text-3xl font-bold uppercase tracking-widest text-white md:text-5xl">
        BLOGS
      </h1>
      <p className="mb-12 text-center text-gray-400">
        News, style guides, and updates from the Genrage team.
      </p>

      <div className="space-y-8">
        {posts.map((post, i) => (
          <article key={i} className="border-b border-white/10 pb-8 last:border-0">
            <p className="mb-2 text-sm text-[#9a1818] uppercase tracking-wider">{post.date}</p>
            <h2 className="mb-3 text-2xl font-bold text-white transition-colors hover:text-[#9a1818] cursor-pointer">
              {post.title}
            </h2>
            <p className="mb-4 text-gray-400">{post.snippet}</p>
            <button className="text-[13px] font-bold tracking-wider text-white uppercase underline underline-offset-4 transition-colors hover:text-[#9a1818]">
              Read More
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
