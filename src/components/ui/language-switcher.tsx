"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Language } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group flex items-center">
      <button 
        className="flex items-center gap-1.5 text-[11px] xl:text-[13px] font-bold tracking-wider text-white uppercase transition-colors hover:text-[#9a1818]"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span>{language.toUpperCase()}</span>
      </button>
      
      <div className="absolute top-full right-0 z-50 hidden min-w-[120px] flex-col border border-white/10 bg-black py-2 group-hover:flex">
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 text-left text-[13px] font-bold tracking-wider uppercase transition-colors hover:bg-white/5 ${
            language === "en" ? "text-[#9a1818]" : "text-white"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("hi")}
          className={`px-4 py-2 text-left text-[13px] font-bold tracking-wider uppercase transition-colors hover:bg-white/5 ${
            language === "hi" ? "text-[#9a1818]" : "text-white"
          }`}
        >
          Hindi (हिंदी)
        </button>
        <button
          onClick={() => setLanguage("fr")}
          className={`px-4 py-2 text-left text-[13px] font-bold tracking-wider uppercase transition-colors hover:bg-white/5 ${
            language === "fr" ? "text-[#9a1818]" : "text-white"
          }`}
        >
          French (Fr)
        </button>
        <button
          onClick={() => setLanguage("es")}
          className={`px-4 py-2 text-left text-[13px] font-bold tracking-wider uppercase transition-colors hover:bg-white/5 ${
            language === "es" ? "text-[#9a1818]" : "text-white"
          }`}
        >
          Spanish (Es)
        </button>
      </div>
    </div>
  );
}
