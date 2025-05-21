import React from "react";
import {metricLabels} from "../summaryTypes";
import {Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

interface ChartProps {
  selectedMetric: keyof typeof metricLabels;
  chartData: {
    name: string;
    value: number;
  }[];
  maxValue: number;
}

const Chart: React.FC<ChartProps> = ({ selectedMetric, chartData, maxValue}) => {
  return (
    <div className="w-full h-[500px] bg-white rounded-xl shadow-md p-4">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        {metricLabels[selectedMetric]}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis
            dataKey="name"
            interval={0}
            tick={{fontSize: 12}}
            height={100}
            angle={-30}
            textAnchor="end"
          />
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="value">
            {chartData.map((entry, index) => {
              const intensity = Math.round((entry.value / maxValue) * 50) + 20
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(217, 90%, ${100 - intensity}%)`}
                />
              )
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>

  )
}

export default Chart
