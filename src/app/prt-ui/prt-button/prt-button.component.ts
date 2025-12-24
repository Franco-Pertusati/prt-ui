import { Component, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'prt-button',
  standalone: true,
  templateUrl: './prt-button.component.html',
})
export class PrtButton {
  @Output() btnClick = new EventEmitter<void>();
  variant = input<'default' | 'outlined' | 'secondary' | 'ghost' | 'destructive'>('default');
  classList = input<string>('');
  label = input<string>('');
  icon = input<string>('');
  notifications = input<number>(0);
  showLabel = input<boolean>(true);
  showIcon = input<boolean>(true);

  styleMap: Record<string, string> = {
    default: 'bg-text text-dark',
    outlined: 'border border-border hover:bg-neutral',
    secondary: 'bg-light',
    ghost: 'bg-transparent hover:bg-neutral',
    destructive: 'bg-danger text-danger text-white',
  };

  baseClasses = `inline-flex items-center justify-center gap-1.5 rounded-xl font-medium cursor-pointer`;

  get classes(): string {
    const variant = this.styleMap[this.variant()] ?? '';
    const padding =
      !this.showLabel() || !this.label() ? 'p-1.5' : 'px-3 py-1.5';
    return `${this.baseClasses} ${variant} ${padding} ${this.classList()}`;
  }
}
