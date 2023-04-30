import {APP_INITIALIZER, NgModule, isDevMode} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ServiceWorkerModule} from "@angular/service-worker";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {NgxSpinnerModule} from "ngx-spinner";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {LayoutModule} from "./layout/layout.module";
import {HomeModule} from "./home/home.module";
import {AppRoutingModule} from "./app-routing.module";
import {MainConfigurationService} from "./shared/services/main-configuration.service";
import {environment} from "../environments/environment";
import {AuthGuard} from "./core/guards/auth.guard";
import {UserService} from "./shared/services/user.service";
import {HasAccessDirective} from "./core/directives/has-access.directive";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.auth.url,
        realm: environment.auth.realm,
        clientId: environment.auth.clientId,
      },
      initOptions: {
        onLoad: "login-required",

        silentCheckSsoRedirectUri:
          window.location.origin + "/assets/silent-check-sso.html",
      },
    });
}

@NgModule({
  declarations: [AppComponent, HasAccessDirective],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    KeycloakAngularModule,
    LayoutModule,
    HomeModule,
    ToastrModule.forRoot(),
    // IMPORTANT: if changing the type, make a change also in app.module and angular.json (style import)
    NgxSpinnerModule.forRoot({type: "ball-scale-multiple"}),
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
    ToastrService,
    UserService,
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
