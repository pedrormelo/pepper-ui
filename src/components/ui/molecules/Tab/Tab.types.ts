export interface TabItem {
  label: string;
  value: string;
}

export interface TabProps {
  modelValue?: string;
  items?: TabItem[];
}
