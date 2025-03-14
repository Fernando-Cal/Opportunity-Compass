import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

const navigationItems = [
  { name: "Opportunities", icon: "lucide:lightbulb", href: "#" },
  { name: "Scholarships", icon: "lucide:graduation-cap", href: "#" },
  { name: "My Applications", icon: "lucide:clipboard-check", href: "#" },
];

export function SidebarNavigation() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <Link href="#" className="flex items-center gap-2 px-2 py-4">
        <Icon icon="lucide:rocket" className="text-2xl text-primary" />
        <span className="font-bold text-xl">OpportunitiesHub</span>
      </Link>
      <div className="flex flex-col gap-1 mt-4">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-default-100"
          >
            <Icon icon={item.icon} className="text-xl" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}