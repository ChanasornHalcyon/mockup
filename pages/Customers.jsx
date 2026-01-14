import React, { useState } from "react";
import TableCustomer from "./TableCustomer";

const Customers = () => {
  const [view, setView] = useState("list");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const formatUSD = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  const customers = [
    { customerid: "001", customer: "Customer1", distributor: "FDM", country: "Thailand", type: "Dealer", totalSales: 1250000 },
    { customerid: "002", customer: "Customer2", distributor: "Halcyon Vietnam", country: "Vietnam", type: "Dealer", totalSales: 980000 },
    { customerid: "003", customer: "Customer3", distributor: "YN Engineers", country: "Thailand", type: "Dealer", totalSales: 2150000 },
    { customerid: "007", customer: "Customer4", distributor: "YN Engineers", country: "Thailand", type: "End User", totalSales: 5150000 },
    { customerid: "009", customer: "Customer5", distributor: "Halcyon Vietnam", country: "Vietnam", type: "End User", totalSales: 40000 },
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
                    <th className="px-6 py-4 text-left">Customers Id</th>
                    <th className="px-6 py-4 text-left">Customers Name</th>
                    <th className="px-6 py-4 text-left">Distributor</th>
                    <th className="px-6 py-4 text-left">Country</th>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-right">Total Sales</th>
                  </tr>
                </thead>

                <tbody>
                  {customers.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t hover:bg-blue-50/40"
                    >
                      <td className="px-6 py-4 text-gray-600">
                        {item.customerid}
                      </td>
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
                      <td className="px-6 py-4 text-gray-600">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-[#0B4EA2]">
                        {formatUSD(item.totalSales)}
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
