export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  text: string;
  placement?: TooltipPlacement;
}
