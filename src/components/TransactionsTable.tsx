import { mockTransactions } from "../mockData";
import { CgArrowsVAlt } from "react-icons/cg";

const columns = [
  "Счет. дата",
  "Вальор",
  "Референция",
  "Плащания",
  "Постъпления",
  "Документ",
  "Кореспондент",
  "Вид плащане",
  "ION",
  "Име на задължено лице",
  "Oснование на плащане",
  "Още пояснения",
  "Още",
];

export const TransactionsTable = ({ transactions = mockTransactions }) => {
  return (
    <div class="mt-10 overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="border-b border-b-gray-200 bg-white shadow-xl ">
          {columns.map((column, index) => (
            <th
              key={index}
              class="px-8 py-1 text-left font-medium text-[#527da6]"
              scope="col"
            >
              <div class="flex items-center gap-1">
                {column} {index < 5 && <CgArrowsVAlt />}
              </div>
            </th>
          ))}
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              class={`py-5 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <td class="whitespace-nowrap px-8 py-7">{transaction.date}</td>
              <td class="whitespace-nowrap px-8 py-7">{transaction.valor}</td>
              <td class="whitespace-nowrap px-8 py-7">
                {transaction.reference}
              </td>
              <td class="whitespace-nowrap bg-[#fef2f2] px-8 py-7 text-right font-extrabold text-red-500">
                -
                {Math.abs(transaction.payment).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </td>
              <td class="whitespace-nowrap bg-[#f2faf6] px-8 py-7 text-right font-extrabold text-green-500">
                +
                {Math.abs(transaction.receipt).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </td>
              <td class="whitespace-nowrap px-8 py-7 text-[#527da6] underline ">
                <span class="cursor-pointer">{transaction.document}</span>
              </td>
              <td class="whitespace-nowrap px-8 py-7">
                {transaction.correspondent}
              </td>
              <td class="whitespace-nowrap px-8 py-7">
                {transaction.paymentType}
              </td>
              <td class="whitespace-nowrap px-8 py-7">{transaction.ion}</td>
              <td class="whitespace-nowrap px-8 py-7">
                {transaction.debtorName}
              </td>
              <td class="whitespace-nowrap px-8 py-7">
                {transaction.paymentReason}
              </td>
              <td class="whitespace-nowrap px-8 py-7">
                {transaction.additionalExplanations}
              </td>
              <td class="whitespace-nowrap px-8 py-7">{transaction.more}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
