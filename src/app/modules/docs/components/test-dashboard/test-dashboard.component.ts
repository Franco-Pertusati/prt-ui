import { Component } from '@angular/core';
import { PrtRadioComponent, RadioOption } from "../../../../prt-ui/prt-radio/prt-radio.component";
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { PrtStatComponent, StatCard } from "../../../../prt-ui/prt-stat/prt-stat.component";
import { PrtPopoverComponent } from "../../../../prt-ui/prt-popover/prt-popover.component";

@Component({
  selector: 'app-test-dashboard',
  imports: [PrtRadioComponent, PrtButton, PrtStatComponent, PrtPopoverComponent],
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

  calendarOptions: RadioOption[] = [
    {
      label: 'Yearly',
      value: '4'
    },
    {
      label: 'Monthly',
      value: '1'
    },
    {
      label: 'Weekly',
      value: '2'
    },
    {
      label: 'Daily',
      value: '3'
    },
  ]

  dashboardStats: StatCard[] = [
    {
      name: "Total Revenue",
      value: 125430,
      symbol: "$",
      variataion: 8.5
    },
    {
      name: "New Customers",
      value: 342,
      symbol: "",
      variataion: 5.2
    },
    {
      name: "Orders",
      value: 1289,
      symbol: "",
      variataion: -2.1
    },
    {
      name: "Conversion Rate",
      value: 3.8,
      symbol: "%",
      variataion: 1.4
    },
  ]
}
