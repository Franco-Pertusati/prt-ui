import { NgStyle } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  input,
  model,
  output,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';

export interface RadioOption {
  value: string;
  label: string;
  labelChecked?: string;
  icon?: string;
  iconChecked?: string;
  iconUnchecked?: string;
  disabled?: boolean;
}

@Component({
  selector: 'prt-radio',
  imports: [NgStyle],
  templateUrl: './prt-radio.component.html',
  styles: [`
    :host {
      display: contents;
    }

    .sliding-indicator {
      position: absolute;
      border-radius: 0.75rem; /* rounded-xl */
      transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                  width 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                  top 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                  height 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
      z-index: 0;
    }

    label {
      position: relative;
      z-index: 1;
    }
  `],
})
export class PrtRadioComponent implements AfterViewInit {
  options = input.required<RadioOption[]>();

  indicatorClass = input<string>('bg-light');
  size = input<'sm' | 'md' | 'lg'>('md');

  showIcon = input<boolean>(true);
  showLabel = input<boolean>(true);

  selectedValue = model<string>('');

  selectionChange = output<string>();

  containerClasses = input<string>('inline-flex');

  @ViewChildren('optionLabel') optionLabels!: QueryList<ElementRef<HTMLLabelElement>>;

  slidingStyle = signal<{ [key: string]: string } | null>(null);

  private initialized = false;

  constructor() {
    // React to selectedValue changes to move the sliding indicator
    effect(() => {
      const value = this.selectedValue();
      if (this.initialized) {
        this.updateSlidingIndicator(value);
      }
    });
  }

  ngAfterViewInit() {
    // Small delay to ensure layout is complete
    setTimeout(() => {
      this.initialized = true;
      this.updateSlidingIndicator(this.selectedValue(), false);
    }, 0);

    // Re-calculate on list changes (e.g. dynamic options)
    this.optionLabels.changes.subscribe(() => {
      this.updateSlidingIndicator(this.selectedValue(), false);
    });
  }

  private updateSlidingIndicator(value: string, animate = true) {
    if (!this.optionLabels) return;

    const selectedLabel = this.optionLabels.find(
      (el) => el.nativeElement.getAttribute('data-value') === value
    );

    if (!selectedLabel) {
      this.slidingStyle.set(null);
      return;
    }

    const labelEl = selectedLabel.nativeElement;
    const parentEl = labelEl.parentElement;
    if (!parentEl) return;

    const parentRect = parentEl.getBoundingClientRect();
    const labelRect = labelEl.getBoundingClientRect();

    this.slidingStyle.set({
      left: `${labelRect.left - parentRect.left}px`,
      top: `${labelRect.top - parentRect.top}px`,
      width: `${labelRect.width}px`,
      height: `${labelRect.height}px`,
      ...(animate ? {} : { transition: 'none' }),
    });

    // Re-enable transition after placement (for the no-animate initial case)
    if (!animate) {
      requestAnimationFrame(() => {
        this.slidingStyle.update((s) =>
          s ? { ...s, transition: '' } : s
        );
      });
    }
  }

  getOptionClasses(option: RadioOption) {
    const isDisabled = option.disabled;
    const base = 'inline-flex items-center justify-center gap-1.5 rounded-xl font-medium cursor-pointer select-none';
    const disabled = isDisabled ? 'opacity-50 cursor-not-allowed' : '';
    const padding = !this.showLabel() || !option.label ? 'p-1.5' : 'px-3 py-1.5';
    return `${base} ${disabled} ${padding}`;
  }

  getIconClasses() {
    const sizes = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };
    const base = 'flex items-center justify-center rounded';
    return `${base} ${sizes[this.size()]}`;
  }

  getLabelClasses(option: RadioOption) {
    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    const isSelected = this.selectedValue() === option.value;
    const fontWeight = isSelected ? 'font-medium' : '';

    return `${sizes[this.size()]} ${fontWeight}`;
  }

  onSelect(option: RadioOption) {
    if (!option.disabled) {
      this.selectedValue.set(option.value);
      this.selectionChange.emit(option.value);
    }
  }

  getDisplayIcon(option: RadioOption): string | undefined {
    const isSelected = this.selectedValue() === option.value;

    if (isSelected && option.iconChecked) {
      return option.iconChecked;
    } else if (!isSelected && option.iconUnchecked) {
      return option.iconUnchecked;
    } else if (option.icon) {
      return option.icon;
    }

    return undefined;
  }

  getDisplayLabel(option: RadioOption): string {
    const isSelected = this.selectedValue() === option.value;
    return isSelected && option.labelChecked ? option.labelChecked : option.label;
  }
}