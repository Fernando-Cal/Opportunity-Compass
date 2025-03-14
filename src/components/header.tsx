import React from "react";
import { Avatar, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Navbar, NavbarContent, NavbarMenuToggle, NavbarBrand } from "@heroui/react";
import { Icon } from "@iconify/react";

interface HeaderProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function Header({ isSidebarOpen, onSidebarToggle }: HeaderProps) {
  return (
    <Navbar maxWidth="xl" isBordered className="bg-background">
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle 
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"} 
          onClick={onSidebarToggle}
          className="sm:hidden"
        />
        <NavbarBrand className="sm:hidden">
          <Icon icon="lucide:rocket" className="text-2xl text-primary" />
          <p className="font-bold text-inherit ml-2">OpportunitiesHub</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <Button isIconOnly variant="light">
          <Icon icon="lucide:search" className="text-xl" />
        </Button>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button isIconOnly variant="light">
          <Icon icon="lucide:bell" className="text-xl" />
        </Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              className="transition-transform"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">john@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team">Team Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}