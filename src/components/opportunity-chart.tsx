import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", opportunities: 120 },
  { month: "Feb", opportunities: 145 },
  { month: "Mar", opportunities: 180 },
  { month: "Apr", opportunities: 210 },
  { month: "May", opportunities: 250 },
  { month: "Jun", opportunities: 280 },
  { month: "Jul", opportunities: 320 },
];

export function OpportunityChart() {
  return (
    <Card className="h-[400px]">
      <CardHeader>Opportunities Growth</CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="opportunities" 
              stroke="#006FEE" 
              strokeWidth={2}
              name="Available Opportunities"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}