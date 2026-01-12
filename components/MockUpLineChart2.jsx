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
    { month: "Jan", "Drill": 120, "Endmill": 100, PCD: 130 },
    { month: "Feb", "Drill": 160, "Endmill": 120, PCD: 140 },
    { month: "Mar", "Drill": 140, "Endmill": 170, PCD: 110 },
    { month: "Apr", "Drill": 190, "Endmill": 140, PCD: 160 },
    { month: "May", "Drill": 150, "Endmill": 180, PCD: 130 },
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
                    dataKey="Drill"
                    stroke="#2563EB"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                />
                <Line
                    type="monotone"
                    dataKey="Endmill"
                    stroke="#16A34A"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                />
                <Line
                    type="monotone"
                    dataKey="PCD"
                    stroke="#F59E0B"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MockUpLineChart;
