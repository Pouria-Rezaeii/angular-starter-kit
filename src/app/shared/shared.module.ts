import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {BaseInterceptor} from "../core/interceptors/base.interceptor";

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true},
  ],
})
export class SharedModule {}
