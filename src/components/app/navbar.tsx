import { useState } from "react";
import { Search, Bell, Lightbulb, User } from "lucide-react";
import UserMenu from "../Homepage/Usermenu";


type NavbarProps = {
  setText: (value: string) => void;
};

type LangType = {
  code: string;
  label: string;
  lang: string;
  currency: string;
  flag: string;
};

export default function Navbar({ setText }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("english");

  const languages: LangType[] = [
    { code: "english", label: "English", lang: "en", currency: "$", flag: "gb" },
    { code: "french", label: "Française", lang: "fr", currency: "€,", flag: "fr" },
    { code: "bangla", label: "বাংলা", lang: "bn", currency: "৳", flag: "bd" },
    { code: "chinese", label: "官话", lang: "zh", currency: "¥", flag: "cn" },
    { code: "hindi", label: "हिन्दी", lang: "hi", currency: "₹", flag: "in" },
    { code: "arabic", label: "Arabic", lang: "ar", currency: "﷼", flag: "sa" },
  ];

  const activeLang = languages.find((l) => l.code === selected)!;

  async function changeLanguage(langData: LangType) {
    setSelected(langData.code);
    setOpen(false);

    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=Welcome to our website!&langpair=en|${langData.lang}`
      );
      const json = await res.json();
      setText(json.responseData.translatedText);
    } catch (err) {
      console.error("Translation error:", err);
    }
  }

  return (
   <header className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-border bg-background">
  {/* 🔍 SEARCH BAR */}
  <div className="w-full sm:w-1/3">
    <div className="relative w-full">
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none text-sm"
      />
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-4 sm:gap-6">
    <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
    <Lightbulb className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />

    {/* 🌍 LANGUAGE */}
    <div className="relative">
      <img
        src={`https://flagcdn.com/w40/${activeLang.flag}.png`}
        onClick={() => setOpen(!open)}
        className="w-7 h-5 rounded shadow cursor-pointer"
      />

      {open && (
        <div className="absolute right-0 mt-3 w-44 sm:w-48 bg-popover text-popover-foreground border border-border rounded-xl py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm hover:bg-muted"
            >
              <div className="flex items-center gap-2">
                <img
                  src={`https://flagcdn.com/w40/${lang.flag}.png`}
                  className="w-6 h-4 rounded"
                />
                <span>{lang.label}</span>
              </div>
              <span className="font-semibold text-muted-foreground">
                {lang.currency}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>

    <UserMenu />
  </div>
</header>

  );
}
