import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import {Item} from "./Item.type";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent<T extends string | number | null | undefined>
  implements ControlValueAccessor
{
  public value: T;
  public disabled = false;
  public transformedOptions: Item[] = [];

  @Input() label = "";
  @Input() formControlName: string;
  @Input() formGroup: FormGroup;
  @Input() multiple?: boolean | undefined = false;
  @Input() selectOptionsTranslatePrefix?: string;
  @Output() selectionChange = new EventEmitter<T>();

  // accepts 3 different types. if the type is not equal to Item[], we will transform it as required
  @Input() set options(
    value: (string | number)[] | {id: string; name: string}[] | Item[]
  ) {
    if (value.length) {
      if (typeof value[0] === "string" || typeof value[0] === "number") {
        this.transformedOptions = value.map((i) => ({
          key: String(i),
          value: i as string,
        }));
      } else {
        if ("id" in value[0] && "name" in value[0]) {
          this.transformedOptions = value.map((i) => {
            const item = i as {name: string; id: string};
            return {key: item.name, value: item.id};
          });
        } else {
          this.transformedOptions = value as Item[];
        }
      }
    }
  }

  writeValue(value: T) {
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

  onSelectionChange(event: T) {
    this.selectionChange.emit(event);
  }

  public getTranslationWithPrefix(key: string) {
    if (this.selectOptionsTranslatePrefix) {
      return `${this.selectOptionsTranslatePrefix}.${key}`;
    } else {
      return key;
    }
  }
}
