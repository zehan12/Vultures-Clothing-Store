import type { ContentPage } from "@/data/content";
import { Breadcrumb } from "@/components/shared/breadcrumb";

export function ContentPageView({ page }: { page: ContentPage }) {
  return (
    <div className="page-load-animate mx-auto max-w-[800px] px-6 py-12">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: page.breadcrumb }]}
      />
      <h1 className="mb-8 text-3xl font-bold text-white">{page.title}</h1>
      <div className="space-y-6 text-sm leading-relaxed text-gray-300">
        {page.sections.map((section, index) => {
          switch (section.type) {
            case "heading":
              return (
                <h2
                  key={index}
                  className="mt-6 text-lg font-bold text-white"
                >
                  {section.text}
                </h2>
              );
            case "list":
              return (
                <ul key={index} className="list-inside list-disc space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            case "html":
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              );
            default:
              return (
                <p
                  key={index}
                  className={
                    section.bold ? "text-base font-bold text-white" : undefined
                  }
                >
                  {section.text}
                </p>
              );
          }
        })}
      </div>
    </div>
  );
}
