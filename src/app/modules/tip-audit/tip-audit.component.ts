import { Component } from '@angular/core';
import { AuditNavComponent } from "./components/audit-nav/audit-nav.component";
import { AuditFormComponent } from "./components/audit-form/audit-form.component";
import { AuditResultComponent } from "./components/audit-result/audit-result.component";

@Component({
  selector: 'app-tip-audit',
  imports: [AuditNavComponent, AuditFormComponent, AuditResultComponent],
  templateUrl: './tip-audit.component.html'
})
export class TipAuditComponent {}
