export interface SidebarItem {
  key: string;
  label: string;
}

export interface SidebarProps {
  title?: string;
  activeKey?: string;
  items?: SidebarItem[];
}
