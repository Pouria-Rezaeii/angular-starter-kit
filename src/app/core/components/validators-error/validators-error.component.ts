import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: "app-validators-error",
  templateUrl: "./validators-error.component.html",
  styleUrls: ["./validators-error.component.scss"],
})
export class ValidatorsErrorComponent {
  @Input() key: string;
  @Input() name: string;
  @Input() form: FormGroup;
  @Input() class?: string;

  public shouldValidate =
    (this.fieldControl.dirty || this.fieldControl.touched) &&
    !this.fieldControl.valid;

  get fieldControl() {
    return this.form.controls[this.name];
  }
}
