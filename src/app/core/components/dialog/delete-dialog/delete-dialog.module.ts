import {NgModule} from "@angular/core";
import {DeleteDialogComponent} from "./delete-dialog.component";
import {SharedModule} from "../../../../shared/shared.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [DeleteDialogComponent],
  imports: [SharedModule, MatDialogModule, MatCardModule],
  exports: [DeleteDialogComponent, MatDialogModule],
})
export class DeleteDialogModule {}
