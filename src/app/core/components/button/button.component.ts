import {Component, EventEmitter, Input, Output} from "@angular/core";

type COLOR = "primary-main" | "primary-dark" | "primary-light" | "secondary";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter();
  @Input() color?: COLOR = "primary-main";
  @Input() size?: "small" | "medium" | "large" = "medium";
  @Input() disabled?: boolean;

  handleClick(event: MouseEvent) {
    this.clicked.emit(event);
  }
}
