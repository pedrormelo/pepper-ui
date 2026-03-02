export type InputSize = 'xs' | 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'bordered' | 'ghost';
export type InputColor = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'currency';

export interface InputOption {
  label: string;
  value: string | number;
}

export default interface InputProps {
  modelValue?: string | number;
  label?: string;
  placeholder?: string;
  type?: InputType;
  size?: InputSize;
  variant?: InputVariant;
  color?: InputColor;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  textarea?: boolean;
  removable?: boolean;
  errorMessage?: string;
  helperText?: string;
  labelClass?: string;
  helperTextClass?: string;
  rows?: number;
  inputMask?: string;
  options?: InputOption[];
  grow?: boolean;
}
