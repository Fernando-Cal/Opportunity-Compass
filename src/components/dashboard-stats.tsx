import React from "react";
import { StatCard } from "./stat-card";
import { OpportunitiesChart } from "./opportunities-chart";
import { ApplicationsChart } from "./applications-chart";
import { DeadlineTimeline } from "./deadline-timeline";
import { MiniTrendChart } from "./mini-trend-chart";
import { DetailedChartModal } from "./detailed-chart-modal";

// Sample data for charts
const opportunityTypeData = [
  { name: "Internships", value: 45, color: "#7828C8" },
  { name: "Scholarships", value: 30, color: "#0072F5" },
  { name: "Workshops", value: 25, color: "#F5A524" },
];

const applicationStatusData = [
  { name: "Pending", value: 12, color: "#F5A524" },
  { name: "Under Review", value: 8, color: "#0072F5" },
  { name: "Accepted", value: 5, color: "#17C964" },
  { name: "Rejected", value: 3, color: "#F31260" },
];

const deadlineItems = [
  { label: "Deadlines Today", count: 3, color: "danger" },
  { label: "Deadlines This Week", count: 7, color: "warning" },
  { label: "Deadlines Next Week", count: 5, color: "primary" },
];

// Sample trend data for the mini chart
const trendData = [
  { value: 30 },
  { value: 25 },
  { value: 35 },
  { value: 42 },
  { value: 38 },
  { value: 42 },
];

// Detailed trend data for modal
const detailedTrendData = [
  { date: "Jun 1", value: 30 },
  { date: "Jun 2", value: 25 },
  { date: "Jun 3", value: 35 },
  { date: "Jun 4", value: 42 },
  { date: "Jun 5", value: 38 },
  { date: "Jun 6", value: 42 },
  { date: "Jun 7", value: 45 },
  { date: "Jun 8", value: 50 },
  { date: "Jun 9", value: 52 },
  { date: "Jun 10", value: 48 },
  { date: "Jun 11", value: 55 },
  { date: "Jun 12", value: 60 },
  { date: "Jun 13", value: 58 },
  { date: "Jun 14", value: 62 },
];

interface DashboardStatsProps {
  onCategoryFilter: (category: string) => void;
}

export function DashboardStats({ onCategoryFilter }: DashboardStatsProps) {
  const [isChartModalOpen, setIsChartModalOpen] = React.useState(false);

  const handleTrendChartClick = () => {
    setIsChartModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="New Opportunities This Week"
          value="42"
          description="↑ 20% from last week"
          icon="lucide:plus-circle"
          color="primary"
          trendChart={<MiniTrendChart data={trendData} color="#0072F5" onClick={handleTrendChartClick} />}
        />
        
        <StatCard
          title="Upcoming Deadlines"
          value="15 total deadlines"
          actionLabel="View All"
          onAction={() => console.log("View all deadlines")}
        >
          <DeadlineTimeline items={deadlineItems} />
        </StatCard>
        
        <StatCard
          title="My Applications Status"
          value="28 total applications"
        >
          <ApplicationsChart data={applicationStatusData} />
        </StatCard>
        
        <StatCard
          title="Opportunity Distribution"
          value="By type"
        >
          <OpportunitiesChart 
            data={opportunityTypeData} 
            onCategoryClick={onCategoryFilter}
          />
        </StatCard>
      </div>

      <DetailedChartModal 
        isOpen={isChartModalOpen} 
        onClose={() => setIsChartModalOpen(false)} 
        data={detailedTrendData}
      />
    </>
  );
}