import { useState } from "preact/hooks";
import { FaAngleDown } from "react-icons/fa";

interface Language {
  code: string;
  flagPath: string;
}

const languages: Language[] = [
  { code: "БГ", flagPath: "/country_flags/BG.svg" },
  { code: "EN", flagPath: "/country_flags/US.svg" },
  { code: "DE", flagPath: "/country_flags/DE.svg" },
  { code: "FR", flagPath: "/country_flags/FR.svg" },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0],
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div class="relative">
      <button
        class="flex min-w-[90px] items-center transition duration-300 ease-in-out"
        onClick={toggleDropdown}
      >
        <img
          src={selectedLanguage.flagPath}
          alt={`${selectedLanguage.code} flag`}
          class="mr-2 hidden h-8 w-8 md:block"
        />
        <img
          src={selectedLanguage.flagPath}
          alt={`${selectedLanguage.code} flag`}
          class="mr-2 h-6 w-6 md:hidden"
        />
        <span class="font-bold">{selectedLanguage.code}</span>
        <div
          class={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <FaAngleDown size={20} />
        </div>
      </button>
      <div
        class={`absolute mt-1 max-h-60 w-full overflow-auto bg-white shadow-md transition-all duration-300 ease-in-out ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        {languages.map((language) => (
          <div
            key={language.code}
            class="flex cursor-pointer items-center p-2 hover:bg-gray-100"
            onClick={() => selectLanguage(language)}
          >
            <img
              src={language.flagPath}
              alt={`${language.code} flag`}
              class="mr-2 h-5 w-5"
            />
            <span class="font-bold">{language.code}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
