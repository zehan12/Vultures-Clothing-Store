import { Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews - Vultures",
};

export default function ReviewsPage() {
  const reviews = [
    { name: "Rahul S.", rating: 5, text: "The baggy fit is exactly what I was looking for. Quality is insane for the price." },
    { name: "Ananya M.", rating: 5, text: "Bought the oversized hoodie. It's so thick and comfortable. 10/10." },
    { name: "Kabir", rating: 4, text: "Good quality cotton. Print hasn't faded after 5 washes. Highly recommend." },
    { name: "Priya T.", rating: 5, text: "Love the aesthetic and the fit is perfect. Will be buying again." },
    { name: "Vikram R.", rating: 5, text: "Best streetwear brand in India right now. The fabric is super premium." },
    { name: "Sneha", rating: 5, text: "Delivery was fast and the packaging was great. The jeans fit perfectly." }
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold uppercase tracking-widest text-white md:text-5xl">
          VULTURES REVIEWS
        </h1>
        <div className="flex items-center justify-center gap-2 text-yellow-500">
          <Star className="h-6 w-6 fill-current" />
          <Star className="h-6 w-6 fill-current" />
          <Star className="h-6 w-6 fill-current" />
          <Star className="h-6 w-6 fill-current" />
          <Star className="h-6 w-6 fill-current" />
          <span className="ml-2 text-white">4.9/5 based on 10k+ reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <div key={i} className="border border-white/10 bg-[#0a0a0a] p-6">
            <div className="mb-4 flex gap-1 text-yellow-500">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mb-4 text-gray-300">"{review.text}"</p>
            <p className="text-sm font-bold text-gray-500">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
