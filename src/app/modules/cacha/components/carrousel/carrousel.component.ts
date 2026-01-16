import { NgClass } from '@angular/common';
import { Component, input, effect, ElementRef, viewChildren } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { ThemeToggleBtnComponent } from "../../../../prt-ui/theme-toggle-btn/theme-toggle-btn.component";

@Component({
  selector: 'app-carrousel',
  imports: [NgClass, PrtButton, ThemeToggleBtnComponent],
  templateUrl: './carrousel.component.html'
})
export class CarrouselComponent {
  images = input<string[]>([]);
  selectedImg: string = '';
  imageElements = viewChildren<ElementRef>('imgElement');
  isActive = input<boolean>(false)
  
  constructor() {
    // Seleccionar la primera imagen al iniciar
    effect(() => {
      const imgs = this.images();
      if (imgs && imgs.length > 0 && !this.selectedImg) {
        this.selectedImg = imgs[0];
      }
    });
  }
  
  selectImg(img: string, event: MouseEvent) {
    this.selectedImg = img;
    const clickedElement = event.currentTarget as HTMLElement;
    clickedElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  
  navigatePrev() {
    const imgs = this.images();
    const currentIndex = imgs.indexOf(this.selectedImg);
    
    if (currentIndex > 0) {
      const prevImg = imgs[currentIndex - 1];
      this.selectedImg = prevImg;
      this.scrollToImage(currentIndex - 1);
    }
  }
  
  navigateNext() {
    const imgs = this.images();
    const currentIndex = imgs.indexOf(this.selectedImg);
    
    if (currentIndex < imgs.length - 1) {
      const nextImg = imgs[currentIndex + 1];
      this.selectedImg = nextImg;
      this.scrollToImage(currentIndex + 1);
    }
  }
  
  private scrollToImage(index: number) {
    const elements = this.imageElements();
    if (elements && elements[index]) {
      elements[index].nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }
}