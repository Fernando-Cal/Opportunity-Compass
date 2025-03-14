import React from "react";
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Recommendation {
  id: number;
  title: string;
  type: string;
}

interface RecommendationsProps {
  recommendations: Recommendation[];
  onViewRecommendation?: (id: number) => void;
}

export function Recommendations({ recommendations, onViewRecommendation }: RecommendationsProps) {
  return (
    <Card shadow="sm" className="border-none">
      <CardHeader className="flex gap-2 items-center">
        <Icon icon="lucide:lightbulb" className="text-primary text-lg" />
        <span className="text-lg font-medium">Recommended For You</span>
      </CardHeader>
      <CardBody>
        <div className="flex flex-wrap gap-2">
          {recommendations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Chip
                color="primary"
                variant="flat"
                className="cursor-pointer"
                onClick={() => onViewRecommendation && onViewRecommendation(item.id)}
                startContent={<Icon icon="lucide:star" className="text-xs" />}
              >
                {item.title} ({item.type})
              </Chip>
            </motion.div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}