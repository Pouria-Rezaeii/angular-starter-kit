import {Component, OnInit} from "@angular/core";
import {StorageService} from "../../shared/services/storage.service";
import {TranslateService} from "@ngx-translate/core";
import {Language} from "../../shared/types/language.type";

@Component({
  selector: "app-language-button",
  templateUrl: "./language-button.component.html",
  styleUrls: ["./language-button.component.scss"],
})
export class LanguageButtonComponent implements OnInit {
  public languages: Language[];

  constructor(private _translateService: TranslateService) {}

  ngOnInit(): void {
    this.languages = this._translateService.getLangs() as Language[];
  }

  public changeLanguage(language: Language) {
    this._translateService.use(language);
    StorageService.setLanguage(language);
  }
}
