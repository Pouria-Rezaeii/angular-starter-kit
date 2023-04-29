import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {environment} from "../../../environments/environment";
import {IndividualConfig} from "ngx-toastr/toastr/toastr-config";
import {Language} from "../types/language.type";

type Config = Partial<IndividualConfig<unknown>>;

@Injectable()
export class AppToastService {
  private _config: Config = {
    timeOut: environment.toasterTimeOut,
    positionClass: "toast-top-right",
    closeButton: true,
    progressBar: true,
  };

  constructor(
    private _toast: ToastrService,
    private _translate: TranslateService
  ) {
    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if ((event.lang as Language) === "ae")
        this._config.positionClass = "toast-top-left";
    });
  }

  public success(message: string, title?: string, config?: Config) {
    this._toast.success(
      this._translate.instant(message),
      this._translate.instant(title || "message.success"),
      {...this._config, ...config}
    );
  }

  public error(message: string, title?: string, config?: Config) {
    this._toast.error(
      this._translate.instant(message),
      this._translate.instant(title || "message.error"),
      {...this._config, ...config}
    );
  }

  public info(message: string, title: string, config?: Config) {
    this._toast.info(
      this._translate.instant(message),
      this._translate.instant(title || "message.warning"),
      {
        ...this._config,
        ...config,
      }
    );
  }

  public warning(message: string, title?: string, config?: Config) {
    this._toast.warning(
      this._translate.instant(message),
      this._translate.instant(title || "message.warning"),
      {...this._config, ...config}
    );
  }
}
