import { IconType } from "react-icons";
import { FiHome, FiMessageCircle } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";
import { AiOutlinePieChart, AiOutlineMessage } from "react-icons/ai";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { TbShieldDollar } from "react-icons/tb";
import { GoCreditCard, GoArrowSwitch } from "react-icons/go";
import {
  IoWaterOutline,
  IoCardOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineInsertChart } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { BiNews } from "react-icons/bi";

interface NavItem {
  title: string;
  icon: IconType;
  subItems?: NavItem[];
}

export const navigationItems: NavItem[] = [
  { title: "Начало", icon: FiHome },
  { title: "Сметки", icon: TfiReceipt },
  {
    title: "Спестявания",
    icon: AiOutlinePieChart,
    subItems: [
      { title: "Депозитни сметки", icon: TbShieldDollar },
      { title: "Спестовни сметки", icon: LiaPiggyBankSolid },
      { title: "Открий депозит", icon: GoCreditCard },
    ],
  },
  {
    title: "Преводи",
    icon: GoArrowSwitch,
    subItems: [
      { title: "Преводи 1", icon: GoArrowSwitch },
      { title: "Преводи 2", icon: GoArrowSwitch },
      { title: "Преводи 3", icon: GoArrowSwitch },
      { title: "Преводи 4", icon: GoArrowSwitch },
      { title: "Преводи 5", icon: GoArrowSwitch },
      { title: "Преводи 6", icon: GoArrowSwitch },
      { title: "Преводи 7", icon: GoArrowSwitch },
    ],
  },
  {
    title: "Битови Сметки",
    icon: IoWaterOutline,
    subItems: [
      { title: "Битови Сметки 1", icon: IoWaterOutline },
      { title: "Битови Сметки 2", icon: IoWaterOutline },
      { title: "Битови Сметки 3", icon: IoWaterOutline },
    ],
  },
  {
    title: "Карти",
    icon: IoCardOutline,
    subItems: [
      { title: "Карти 1", icon: IoCardOutline },
      { title: "Карти 2", icon: IoCardOutline },
      { title: "Карти 3", icon: IoCardOutline },
    ],
  },
  {
    title: "Кредити",
    icon: MdOutlineInsertChart,
    subItems: [
      { title: "Кредити 1", icon: MdOutlineInsertChart },
      { title: "Кредити 2", icon: MdOutlineInsertChart },
    ],
  },
  {
    title: "Ценни Книжа",
    icon: GrDocumentText,
    subItems: [
      { title: "Ценни Книжа 1", icon: GrDocumentText },
      { title: "Ценни Книжа 2", icon: GrDocumentText },
    ],
  },
  {
    title: "Заявки",
    icon: AiOutlineMessage,
    subItems: [
      { title: "Заявки 1", icon: AiOutlineMessage },
      { title: "Заявки 2", icon: AiOutlineMessage },
      { title: "Заявки 3", icon: AiOutlineMessage },
      { title: "Заявки 4", icon: AiOutlineMessage },
    ],
  },
  {
    title: "Справки",
    icon: MdOutlineInsertChart,
    subItems: [
      { title: "Справки 1", icon: MdOutlineInsertChart },
      { title: "Справки 2", icon: MdOutlineInsertChart },
      { title: "Справки 3", icon: MdOutlineInsertChart },
      { title: "Справки 4", icon: MdOutlineInsertChart },
    ],
  },
  {
    title: "Настройки",
    icon: IoSettingsOutline,
    subItems: [
      { title: "Настройки 1", icon: IoSettingsOutline },
      { title: "Настройки 2", icon: IoSettingsOutline },
      { title: "Настройки 3", icon: IoSettingsOutline },
    ],
  },
  {
    title: "Съобщения",
    icon: FiMessageCircle,
    subItems: [
      { title: "Съобщения 1", icon: FiMessageCircle },
      { title: "Съобщения 2", icon: FiMessageCircle },
    ],
  },
  {
    title: "Новини",
    icon: BiNews,
    subItems: [
      { title: "Новини 1", icon: BiNews },
      { title: "Новини 2", icon: BiNews },
      { title: "Новини 3", icon: BiNews },
      { title: "Новини 4", icon: BiNews },
      { title: "Новини 5", icon: BiNews },
      { title: "Новини 6", icon: BiNews },
    ],
  },
];
