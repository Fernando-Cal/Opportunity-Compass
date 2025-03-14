import React from "react";
import { Progress, Tooltip } from "@heroui/react";
import { motion } from "framer-motion";

interface DeadlineItem {
  label: string;
  count: number;
  color: "primary" | "warning" | "danger";
}

interface DeadlineTimelineProps {
  items: DeadlineItem[];
}

export function DeadlineTimeline({ items }: DeadlineTimelineProps) {
  return (
    <div className="flex flex-col h-full justify-between py-2">
      {items.map((item, index) => (
        <motion.div 
          key={index} 
          className={index < items.length - 1 ? "mb-4" : ""}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-small">{item.label}</span>
            <motion.span 
              className="text-small font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {item.count}
            </motion.span>
          </div>
          <Tooltip content={`${item.count} deadlines`}>
            <Progress 
              aria-label={`${item.label} deadlines`}
              size="sm"
              value={item.count} 
              maxValue={10}
              color={item.color}
              className="max-w-full"
              showValueLabel={false}
            />
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
}