import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'prt-button',
  standalone: true,
  templateUrl: './prt-button.component.html',
})
export class PrtButton {
  btnClick = output<void>();

  variant = input<'default' | 'outlined' | 'secondary' | 'ghost' | 'destructive'>('default');
  classList = input<string>('');
  label = input<string>('');
  icon = input<string>('');
  showLabel = input<boolean>(true);
  showIcon = input<boolean>(true);
  notifications = input<number>(0);

  // Tooltip
  tooltip = input<string>('');
  tooltipPosition = input<'top' | 'bottom' | 'left' | 'right'>('top');

  // Hover icon
  hoverIcon = input<string>('');
  hoverIconPosition = input<'left' | 'right'>('right');

  // Accessibility
  ariaLabel = input<string>('');
  ariaDescribedBy = input<string>('');
  disabled = input<boolean>(false);

  styleMap: Record<string, string> = {
    default: 'bg-text text-dark',
    outlined: 'border border-border hover:bg-neutral',
    secondary: 'bg-light',
    ghost: 'bg-transparent hover:bg-neutral',
    destructive: 'bg-danger text-danger text-white',
  };

  baseClasses = 'inline-flex items-center justify-center gap-1.5 rounded-xl font-medium cursor-pointer';

  classes = computed(() => {
    const variant = this.styleMap[this.variant()] ?? '';
    const defaultPadding = !this.showLabel() || !this.label() ? 'p-1.5' : 'px-3 py-1.5';
    const hasPaddingClass = /\b(p|px|py|pt|pb|pl|pr)-/.test(this.classList());
    const padding = hasPaddingClass ? '' : defaultPadding;
    const disabledClasses = this.disabled() ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
    return `${this.baseClasses} ${variant} ${padding} ${this.classList()} ${disabledClasses}`.trim();
  });

  tooltipClasses = computed(() => {
    const positionMap: Record<string, string> = {
      top: 'tooltip-top',
      bottom: 'tooltip-bottom',
      left: 'tooltip-left',
      right: 'tooltip-right',
    };
    return `prt-tooltip bg-light shadow border border-border ${positionMap[this.tooltipPosition()] ?? 'tooltip-top'}`;
  });

  /** Computed aria-label: falls back to label() if ariaLabel() is not provided */
  computedAriaLabel = computed(() => {
    return this.ariaLabel() || this.label() || undefined;
  });
}