import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SelectComponent} from "./select.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ValidatorsErrorModule} from "../validators-error/validators-error.module";

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
    MatSelectModule,
    ValidatorsErrorModule,
  ],
  exports: [SelectComponent],
})
export class SelectModule {}
