import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TextareaComponent} from "./textarea.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {ValidatorsErrorModule} from "../validators-error/validators-error.module";

@NgModule({
  declarations: [TextareaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ValidatorsErrorModule,
  ],
  exports: [TextareaComponent],
})
export class TextareaModule {}
