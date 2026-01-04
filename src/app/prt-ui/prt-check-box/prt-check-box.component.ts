import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'prt-check-box',
  imports: [],
  templateUrl: './prt-check-box.component.html'
})
export class PrtCheckBoxComponent {
  label = input<string>('');
  labelChecked = input<string>('');
  disabled = input<boolean>(false);

  variant = input<'default' | 'outlined' | 'secondary' | 'ghost'>('default');
  size = input<'sm' | 'md' | 'lg'>('md');

  icon = input<string>('check');
  iconChecked = input<string>('check_box');
  iconUnchecked = input<string>('check_box_outline_blank');
  showIcon = input<boolean>(true);
  showLabel = input<boolean>(true);

  checked = model<boolean>(false);

    containerClasses = computed(() => {
    const base = 'flex items-center gap-2 cursor-pointer select-none';
    const disabled = this.disabled() ? 'opacity-50 cursor-not-allowed' : '';
    return `${base} ${disabled}`;
  });
  
  checkboxClasses = computed(() => {
    const sizes = {
      sm: 'w-4 h-4 text-xs',
      md: 'w-5 h-5 text-sm',
      lg: 'w-6 h-6 text-base'
    };
    
    const baseClasses = 'flex items-center justify-center rounded';
    
    const variants = {
      default: this.checked()
        ? 'bg-primary '
        : '',
      outlined: this.checked()
        ? 'bg-transparent border-2 border-primary text-primary'
        : 'bg-transparent border-2',
      filled: this.checked()
        ? 'bg-primary text-primary-foreground'
        : 'bg-muted text-muted-foreground hover:bg-muted/80',
      ghost: this.checked()
        ? 'bg-primary/10 text-primary'
        : 'bg-transparent text-muted-foreground hover:bg-muted',
      secondary: this.checked()
        ? 'bg-secondary text-secondary-foreground border-secondary'
        : 'bg-background',
      destructive: this.checked()
        ? 'bg-destructive text-destructive-foreground border-destructive'
        : 'bg-background'
    };
    
    return `${baseClasses} ${sizes[this.size()]} ${variants[this.variant()]}`;
  });
  
  labelClasses = computed(() => {
    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    
    const base = 'transition-colors';
    const checked = this.checked() ? 'font-medium' : '';
    
    return `${base} ${sizes[this.size()]} ${checked}`;
  });
  
  onToggle() {
    if (!this.disabled()) {
      this.checked.set(!this.checked());
    }
  }
}
