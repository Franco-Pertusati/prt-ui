import { Component } from '@angular/core';
import { PrtRadioComponent, RadioOption } from "../../../../prt-ui/prt-radio/prt-radio.component";
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";

@Component({
  selector: 'app-test-dashboard',
  imports: [PrtRadioComponent, PrtButton],
  templateUrl: './test-dashboard.component.html'
})
export class TestDashboardComponent {
  sidebarOptions: RadioOption[] = [
    {
      label: 'Dashboard',
      icon: 'home',
      value: '1'
    },
    {
      label: 'Warehouses',
      icon: 'forklift',
      value: '2'
    },
    {
      label: 'Clients',
      icon: 'group',
      value: '3'
    },
    {
      label: 'Shifts',
      icon: 'work',
      value: '4'
    },
    {
      label: 'transactions',
      icon: 'sync_alt',
      value: '5'
    }
  ]

  tabsOptions: RadioOption[] = [
    {
      label: 'Overview',
      value: '1'
    },
    {
      label: 'Sales',
      value: '2'
    },
    {
      label: 'Transactions',
      value: '3'
    },
  ]
}
