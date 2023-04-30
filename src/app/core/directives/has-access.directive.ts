import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import {UserService} from "../../shared/services/user.service";

@Directive({
  selector: "[appHasAccess]",
})
export class HasAccessDirective {
  private _allowedRoles: string[];

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef,
    private _userService: UserService
  ) {}

  @Input()
  set dhlHasAccess(value: string | string[]) {
    typeof value === "string"
      ? (this._allowedRoles = [value])
      : (this._allowedRoles = [...value]);
    this.updateView();
  }

  private updateView() {
    this._userService.user$.subscribe((user) => {
      if (
        this._allowedRoles?.length === 0 ||
        user.roles.some((role) => this._allowedRoles?.includes(role))
      ) {
        this._viewContainerRef.createEmbeddedView(this._templateRef);
      } else {
        this._viewContainerRef.clear();
      }
    });
  }
}
