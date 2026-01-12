import React from "react";

const Customers = () => {

  const customers = [
    {
      customer: "Customer1",
      distributor: "JJ Tools",
      country: "Thailand",
      totalSales: 1250000,
    },
    {
      customer: "Customer2",
      distributor: "Halcyon Vietnam",
      country: "Vietnam",
      totalSales: 980000,
    },
    {
      customer: "Customer3",
      distributor: "YN Engineers",
      country: "Japan",
      totalSales: 2150000,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Customers
        </h1>

        <button
          className="
            px-4 py-2 rounded-lg
            bg-[#0B4EA2] text-white font-medium
            hover:bg-blue-700 transition
          "
        >
          + Add Customer
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-left">
              <th className="px-6 py-4 font-semibold ">Customers</th>
              <th className="px-6 py-4 font-semibold">Distributor</th>
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
                className="border-t hover:bg-blue-50/40 transition   "
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {item.customer}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {item.distributor}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {item.country}
                </td>
                <td className="px-6 py-4 text-right font-semibold text-[#0B4EA2]">
                  {item.totalSales.toLocaleString()} ฿
                </td>
              </tr>
            ))}

            {customers.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-gray-400 "
                >
                  No customer data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
