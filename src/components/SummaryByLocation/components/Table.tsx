import React from "react";
import {LineItem, MetricKey, metrics} from "../summaryTypes";

interface TableProps {
  setSelectedMetric: (metric: string) => void;
  data: {
    LocationName: string;
    LineItems: LineItem[];
  }[];
}
const Table: React.FC<TableProps> = ({setSelectedMetric, data}) => {
  return (
    <div className="overflow-x-auto shadow rounded-xl">
      <table className="min-w-full text-sm text-gray-700 bg-white border-separate border-spacing-0">
        <thead>
        <tr className="bg-blue-50 text-xs uppercase text-blue-800 font-semibold">
          <th className="p-3 text-left border border-gray-200 rounded-tl-xl">Location</th>
          {Object.keys(metrics).map((key, index) => (
            <th
              key={key}
              className={`p-3 text-right border border-gray-200 cursor-pointer hover:underline ${index === Object.keys(metrics).length - 1 ? 'rounded-tr-xl' : ''}`}
              onClick={() => setSelectedMetric(key as keyof typeof metrics)}
            >
              {key}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {data.map((location, i) => {
          const item = location.LineItems[0] as LineItem
          return (
            <tr
              key={location.LocationName}
              className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white hover:bg-blue-50'}
            >
              <td className="p-3 text-left border border-gray-200">{location.LocationName}</td>
              <td className="p-3 text-right border border-gray-200">{item.NumberOfInvoices}</td>
              <td className="p-3 text-right border border-gray-200">${item.NetAmount.toFixed(2)}</td>
              <td className="p-3 text-right border border-gray-200">${item.PlatformMargin.toFixed(2)}</td>
              <td className="p-3 text-right border border-gray-200">${item.TrainerMargin.toFixed(2)}</td>
              <td className="p-3 text-right border border-gray-200">${item.GST.toFixed(2)}</td>
              <td className="p-3 text-right border border-gray-200 font-semibold">${item.GrossAmount.toFixed(2)}</td>
              <td className="p-3 text-right border border-gray-200">{item.PercentageOfTotal.toFixed(2)}%</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}
export default Table;
