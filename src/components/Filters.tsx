import { useState } from "preact/hooks";
import { IoFunnelOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const inputs = ["Сметка", "Вид", "От дата", "До дата", "От сума", "До сума"];

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div class="mt-5 w-full shadow-md">
      <div class="rounded-lg bg-white shadow-sm">
        <div
          class="flex cursor-pointer items-center justify-between px-8 py-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span class="flex items-center space-x-2 text-lg font-semibold text-[#005da4]">
            <IoFunnelOutline size={22} color="#005da4" />
            <span>Филтри</span>
          </span>
          <div
            class={`h-6 w-6 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <FaAngleDown size={25} />
          </div>
        </div>
        {isOpen && (
          <div class="max-w-7xl rounded-b-lg bg-white p-7 pb-3">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              {inputs.map((input) => (
                <div key={input} class="relative my-1">
                  <label class="text-md absolute -top-[17px] left-4 z-20 mb-2 block bg-white p-1 font-extralight text-gray-500">
                    {input}
                  </label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 p-3 font-extralight tracking-widest"
                    placeholder="Въведете потребител"
                  />
                </div>
              ))}
            </div>
            <div class="my-4 flex gap-10">
              <div class="flex items-center">
                <input id="checkbox1" type="checkbox" class="h-5 w-5" checked />
                <label
                  for="checkbox1"
                  class="ml-2 block text-xs font-extralight tracking-widest text-gray-900 md:text-lg"
                >
                  Покажи всички
                </label>
              </div>
              <div class="flex items-center">
                <input id="checkbox2" type="checkbox" class="h-5 w-5" />
                <label
                  for="checkbox2"
                  class="ml-2 block text-xs font-extralight tracking-widest text-gray-900 md:text-lg"
                >
                  Детайли за бюджет
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
