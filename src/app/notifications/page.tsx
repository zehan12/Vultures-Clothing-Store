import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications - Vultures",
};

export default function NotificationsPage() {
  return (
    <div className="page-load-animate mx-auto max-w-[800px] px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold text-white">Notifications</h1>
      <div className="rounded-xl border border-white/10 bg-[#111] p-8 text-center">
        <p className="text-gray-400">
          You don't have any notifications right now.
        </p>
      </div>
    </div>
  );
}
