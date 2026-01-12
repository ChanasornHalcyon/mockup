import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", "Halcyon Vietnam": 120, "YN Engineering": 100, FDM: 130 },
    { month: "Feb", "Halcyon Vietnam": 160, "YN Engineering": 120, FDM: 140 },
    { month: "Mar", "Halcyon Vietnam": 140, "YN Engineering": 170, FDM: 110 },
    { month: "Apr", "Halcyon Vietnam": 190, "YN Engineering": 140, FDM: 160 },
    { month: "May", "Halcyon Vietnam": 150, "YN Engineering": 180, FDM: 130 },
];

const CustomLegend = ({ payload }) => (
    <div className="flex justify-center gap-6 mb-6 text-xs text-gray-600">
        {payload.map((item) => (
            <div key={item.value} className="flex items-center gap-2">
                <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                />
                <span>{item.value}</span>
            </div>
        ))}
    </div>
);

const MockUpLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 40, right: 20, left: 0, bottom: 20 }}
            >
                <Legend
                    verticalAlign="top"
                    align="center"
                    content={<CustomLegend />}
                />

                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />

                <Line
                    type="monotone"
                    dataKey="Halcyon Vietnam"
                    stroke="#2563EB"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                />
                <Line
                    type="monotone"
                    dataKey="YN Engineering"
                    stroke="#16A34A"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                />
                <Line
                    type="monotone"
                    dataKey="FDM"
                    stroke="#F59E0B"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MockUpLineChart;
