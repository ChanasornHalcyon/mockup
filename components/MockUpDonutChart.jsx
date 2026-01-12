import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Enmill", value: 25 },
    { name: "Drill", value: 30 },
    { name: "Insert", value: 10 },
    { name: "PCD", value: 35 },
];

const COLORS = ["#FF0099","#00FF33", "#33FFFF", "#A0522D"];

const CustomLegend = ({ payload }) => (
    <div className="flex justify-center gap-6 pt-6 text-xs text-gray-600">
        {payload.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
                <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                />
                <span>{item.value}</span>
            </div>
        ))}
    </div>
);

const MockUpDonutChart = () => {
    return (
        <ResponsiveContainer width="100%" height={260}>
            <PieChart>
                <Legend
                    verticalAlign="top"
                    align="center"
                    content={<CustomLegend />}
                />

                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="55%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
                >
                    {data.map((_, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default MockUpDonutChart;
