import React from "react";
import { Card, CardBody, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Opportunity {
  id: number;
  title: string;
  type: string;
  deadline: string;
  status: string;
  isNew?: boolean;
  daysRemaining?: number;
}

interface RecentOpportunitiesProps {
  opportunities: Opportunity[];
  activeFilter?: string;
  onViewDetails?: (id: number) => void;
}

export function RecentOpportunities({ opportunities, activeFilter, onViewDetails }: RecentOpportunitiesProps) {
  const filteredOpportunities = activeFilter 
    ? opportunities.filter(opp => opp.type === activeFilter)
    : opportunities;

  const getDeadlineText = (deadline: string, daysRemaining?: number) => {
    if (daysRemaining === undefined) return deadline;
    
    if (daysRemaining <= 3) {
      return `Due in ${daysRemaining} day${daysRemaining === 1 ? '' : 's'}`;
    } else if (daysRemaining <= 7) {
      return `Due this week`;
    } else if (daysRemaining <= 30) {
      return `Due in ${Math.ceil(daysRemaining / 7)} week${Math.ceil(daysRemaining / 7) === 1 ? '' : 's'}`;
    } else {
      return `Due in ${Math.floor(daysRemaining / 30)} month${Math.floor(daysRemaining / 30) === 1 ? '' : 's'}`;
    }
  };

  return (
    <Card shadow="sm" className="border-none">
      <CardHeader className="flex justify-between items-center">
        <div className="text-lg font-medium">Recent Opportunities</div>
        {activeFilter && (
          <Chip 
            color="primary" 
            variant="flat" 
            onClose={() => onViewDetails && onViewDetails(-1)}
          >
            Filtered: {activeFilter}
          </Chip>
        )}
      </CardHeader>
      <CardBody>
        <Table 
          removeWrapper 
          aria-label="Recent opportunities"
          selectionMode="none"
        >
          <TableHeader>
            <TableColumn>OPPORTUNITY</TableColumn>
            <TableColumn>TYPE</TableColumn>
            <TableColumn>DEADLINE</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody emptyContent="No opportunities found">
            {filteredOpportunities.map((item, index) => (
              <TableRow 
                key={item.id} 
                className="cursor-pointer hover:bg-default-100"
                onClick={() => onViewDetails && onViewDetails(item.id)}
              >
                <TableCell>
                  <div className="flex items-center gap-2">
                    {item.title}
                    {item.isNew && (
                      <Chip size="sm" color="primary" variant="flat">New</Chip>
                    )}
                  </div>
                </TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{item.deadline}</span>
                    {item.daysRemaining !== undefined && (
                      <span className={`text-xs ${item.daysRemaining <= 3 ? 'text-danger' : 'text-default-500'}`}>
                        {getDeadlineText(item.deadline, item.daysRemaining)}
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Chip
                    color={item.status === "Open" ? "success" : "warning"}
                    variant="flat"
                    size="sm"
                  >
                    {item.status}
                  </Chip>
                </TableCell>
                <TableCell>
                  <Button 
                    size="sm" 
                    variant="flat" 
                    color="primary"
                    onPress={(e) => {
                      e.stopPropagation();
                      onViewDetails && onViewDetails(item.id);
                    }}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}