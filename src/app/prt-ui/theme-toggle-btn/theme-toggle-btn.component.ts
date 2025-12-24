import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { PrtButton } from "../prt-button/prt-button.component";

@Component({
  selector: 'app-theme-toggle-btn',
  imports: [PrtButton],
  templateUrl: './theme-toggle-btn.component.html',
})
export class ThemeToggleBtnComponent {
  theme = inject(ThemeService)

  toggleTheme() {
    this.theme.toggleTheme()
  }
}
