import React from "react";
import { ShoppingBag, DollarSign, Users, TrendingUp } from "lucide-react";
import MockUpDonutChart from "../components/MockUpDonutChart";
import MockUpLineChart from "../components/MockUpLineChart";
const StatCard = ({ title, value, change, icon: Icon }) => (
    <div className="rounded-2xl p-5 flex justify-between items-center bg-white border shadow">
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-semibold mt-1 text-gray-800">
                {value}
            </h3>
            <p
                className={`text-xs mt-1 ${change.startsWith("+") ? "text-green-500" : "text-red-500"
                    }`}
            >
                {change}
            </p>
        </div>

        <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-gray-100 text-gray-600">
            <Icon size={20} />
        </div>
    </div>
);

const Dashboard = () => {

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <StatCard
                    title="This Month Sales"
                    value="21,324"
                    change="+2,031"
                    icon={ShoppingBag}
                />
                <StatCard
                    title="This Month Income"
                    value="$221,324.50"
                    change="-2,201"
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
                            Sales Performance
                        </h3>

                    </div>

                    <div className="h-56 flex items-center justify-center text-gray-400">
                        <MockUpLineChart />
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
                     Distributors
                    </h3>

                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="px-6 py-3 text-left">Name</th>
                                <th className="px-6 py-3 text-left">Order Date</th>
                                <th className="px-6 py-3 text-left">Phone</th>
                                <th className="px-6 py-3 text-left">Location</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {[
                                ["FDM", "19 May 2021", "251-661-5362", "Thailand"],
                                ["Halcyon Vietnam ", "18 May 2021", "171-534-1262", "Vietnam"],
                                ["YN Engineering ", "17 May 2021", "974-661-5110", "Thailand"],
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

export default Dashboard;
