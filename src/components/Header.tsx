import { FC } from "preact/compat";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

import LanguageSwitcher from "./LanguageSwitcher";

const Header: FC<{ isNavOpen: boolean; toggleNav: () => void }> = ({
  toggleNav,
}) => (
  <header class="flex flex-wrap items-center justify-between border border-b-gray-200 px-2 py-4 md:px-5 md:py-6">
    <div class="flex flex-1 items-center md:gap-10">
      <button class="p-4 md:hidden" onClick={toggleNav}>
        <FaBars size={24} />
      </button>
      <div class="lg:px-6">
        <img
          class="max-h-8 w-auto"
          src="https://www.municipalbank.bg/img/logo.png"
          alt="Общинска Банка"
        />
      </div>
      <div class="hidden items-center gap-4 md:flex">
        <img
          class="h-6 w-auto rounded-full md:h-8"
          src="https://cdn.openart.ai/stable_diffusion/0f26305f30636c01ed2b3ab7ed4117079f7b0796_2000x2000.webp"
          alt="profile pic"
        />
        <span class="hidden text-xs md:block lg:text-base ">
          Иван Иванов Иванов
        </span>
      </div>
    </div>
    <div class="flex items-center gap-4 md:gap-8">
      <a
        href="google.com"
        class="hidden font-extralight text-[#2b6ba4] underline hover:opacity-80 md:inline"
      >
        Обратна връзка
      </a>
      <a href="tel:089120120" class="flex items-center gap-2 hover:opacity-80">
        <FiPhone color="#2b6ba4" size={20} />
        <span class="hidden font-extrabold text-[#194f7ff5] md:block">
          089 120 120
        </span>
      </a>
      <a href="mailto:ivan@example.com" class="hover:opacity-80">
        <div class="hidden md:block">
          <FiMail color="#2b6ba4" size={24} />
        </div>
        <div class="md:hidden">
          <FiMail color="#2b6ba4" size={20} />
        </div>
      </a>
      <LanguageSwitcher />
    </div>
  </header>
);

export default Header;
