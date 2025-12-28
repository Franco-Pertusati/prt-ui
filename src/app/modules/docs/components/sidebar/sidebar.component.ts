import { Component, inject, input } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { ThemeToggleBtnComponent } from '../../../../prt-ui/theme-toggle-btn/theme-toggle-btn.component';
import { PrtButton } from '../../../../prt-ui/prt-button/prt-button.component';

interface ButtonInterface {
  label: string,
  route: string
}

@Component({
  selector: 'app-sidebar',
  imports: [ThemeToggleBtnComponent, PrtButton],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  buttons: ButtonInterface[] = [
    {
      label: 'Buttons',
      route: 'buttons'
    },
    {
      label: 'Dialogs',
      route: 'dialogs'
    },
    {
      label: 'Toasts',
      route: 'toasts'
    },
    {
      label: 'Card',
      route: 'card'
    },
    {
      label: 'Tabs (router)',
      route: 'router-tabs'
    },
    {
      label: 'Tabs (no router)',
      route: 'tabs'
    }
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
