import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeToggleBtnComponent } from "../../prt-ui/theme-toggle-btn/theme-toggle-btn.component";
import { DinningTable, SalonService } from '../../core/services/salon.service';
import { PrtButton } from "../../prt-ui/prt-button/prt-button.component";

@Component({
  selector: 'app-salon',
  standalone: true,
  imports: [ThemeToggleBtnComponent, CommonModule, RouterOutlet, PrtButton],
  templateUrl: './salon.component.html',
})
export class SalonComponent {
  
}