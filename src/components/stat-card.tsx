import React from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  children?: React.ReactNode;
  trendChart?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export function StatCard({ 
  title, 
  value, 
  description, 
  icon, 
  color = "primary", 
  children, 
  trendChart,
  actionLabel,
  onAction
}: StatCardProps) {
  return (
    <Card className="border-none h-full" shadow="sm">
      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
        <div className="flex justify-between w-full items-center">
          <p className="text-small text-default-500">{title}</p>
          {actionLabel && (
            <Button 
              size="sm" 
              variant="light" 
              color={color} 
              endContent={<Icon icon="lucide:chevron-right" className="text-sm" />}
              onPress={onAction}
            >
              {actionLabel}
            </Button>
          )}
        </div>
        {!children && (
          <motion.div 
            className="flex items-center justify-between w-full mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-semibold">{value}</p>
            {icon && (
              <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-${color}/10`}>
                <Icon icon={icon} className={`text-xl text-${color}`} />
              </div>
            )}
          </motion.div>
        )}
        {!children && description && (
          <p className="text-small text-default-500 mt-1">{description}</p>
        )}
      </CardHeader>
      <CardBody className="py-2 overflow-visible">
        {children ? children : trendChart && (
          <div className="mt-1">
            {trendChart}
          </div>
        )}
      </CardBody>
    </Card>
  );
}