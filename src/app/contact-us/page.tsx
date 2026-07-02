import type { Metadata } from "next";

import { Breadcrumb } from "@/components/shared/breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us - Gengy Summer",
};

export default function ContactUsPage() {
  return (
    <div className="page-load-animate mx-auto max-w-[800px] px-6 py-12">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <h1 className="mb-8 text-3xl font-bold text-white">Contact Us</h1>

      <div className="space-y-8 text-sm leading-relaxed text-gray-300">
        <section>
          <h2 className="mb-4 text-lg font-bold text-white">Get in Touch</h2>
          <p className="mb-4">
            We would love to hear from you. Whether you have a question about
            products, orders, returns, or anything else, our team is ready to
            answer.
          </p>
          <div className="space-y-3">
            <p>
              <span className="font-bold text-white">Email</span>
              <br />
              <a
                href="mailto:support@genzy.store"
                className="text-[#9a1818] hover:underline"
              >
                support@genzy.store
              </a>
            </p>
            <p>
              <span className="font-bold text-white">Response Time</span>
              <br />
              We typically respond within 24-48 hours
            </p>
            <p>
              <span className="font-bold text-white">Address</span>
              <br />
              Trigram Clothing Private Limited
              <br />
              C-3 basement Panchsheel Vihar
              <br />
              New Delhi-110017, India
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-bold text-white">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-gray-400">
                Name <span className="text-[#dd3333]">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border border-white/20 bg-black px-4 py-3 text-sm text-white focus:border-[#9a1818] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-gray-400">
                Email <span className="text-[#dd3333]">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full border border-white/20 bg-black px-4 py-3 text-sm text-white focus:border-[#9a1818] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-gray-400">Subject</label>
              <input
                type="text"
                className="w-full border border-white/20 bg-black px-4 py-3 text-sm text-white focus:border-[#9a1818] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-gray-400">
                Message <span className="text-[#dd3333]">*</span>
              </label>
              <textarea
                required
                rows={5}
                className="w-full resize-none border border-white/20 bg-black px-4 py-3 text-sm text-white focus:border-[#9a1818] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#9a1818] px-8 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#7a1313]"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
