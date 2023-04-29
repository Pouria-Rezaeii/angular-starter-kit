import {Component} from "@angular/core";
import {MenuService} from "../shared/services/menu.service";
import {MenuItem} from "../shared/types/menuItem";

@Component({
  selector: "app-navigation-menu",
  templateUrl: "./navigation-menu.component.html",
  styleUrls: ["./navigation-menu.component.scss"],
})
export class NavigationMenuComponent {
  public menuItems: MenuItem[];

  constructor(private _menuService: MenuService) {
    this.menuItems = this._menuService.getMenu();
  }
}
