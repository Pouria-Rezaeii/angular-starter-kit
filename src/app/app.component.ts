import {Component, OnInit} from "@angular/core";
import {MainConfigurationService} from "./shared/services/main-configuration.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private _mainConfigurationService: MainConfigurationService) {}

  ngOnInit() {
    this._mainConfigurationService.init();
  }
}
