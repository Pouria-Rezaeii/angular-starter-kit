import {Component, forwardRef, Input} from "@angular/core";
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  public value: string | null = null;
  public disabled = false;

  @Input() label = "";
  @Input() labelKey?: string;
  @Input() placeholder = "";
  @Input() placeholderKey?: string;
  @Input() type = "text";
  @Input() formControlName: string;
  @Input() formGroup: FormGroup;

  writeValue(value: string) {
    this.value = value;
  }

  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  onChange() {}

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  onTouched() {}

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
