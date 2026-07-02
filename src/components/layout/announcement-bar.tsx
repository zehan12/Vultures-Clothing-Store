"use client";

import Marquee from "react-fast-marquee";

const announcements = [
  "FREE DOORSTEP DELIVERY IN INDIA 🇮🇳",
  "LOVED BY 300,000+ HAPPY CUSTOMERS! ⭐",
  "LIMITED TIME OFFER, SHOP NOW! 🎫",
  "PAYDAY SAVING'S | UPTO 60% OFF - ONLY TODAY",
];

export function AnnouncementBar() {
  return (
    <div className="flex bg-[#dd3333] py-2 text-[11px] font-bold tracking-widest text-white uppercase sm:text-xs">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {announcements.map((text, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-8">{text}</span>
            <span className="mx-4 text-white/50">•</span>
          </div>
        ))}
        {announcements.map((text, i) => (
          <div key={`dup-${i}`} className="flex items-center">
            <span className="mx-8">{text}</span>
            <span className="mx-4 text-white/50">•</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
