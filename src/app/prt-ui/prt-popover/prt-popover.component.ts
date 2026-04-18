import {
  Component,
  input,
  signal,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
  effect
} from '@angular/core';
import { PrtButton } from "../prt-button/prt-button.component";
import { PrtContainerComponent } from "../prt-container/prt-container.component";
import { PrtButtonVariant } from '../prt-button/prt-button-variants';

interface PopoverPosition {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

@Component({
  selector: 'prt-popover',
  standalone: true,
  imports: [PrtButton, PrtContainerComponent],
  templateUrl: './prt-popover.component.html'
})
export class PrtPopoverComponent implements AfterViewInit {
  label = input<string>();
  variant = input<PrtButtonVariant>('secondary');
  
  isOpen = signal(false);
  popoverPosition = signal<PopoverPosition>({});

  @ViewChild('triggerWrapper') triggerWrapper!: ElementRef;
  @ViewChild('popover') popover!: ElementRef;

  constructor(private elementRef: ElementRef) {
    // Efecto para ajustar posición cuando se abre el popover
    effect(() => {
      if (this.isOpen()) {
        // Usar setTimeout para asegurar que el DOM se haya renderizado
        setTimeout(() => this.adjustPopoverPosition(), 0);
      }
    });
  }

  ngAfterViewInit(): void {
    // Cualquier inicialización adicional si es necesaria
  }

  togglePopover(): void {
    this.isOpen.update(state => !state);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isOpen()) return;

    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    
    if (!clickedInside) {
      this.isOpen.set(false);
    }
  }

  private adjustPopoverPosition(): void {
    if (!this.popover) return;

    const popoverEl = this.popover.nativeElement;
    const rect = popoverEl.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const position: PopoverPosition = {};

    // Verificar si se sale por la derecha
    if (rect.right > viewportWidth) {
      position.right = '0';
      position.left = 'auto';
    } else {
      position.left = '0';
    }

    // Verificar si se sale por abajo
    if (rect.bottom > viewportHeight) {
      // Posicionar arriba del botón
      position.bottom = '100%';
      position.top = 'auto';
    } else {
      position.top = '100%';
    }

    this.popoverPosition.set(position);
  }

  @HostListener('window:resize')
   onWindowChange(): void {
    if (this.isOpen()) {
      this.adjustPopoverPosition();
    }
  }
}