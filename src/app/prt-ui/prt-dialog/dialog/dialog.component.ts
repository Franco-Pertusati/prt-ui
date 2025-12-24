import { Component, inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DialogService } from '../../../core/services/dialog.service';
import { PrtButton } from "../../prt-button/prt-button.component";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [PrtButton],
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements AfterViewInit {
  @ViewChild('closeButton') closeButton!: ElementRef<HTMLButtonElement>;

  dialogService = inject(DialogService);
  private dialogElement!: HTMLElement;

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  closeDialog() {
    this.dialogService.closeDialog();
  }

  ngAfterViewInit() {
    if (this.closeButton) {
      setTimeout(() => {
        this.closeButton.nativeElement.focus();
      });
    }

    this.setupFocusTrap();
  }

  private setupFocusTrap() {
    const dialogContent = document.querySelector('app-dialog > div') as HTMLElement | null;
    if (!dialogContent) return;

    const focusableElements = dialogContent.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    dialogContent.addEventListener('keydown', handleKeyDown);
  }
}
