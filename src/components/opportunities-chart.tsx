import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

interface OpportunitiesChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  onCategoryClick?: (category: string) => void;
}

export function OpportunitiesChart({ data, onCategoryClick }: OpportunitiesChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      const percentage = ((item.value / data.reduce((sum, entry) => sum + entry.value, 0)) * 100).toFixed(0);
      
      return (
        <div className="bg-background p-2 rounded-md shadow-md border border-default-200">
          <p className="font-medium" style={{ color: item.payload.color }}>{`${item.name}`}</p>
          <p className="text-small text-default-600">{`${item.value} (${percentage}%)`}</p>
        </div>
      );
    }
    return null;
  };

  const handleClick = (entry: any) => {
    if (onCategoryClick) {
      onCategoryClick(entry.name);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className="w-full h-[180px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
              onClick={handleClick}
              className="cursor-pointer"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {data.map((entry, index) => (
          <motion.div 
            key={index} 
            className="flex items-center gap-1 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => onCategoryClick && onCategoryClick(entry.name)}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-xs" style={{ color: entry.color }}>{entry.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}