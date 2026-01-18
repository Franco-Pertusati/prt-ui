import { Component, inject, input } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { ThemeToggleBtnComponent } from '../../../../prt-ui/theme-toggle-btn/theme-toggle-btn.component';
import { PrtButton } from '../../../../prt-ui/prt-button/prt-button.component';
import { ButtonInterface } from '../../../../core/interfaces/buttonList';

@Component({
  selector: 'app-sidebar',
  imports: [ThemeToggleBtnComponent, PrtButton],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  buttons: ButtonInterface[] = [
    {
      label: 'Button',
      route: 'button'
    },
    {
      label: 'Check-box',
      route: 'check-box'
    },
    {
      label: 'Dialog',
      route: 'dialog'
    },
    {
      label: 'Toast',
      route: 'toast'
    },
    {
      label: 'Card',
      route: 'card'
    },
    {
      label: 'Key Binding',
      route: 'kbd'
    },
  ]

  router = inject(Router)

  navigateTo(route: string) {
    this.router.navigate([`docs/${route}`]);
  }

  isActive(buttonRoute: string): boolean {
    const tree: UrlTree = this.router.createUrlTree([`/docs/${buttonRoute}`]);

    return this.router.isActive(tree, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
