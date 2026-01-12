import React from "react";

const Products = () => {

    const products = [
        {
            Picture: "/2HCBE.jpg",
            ItemCode: "2HCBE002004S04",
            Category: "Endmill",
            Stocks: 20,
        },
        {
            Picture: "/2HCBE.jpg",
            ItemCode: "2HCBE003006S04",
            Category: "Endmill",
            Stocks: 60,
        },
        {
            Picture: "/2HCBE.jpg",
            ItemCode: "2HCBE004008S04",
            Category: "Endmill",
            Stocks: 55,
        },

        {
            Picture: "/Drill1.webp",
            ItemCode: "2DED0015009S03",
            Category: "Drill",
            Stocks: 100,
        },
        {
            Picture: "/Drill1.webp",
            ItemCode: "2DED0016009S03",
            Category: "Drill",
            Stocks: 20,
        },
        {
            Picture: "/Drill1.webp",
            ItemCode: "2DED0016018S03",
            Category: "Drill",
            Stocks: 99,
        },
        {
            Picture: "/2DINB.webp",
            ItemCode: "2DINB100",
            Category: "Insert",
            Stocks: 77,
        },
        {
            Picture: "/2DINB.webp",
            ItemCode: "2DINB110",
            Category: "Insert",
            Stocks: 135,
        },
        {
            Picture: "/2DINB.webp",
            ItemCode: "2DINB120",
            Category: "Insert",
            Stocks: 200,
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Products
                </h1>

                {/* <button
          className="
            px-4 py-2 rounded-lg
            bg-[#0B4EA2] text-white font-medium
            hover:bg-blue-700 transition
          "
        >
          + Add Customer
        </button> */}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="bg-gray-50 text-gray-600 text-left">
                            <th className="px-6 py-4 font-semibold ">Picture</th>
                            <th className="px-6 py-4 font-semibold">ItemCode</th>
                            <th className="px-6 py-4 font-semibold">Category</th>
                            <th className="px-6 py-4 font-semibold">Stocks</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t hover:bg-blue-50/40 transition   "
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
                                <td className="px-6 py-4 text-gray-600">
                                    {item.Stocks}
                                </td>

                            </tr>
                        ))}

                        {products.length === 0 && (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-6 py-10 text-center text-gray-400 "
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

export default Products;
