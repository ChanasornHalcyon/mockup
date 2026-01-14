import React, { useState } from "react";
import TableCustomer from "./TableCustomer";

const Customers = () => {
  const [view, setView] = useState("list"); 
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = [
    { customer: "Customer1", distributor: "FDM", country: "Thailand", totalSales: 1250000 },
    { customer: "Customer2", distributor: "Halcyon Vietnam", country: "Vietnam", totalSales: 980000 },
    { customer: "Customer3", distributor: "YN Engineers", country: "Thailand", totalSales: 2150000 },
    { customer: "Customer4", distributor: "YN Engineers", country: "Thailand", totalSales: 5150000 },
    { customer: "Customer5", distributor: "Halcyon Vietnam", country: "Vietnam", totalSales: 40000 },
  ];

  const handleClickCustomer = (item) => {
    setSelectedCustomer(item);
    setView("detail");
  };

  const renderContent = () => {
    switch (view) {
      case "detail":
        return (
          <TableCustomer
            customer={selectedCustomer}
            onBack={() => setView("list")}
          />
        );

      default:
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                Customers
              </h1>
            </div>

            <div className="bg-white rounded-2xl border shadow overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-6 py-4 text-left">Customers</th>
                    <th className="px-6 py-4 text-left">Distributor</th>
                    <th className="px-6 py-4 text-left">Country</th>
                    <th className="px-6 py-4 text-right">Total Sales</th>
                  </tr>
                </thead>

                <tbody>
                  {customers.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t hover:bg-blue-50/40"
                    >
                      <td
                        onClick={() => handleClickCustomer(item)}
                        className="px-6 py-4 font-medium text-[#0B4EA2] cursor-pointer hover:underline"
                      >
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
                </tbody>
              </table>
            </div>
          </div>
        );
    }
  };

  return <>{renderContent()}</>;
};

export default Customers;
