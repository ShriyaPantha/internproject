// flag.tsx
import { useEffect, useState } from "react";

export default function Flag({ country }: { country: string }) {
  const [flagUrl, setFlagUrl] = useState("");

  useEffect(() => {
    async function loadFlag() {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const data = await res.json();
      setFlagUrl(data[0].flags.svg);
    }
    loadFlag();
  }, [country]);

  return (
    <img
      src={flagUrl}
      className="w-7 h-5 rounded-sm shadow cursor-pointer object-cover"
    />
  );
}
