import React from "react";
import { Drawer, DrawerContent, DrawerBody } from "@heroui/react";
import { SidebarNavigation } from "./sidebar-navigation";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <Drawer isOpen={isOpen} onOpenChange={onClose} placement="left">
      <DrawerContent>
        {() => (
          <DrawerBody className="p-0">
            <SidebarNavigation />
          </DrawerBody>
        )}
      </DrawerContent>
    </Drawer>
  );
}