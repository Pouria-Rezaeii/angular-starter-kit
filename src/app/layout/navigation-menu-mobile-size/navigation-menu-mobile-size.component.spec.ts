import {ComponentFixture, TestBed} from "@angular/core/testing";

import {NavigationMenuMobileSizeComponent} from "./navigation-menu-mobile-size.component";

describe("NavigationMenuMobileSizeComponent", () => {
  let component: NavigationMenuMobileSizeComponent;
  let fixture: ComponentFixture<NavigationMenuMobileSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationMenuMobileSizeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationMenuMobileSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
