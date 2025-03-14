import React from "react";
import { SidebarNavigation } from "./components/sidebar-navigation";
import { Header } from "./components/header";
import { DashboardStats } from "./components/dashboard-stats";
import { RecentOpportunities } from "./components/recent-opportunities";
import { MobileSidebar } from "./components/mobile-sidebar";
import { Recommendations } from "./components/recommendations";

// Sample data for opportunities
const opportunitiesData = [
  {
    id: 1,
    title: "Summer Research Program",
    type: "Internships",
    deadline: "Apr 15, 2024",
    status: "Open",
    isNew: true,
    daysRemaining: 15
  },
  {
    id: 2,
    title: "Tech Mentorship Program",
    type: "Workshops",
    deadline: "Mar 30, 2024",
    status: "Closing Soon",
    daysRemaining: 3
  },
  {
    id: 3,
    title: "STEM Scholarship",
    type: "Scholarships",
    deadline: "May 1, 2024",
    status: "Open",
    daysRemaining: 30
  },
  {
    id: 4,
    title: "Leadership Workshop",
    type: "Workshops",
    deadline: "Mar 25, 2024",
    status: "Closing Soon",
    daysRemaining: 2
  },
];

// Sample recommendations
const recommendationsData = [
  { id: 101, title: "Tech Internship", type: "Internships" },
  { id: 102, title: "STEM Scholarship", type: "Scholarships" },
  { id: 103, title: "Web Development Workshop", type: "Workshops" }
];

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState<string | undefined>(undefined);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryFilter = (category: string) => {
    setActiveFilter(category === activeFilter ? undefined : category);
  };

  const handleViewDetails = (id: number) => {
    if (id === -1) {
      setActiveFilter(undefined);
      return;
    }
    console.log(`View details for opportunity ${id}`);
  };

  const handleViewRecommendation = (id: number) => {
    console.log(`View recommendation ${id}`);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen bg-default-50">
      {/* Desktop Sidebar */}
      <aside className="hidden sm:block w-64 border-r bg-background">
        <SidebarNavigation />
      </aside>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header isSidebarOpen={isSidebarOpen} onSidebarToggle={toggleSidebar} />
        
        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <h1 className="text-2xl font-bold mb-6">Opportunities Dashboard</h1>
          
          {/* Stats Cards with Visualizations */}
          <DashboardStats onCategoryFilter={handleCategoryFilter} />
          
          {/* Recommendations */}
          <div className="mt-6">
            <Recommendations 
              recommendations={recommendationsData}
              onViewRecommendation={handleViewRecommendation}
            />
          </div>
          
          {/* Recent Opportunities Table */}
          <div className="mt-6">
            <RecentOpportunities 
              opportunities={opportunitiesData}
              activeFilter={activeFilter}
              onViewDetails={handleViewDetails}
            />
          </div>
        </div>
      </main>
    </div>
  );
}