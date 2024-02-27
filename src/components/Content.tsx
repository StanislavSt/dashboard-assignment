import { Banner } from "./Banner";
import { TransactionsTable } from "./TransactionsTable";
import Filters from "./Filters";
import { VscArrowSwap } from "react-icons/vsc";

const Content = () => {
  return (
    <div class="flex-grow overflow-auto bg-[#f6faff] p-5 md:p-10">
      <span class="text-sm font-extralight text-[#2b6ba4]">Справки</span>
      <span class="font-extralight text-[#194f7ff5]"> {" > "}</span>
      <span class="text-sm font-extrabold text-[#194f7ff5]">
        Движения по сметка
      </span>
      <div class="mt-2">
        <span class="text-3xl font-extrabold text-[#194f7ff5]">
          Движения по сметка
        </span>
      </div>
      <div class="px-0 md:px-2">
        <Filters />
        <div class="mt-7 grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Banner amount={-5000} title="Общо разходи" />
          <Banner
            amount={5000}
            iconBgColor="bg-[#0087fd]"
            title="Общо приходи"
          />
          <Banner
            amount={23}
            isCurrency={false}
            icon={VscArrowSwap}
            iconBgColor="bg-[#00b6e8]"
            title="Общо транзакции"
          />
        </div>
        <div></div>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Content;
