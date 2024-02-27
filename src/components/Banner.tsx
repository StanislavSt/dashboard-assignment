import { IconType } from "react-icons";
import { LiaMoneyBillAltSolid } from "react-icons/lia";

interface TotalExpensesProps {
  amount: number;
  title: string;
  isCurrency?: boolean;
  icon?: IconType;
  iconBgColor?: string;
}

export const Banner = ({
  amount,
  title,
  isCurrency = true,
  icon: IconComponent = LiaMoneyBillAltSolid,
  iconBgColor = "bg-[#005da4]",
}: TotalExpensesProps) => {
  const formattedAmount = isCurrency
    ? `${amount < 0 ? "-" : "+"}${Math.abs(amount).toLocaleString("en-US", { minimumFractionDigits: 2 })} BGN`
    : amount;

  const amountClass = `text-2xl font-extrabold  ${isCurrency ? (amount < 0 ? "text-red-500" : "text-green-500") : "text-[#145b9a]"}`;

  return (
    <div class="rounded-lg bg-white p-6 shadow-md">
      <div class="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-4">
        <div class="flex items-center justify-center">
          <div class={`rounded-ee-md rounded-ss-md p-2 ${iconBgColor}`}>
            <IconComponent size={25} color="white" />
          </div>
        </div>
        <div class="text-lg font-extrabold text-[#0d5697]">{title}</div>
        <div class={`col-start-2 row-start-2 ${amountClass}`}>
          {formattedAmount}
        </div>
      </div>
    </div>
  );
};
