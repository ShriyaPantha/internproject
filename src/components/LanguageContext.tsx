import { createContext, useContext, useState } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  translatedText: string
  setTranslatedText: (text: string) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("en")
  const [translatedText, setTranslatedText] = useState("Welcome to our website!")

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translatedText, setTranslatedText }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider")
  return context
}
