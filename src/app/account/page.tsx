import type { Metadata } from "next";

import { Breadcrumb } from "@/components/shared/breadcrumb";

export const metadata: Metadata = {
  title: "Login - Gengy Summer",
};

export default function AccountPage() {
  return (
    <div className="page-load-animate mx-auto max-w-[1200px] px-6 py-8">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "My Account" }]}
      />
      <div className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">Login</h1>
        <div className="rounded-xl border border-white/10 bg-[#111] p-6 md:p-8">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Username or email address{" "}
                <span className="text-[#dd3333]">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-white/20 bg-black px-4 py-3 text-sm text-white transition-colors focus:border-[#9a1818] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Password <span className="text-[#dd3333]">*</span>
              </label>
              <input
                type="password"
                required
                className="w-full rounded-xl border border-white/20 bg-black px-4 py-3 text-sm text-white transition-colors focus:border-[#9a1818] focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 accent-[#9a1818]"
              />
              <label htmlFor="remember" className="text-sm text-gray-400">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-[#9a1818] py-3 text-sm font-bold text-white transition-colors hover:bg-[#7a1313]"
            >
              Log in
            </button>
            <div className="text-center">
              <button
                type="button"
                className="text-sm text-[#9a1818] hover:underline"
              >
                Lost your password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
