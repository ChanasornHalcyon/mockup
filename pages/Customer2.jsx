import React, { useState } from "react";
import ModalAddCustomer from "../components/ModalAddCustomer";

const Customers2 = () => {
  const [openModal, setOpenModal] = useState(false);

  const customers = [
    { customer: "Customer1", country: "Thailand", totalSales: 1250000 },
    { customer: "Customer2", country: "Thailand", totalSales: 980000 },
    { customer: "Customer3", country: "Thailand", totalSales: 2150000 },
    { customer: "Customer4", country: "Thailand", totalSales: 5150000 },
    { customer: "Customer5", country: "Thailand", totalSales: 40000 },
  ];
  const formatUSD = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Customers
        </h1>

        <button
          onClick={() => setOpenModal(true)}
          className="
            px-4 py-2 rounded-lg
            bg-[#0B4EA2] text-white font-medium
            hover:bg-blue-700 transition cursor-pointer
          "
        >
          + Add Customer
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-left">
              <th className="px-6 py-4 font-semibold">Customers</th>
              <th className="px-6 py-4 font-semibold">Country</th>
              <th className="px-6 py-4 font-semibold text-right">
                Total Sales
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item, index) => (
              <tr
                key={index}
                className="border-t hover:bg-blue-50/40 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {item.customer}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {item.country}
                </td>
                <td className="px-6 py-4 text-right font-semibold text-[#0B4EA2]">
                  {formatUSD(item.totalSales)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {openModal && (
        <ModalAddCustomer onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default Customers2;
