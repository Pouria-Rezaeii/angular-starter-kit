import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {MenuItem} from "../types/menuItem";

@Injectable()
export class MenuService {
  constructor(private _translate: TranslateService) {}

  public getMenu(): MenuItem[] {
    return [
      {name: "home", translateKey: "navigation.home", route: "/"},
      // {name: "about", translateKey: "navigation.about", route: "/about"},
      // {name: "contact", translateKey: "navigation.contact", route: "/contact"},
    ];
  }
}
