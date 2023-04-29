import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {InputComponent} from "./input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {ValidatorsErrorModule} from "../validators-error/validators-error.module";

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ValidatorsErrorModule,
  ],
  exports: [InputComponent],
})
export class InputModule {}
