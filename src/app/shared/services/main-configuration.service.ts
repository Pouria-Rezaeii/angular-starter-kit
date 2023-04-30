import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {StorageService} from "./storage.service";
import {environment} from "../../../environments/environment";
import {Language} from "../types/language.type";
import {UserService} from "./user.service";

@Injectable()
export class MainConfigurationService {
  constructor(
    private _translateService: TranslateService,
    private _userService: UserService
  ) {}

  private _initUser() {
    this._userService.getToken();
  }

  private _initLanguages() {
    const storageLang = StorageService.getLanguage();
    const defaultLang = environment.defaultLanguage;
    const languages: Language[] = ["en", "ae"];

    this._translateService.addLangs(languages);
    if (storageLang) {
      this._translateService.use(storageLang);
    } else {
      this._translateService.use(defaultLang);
    }
  }

  public init() {
    this._initUser();
    this._initLanguages();
  }
}
