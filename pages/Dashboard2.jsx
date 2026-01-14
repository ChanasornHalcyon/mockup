import React from "react";
import { ShoppingBag, DollarSign, Users, TrendingUp } from "lucide-react";
import MockUpDonutChart from "../components/MockUpDonutChart";
import MockUpLineChart2 from "../components/MockUpLineChart2";
const StatCard = ({ title, value, change, icon: Icon }) => (
   <div className="rounded-2xl p-6 flex justify-between items-center bg-white border shadow">
  <div>
    <p className="text-lg text-gray-500">{title}</p>

    <div className="flex items-center gap-3 mt-3">
      <span className="text-lg font-medium text-gray-700">
        {value}
      </span>

      <span className="text-gray-400">|</span>

      <span className="text-lg font-medium text-gray-700">
        {formatTHB(6953004.12)}
      </span>
    </div>
  </div>
</div>

);

const formatTHB = (value) =>
    new Intl.NumberFormat("th-TH", {
        style: "currency",
        currency: "THB",
    }).format(value);
const Dashboard2 = () => {

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {/* <StatCard
                    title="This Month Sales"
                    value="21,324"
                    change="+2,031"
                    icon={ShoppingBag}
                /> */}
                <StatCard
                    title="This Month Buying"
                    value="$221,324.50"
                    change={formatTHB(6953004.12)}
                    icon={DollarSign}
                />
                {/* <StatCard
                    title="Total Sessions"
                    value="16,703"
                    change="+3,392"
                    icon={Users}
                />
                <StatCard
                    title="Conversion Rate"
                    value="12.8%"
                    change="-1.22%"
                    icon={TrendingUp}
                /> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-2xl border shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-800">
                            Top 3 Category
                        </h3>

                    </div>

                    <div className="h-56 flex items-center justify-center text-gray-400">
                        <MockUpLineChart2 />
                    </div>
                </div>

                <div className="bg-white rounded-2xl border shadow p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">
                        Popular Categories
                    </h3>

                    <div className="h-56 flex items-center justify-center text-gray-400">
                        <MockUpDonutChart />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border shadow overflow-hidden">
                <div className="flex justify-between items-center p-5 border-b">
                    <h3 className="font-semibold text-gray-800">
                        This Month Sales
                    </h3>

                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="px-6 py-3 text-left">Name</th>
                                <th className="px-6 py-3 text-left">Location</th>
                                <th className="px-6 py-3 text-left">Sales</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {[
                                ["Customers1", "Thailand", "2400"],
                                ["Customers2", "Thailand", "2000"],
                                ["Customers3 ", "Thailand", "500"],
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    {row.map((col, idx) => (
                                        <td key={idx} className="px-6 py-4 text-gray-700">
                                            {col}
                                        </td>
                                    ))}
                                    <td className="px-6 py-4 text-right text-blue-600 font-medium cursor-pointer">
                                        Details
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard2;
