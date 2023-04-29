import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ScreenSize} from "../../shared/types/screen-size";
import {ScreenSizeService} from "../../shared/services/screen-size.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public screenSize: ScreenSize = "unknown";
  @Output() clickMenuIcon = new EventEmitter();

  constructor(
    private _screenSizeService: ScreenSizeService,
    private _translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this._screenSizeService.screenSize$.subscribe(
      (size) => (this.screenSize = size)
    );
  }

  public toggleDrawer() {
    this.clickMenuIcon.emit();
  }
}
