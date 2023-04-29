import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, ReactiveFormsModule, MatSidenavModule],
  exports: [HomeComponent],
})
export class HomeModule {}
