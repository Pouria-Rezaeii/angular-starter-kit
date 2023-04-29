import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ValidatorsErrorComponent} from "./validators-error.component";

describe("ValidatorsErrorComponent", () => {
  let component: ValidatorsErrorComponent;
  let fixture: ComponentFixture<ValidatorsErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatorsErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidatorsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
