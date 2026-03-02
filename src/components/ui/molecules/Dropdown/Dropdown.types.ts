export interface DropdownOption {
  label: string;
  value: string | number;
}

export interface DropdownProps {
  modelValue?: string | number;
  options?: Array<DropdownOption | string | number>;
  placeholder?: string;
}
