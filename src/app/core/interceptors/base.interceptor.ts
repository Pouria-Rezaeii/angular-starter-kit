import {Injectable} from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  private _copyReq: HttpRequest<unknown>;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._copyReq = request.clone();
    const _url = request.url;

    // Tweak the url or more if you need

    this._copyReq = request.clone({
      url: _url,
    });

    return next.handle(this._copyReq).pipe(
      catchError((err: any) => {
        // this._errorHandlerService.httpErrorHandler(err);
        return throwError(err);
      })
    );
  }
}
