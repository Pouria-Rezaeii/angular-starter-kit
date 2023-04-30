import {NgModule, isDevMode} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ServiceWorkerModule} from "@angular/service-worker";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {NgxSpinnerModule} from "ngx-spinner";
import {ToastrModule} from "ngx-toastr";

import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {LayoutModule} from "./layout/layout.module";
import {HomeModule} from "./home/home.module";
import {AppRoutingModule} from "./app-routing.module";
import {MainConfigurationService} from "./shared/services/main-configuration.service";
import {AppToastService} from "./shared/services/app-toast.service";
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";
import {DataTestIdDirective} from "./core/directives/data-test-id.directive";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent, DataTestIdDirective],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
    NgxSkeletonLoaderModule.forRoot({
      animation: "pulse",
      loadingText: "Loading...",
    }),
  ],
  providers: [
    MainConfigurationService,
    AppToastService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
