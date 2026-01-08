import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeToggleBtnComponent } from "../../prt-ui/theme-toggle-btn/theme-toggle-btn.component";
import { DinningTable, SalonService } from '../../core/services/salon.service';

@Component({
  selector: 'app-salon',
  standalone: true,
  imports: [ThemeToggleBtnComponent, CommonModule, RouterOutlet],
  templateUrl: './salon.component.html',
})
export class SalonComponent {

}