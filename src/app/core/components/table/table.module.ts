import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TableComponent} from "./table.component";
import {MatSortModule} from "@angular/material/sort";
import {TranslateModule} from "@ngx-translate/core";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {SharedModule} from "../../../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule,
    NgxSkeletonLoaderModule,
    MatIconModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
