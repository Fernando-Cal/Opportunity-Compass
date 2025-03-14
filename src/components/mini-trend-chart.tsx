import React from "react";
import { LineChart, Line, ResponsiveContainer, Area } from "recharts";
import { motion } from "framer-motion";

interface MiniTrendChartProps {
  data: Array<{ value: number }>;
  color: string;
  onClick?: () => void;
}

export function MiniTrendChart({ data, color, onClick }: MiniTrendChartProps) {
  return (
    <motion.div 
      className="h-24 w-full relative cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-transparent rounded-lg" />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}