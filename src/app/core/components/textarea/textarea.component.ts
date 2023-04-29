import {Component, forwardRef, Input} from "@angular/core";
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: "app-textarea",
  templateUrl: "./textarea.component.html",
  styleUrls: ["./textarea.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  public value: string | null = null;
  public disabled = false;

  @Input() label = "";
  @Input() labelKey?: string;
  @Input() placeholder = "";
  @Input() placeholderKey?: string;
  @Input() formControlName: string;
  @Input() formGroup: FormGroup;
  @Input() rows: string | number | null = null;
  @Input() maxlength: string | number | null = null;

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
