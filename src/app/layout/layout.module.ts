import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {LayoutComponent} from "./layout.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NavigationMenuComponent} from "./navigation-menu/navigation-menu.component";
import {NavigationMenuMobileSizeComponent} from "./navigation-menu-mobile-size/navigation-menu-mobile-size.component";
import {LanguageButtonComponent} from "./language-button/language-button.component";
import {ScreenSizeService} from "../shared/services/screen-size.service";
import {MenuService} from "./shared/services/menu.service";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ButtonModule} from "../core/components/button/button.module";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationMenuComponent,
    NavigationMenuMobileSizeComponent,
    LanguageButtonComponent,
  ],
  imports: [
    SharedModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    ButtonModule,
  ],
  exports: [LayoutComponent],
  providers: [ScreenSizeService, MenuService],
})
export class LayoutModule {}
