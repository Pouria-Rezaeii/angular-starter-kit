import {NgModule} from "@angular/core";
import {ConfirmDialogComponent} from "./confirm-dialog.component";
import {SharedModule} from "../../../../shared/shared.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [SharedModule, MatDialogModule, MatCardModule],
  exports: [ConfirmDialogComponent, MatDialogModule],
})
export class ConfirmDialogModule {}
