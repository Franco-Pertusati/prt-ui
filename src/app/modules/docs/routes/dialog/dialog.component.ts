import { Component, inject } from '@angular/core';
import { PrtButton } from "../../../../prt-ui/prt-button/prt-button.component";
import { DialogService } from '../../../../core/services/dialog.service';
import { ArticleContainerComponent } from '../../components/article-container/article-container.component';

@Component({
  selector: 'app-dialog',
  imports: [PrtButton],
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  dialog = inject(DialogService)

  openDialog() {
    this.dialog.openDialog(ArticleContainerComponent)
  }
}
