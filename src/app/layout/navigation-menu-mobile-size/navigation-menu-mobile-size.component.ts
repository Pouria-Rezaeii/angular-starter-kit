import {Component, EventEmitter, Output} from "@angular/core";
import {MenuService} from "../shared/services/menu.service";
import {MenuItem} from "../shared/types/menuItem";

@Component({
  selector: "app-navigation-menu-mobile-size",
  templateUrl: "./navigation-menu-mobile-size.component.html",
  styleUrls: ["./navigation-menu-mobile-size.component.scss"],
})
export class NavigationMenuMobileSizeComponent {
  public menuItems: MenuItem[];
  @Output() clickCloseIcon = new EventEmitter();

  constructor(private _menuService: MenuService) {
    this.menuItems = this._menuService.getMenu();
  }

  public closeDrawer() {
    this.clickCloseIcon.emit();
  }
}
