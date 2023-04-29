import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [CommonModule, RouterModule, TranslateModule, MatButtonModule],
})
export class SharedModule {}
