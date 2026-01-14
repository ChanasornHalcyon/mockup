import React from "react";

const TableCustomer = ({ customer, onBack }) => {
    if (!customer) return null;

    // mock product ของ customer (ภายหลังเปลี่ยนเป็น API filter ตาม customer ได้)
    const products = [
        {
            Picture: "/2HCBE.jpg",
            ItemCode: "2HCBE002004S04",
            Category: "Endmill",
            Stocks: 20,
        },
        {
            Picture: "/Drill1.webp",
            ItemCode: "2DED0015009S03",
            Category: "Drill",
            Stocks: 100,
        },
        {
            Picture: "/2DINB.webp",
            ItemCode: "2DINB100",
            Category: "Insert",
            Stocks: 77,
        },
    ];

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                        Products of {customer.customer}
                    </h2>
                    <p className="text-sm text-gray-500">
                        Distributor: {customer.distributor} · {customer.country}
                    </p>
                </div>

                <button
                    onClick={onBack}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                >
                    ← Back
                </button>
            </div>

            ฃ
            <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="bg-gray-50 text-gray-600 text-left">
                            <th className="px-6 py-4 font-semibold">Picture</th>
                            <th className="px-6 py-4 font-semibold">ItemCode</th>
                            <th className="px-6 py-4 font-semibold">Category</th>
                            <th className="px-6 py-4 font-semibold text-right">
                                Total Sales
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t hover:bg-blue-50/40 transition"
                            >
                                <td className="px-6 py-4">
                                    <img
                                        src={item.Picture}
                                        alt={item.ItemCode}
                                        className="h-12 w-12 rounded-lg object-cover border"
                                    />
                                </td>

                                <td className="px-6 py-4 font-medium text-gray-800">
                                    {item.ItemCode}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {item.Category}
                                </td>

                                <td className="px-6 py-4 text-right font-semibold text-[#0B4EA2]">
                                    {item.Stocks}
                                </td>
                            </tr>
                        ))}

                        {products.length === 0 && (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-6 py-10 text-center text-gray-400"
                                >
                                    No product data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableCustomer;
