import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ValidatorsErrorComponent} from "./validators-error.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [ValidatorsErrorComponent],
  exports: [ValidatorsErrorComponent],
  imports: [CommonModule, MatFormFieldModule, TranslateModule],
})
export class ValidatorsErrorModule {}
