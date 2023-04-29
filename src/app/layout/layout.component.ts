import {Component, OnInit} from "@angular/core";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {StorageService} from "../shared/services/storage.service";
import {Language} from "../shared/types/language.type";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  public dir: "ltr" | "rtl";

  constructor(private _translateService: TranslateService) {}

  ngOnInit() {
    const storageLang = StorageService.getLanguage();
    this._assignDirection(storageLang);
    this._translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this._assignDirection(event.lang as Language);
    });
  }

  private _assignDirection(lang: Language | null) {
    if (lang === "ae") {
      this.dir = "rtl";
    } else {
      this.dir = "ltr";
    }
  }
}
