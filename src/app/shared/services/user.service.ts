import {Injectable} from "@angular/core";
import {KeycloakService} from "keycloak-angular";
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {User} from "../types/user.type";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import parseJwt from "../utils/jwt-parser";

@Injectable()
export class UserService {
  public loadTokenFromLs$ = new BehaviorSubject<boolean>(false);
  public user$ = new ReplaySubject<User>();
  private _user: User;

  constructor(
    private _keyCloak: KeycloakService,
    private _httpClient: HttpClient
  ) {}

  public async getToken() {
    let _token = "";
    await this._keyCloak
      .getToken()
      .then((token) => {
        _token = token;
        // this is only for development purposes.
        localStorage.setItem("token", token);
      })
      .catch(() => {
        // this is only for development purposes.
        // if keyCloak is disabled in app.module to prevent full reloading on changes, token will be read
        // from local storage which is stored in the previous authentication with keyCloak
        // also in authorization.interceptor will be added to each request header
        if (!environment.production) {
          const localStorageToken = localStorage.getItem("token") || "";
          if (!localStorageToken) {
            window.alert("There is no token in local storage!");
          } else {
            _token = localStorageToken;
            this.loadTokenFromLs$.next(true);
          }
        }
      });
    this._createUserFromToken(_token);
  }

  private _createUserFromToken(token: string) {
    const parsedToken = parseJwt(token);
    this._user = {
      id: parsedToken.sub,
      username: parsedToken.preferred_username || "",
      email: parsedToken.email,
      emailVerified: parsedToken.email_verified,
      roles: parsedToken.realm_access.roles,
    };
    this.user$.next(this._user);
  }
}
