export interface NavbarItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  brand?: string;
  items?: NavbarItem[];
}
