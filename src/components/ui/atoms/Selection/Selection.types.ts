export type SelectionVariant = 'checkbox' | 'radio' | 'toggle';
export type SelectionSize = 'sm' | 'md' | 'lg';
export type SelectionValue = string | number;
export type SelectionModel = boolean | SelectionValue | SelectionValue[];

export default interface SelectionProps {
  id?: string;
  name?: string;
  modelValue?: SelectionModel;
  value?: SelectionValue;
  variant?: SelectionVariant;
  size?: SelectionSize;
  disabled?: boolean;
  label?: string;
}
