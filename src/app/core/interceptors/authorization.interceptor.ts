import {Injectable} from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import {from, mergeMap, Observable} from "rxjs";
import {KeycloakService} from "keycloak-angular";
import {environment} from "../../../environments/environment";

export const InterceptorSkipHeader = "X-Skip-Interceptor";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private readonly keycloak: KeycloakService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.headers.has(InterceptorSkipHeader)) {
      const headers = request.headers.delete(InterceptorSkipHeader);
      return next.handle(request.clone({headers}));
    }

    return this._getToken().pipe(
      mergeMap((token) => {
        request = request.clone({
          setHeaders: {Authorization: `Bearer ${token}`},
        });
        return next.handle(request);
      })
    );
  }

  private _getToken() {
    return from(
      new Promise((resolve) => {
        this.keycloak
          .getToken()
          .then((token) => {
            if (!token) {
              resolve(null);
            } else {
              resolve(token);
            }
          })
          .catch(() => {
            // this is only for development purposes.
            // if keyCloak is disabled in app.module to prevent full reloading on changes,
            // token will be read from local storage which is stored there in user service
            if (!environment.production) {
              return resolve(localStorage.getItem("token"));
            }
            return resolve(null);
          });
      })
    );
  }
}
