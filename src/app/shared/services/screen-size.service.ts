import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ScreenSize} from "../types/screen-size";

// XSmall	(max-width: 599.98px)
// Small	(min-width: 600px) and (max-width: 959.98px)
// Medium	(min-width: 960px) and (max-width: 1279.98px)
// Large	(min-width: 1280px) and (max-width: 1919.98px)
// XLarge	(min-width: 1920px)

@Injectable()
export class ScreenSizeService {
  public screenSize$ = new BehaviorSubject<ScreenSize>("unknown");
  displayNameMap = new Map<string, ScreenSize>([
    [Breakpoints.XSmall, "xSmall"],
    [Breakpoints.Small, "small"],
    [Breakpoints.Medium, "medium"],
    [Breakpoints.Large, "large"],
    [Breakpoints.XLarge, "xLarge"],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe(
        (result: {breakpoints: Record<string, boolean>; matches: boolean}) => {
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              this.screenSize$.next(
                this.displayNameMap.get(query) ?? "unknown"
              );
            }
          }
        }
      );
  }
}
