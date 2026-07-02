import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Aarav",
    title: "amazing",
    product: "Witch Black Baggy Pants",
    body: "I love themmm really comfortable and stylish",
    rating: 5,
  },
  {
    id: 2,
    name: "Riya",
    title: "Worth every penny",
    product: "Pain Grey Baggy Pants",
    body: "cloth is thik apart from it everything is good. i tried to order same typa joggers to get it cheaper but was unsatisfied after ordering those grey ones got to know its value for money",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram",
    title: "Best",
    product: "Berserk Black Tshirt",
    body: "Worlds best clothing brand. Gud quality 100 percent satisfied",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha",
    title: "Amazing quality",
    product: "Dark Grey Basic Baggy Pants",
    body: "Amazing quality Love the feel. Fabric quality is great cotton is super comfy and good for every season also the delivery is very fast",
    rating: 5,
  },
  {
    id: 5,
    name: "Kabir",
    title: "Price worthy",
    product: "Brutal Black Full Sleeves",
    body: "It really stand out among crowd. The pants was awesome and the fabric was also premium and I love them so much",
    rating: 5,
  },
];

export function CustomerReviews() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 text-center">
          <h2 className="font-dancing text-4xl sm:text-5xl">Our happy customers</h2>
          <p className="mt-2 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
            Loved by 300,000+ Happy Customers!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-3 rounded-lg border border-white/10 bg-[#0d0d0d] p-6 transition-colors hover:border-white/20"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "fill-[#dd3333] text-[#dd3333]" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <h3 className="font-bold text-white">"{review.title}"</h3>
              <p className="flex-1 text-[13px] leading-relaxed text-gray-400">
                {review.body}
              </p>
              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm font-bold text-white">{review.name}</span>
                <span className="text-[11px] tracking-wide text-gray-500">
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
