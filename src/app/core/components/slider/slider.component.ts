import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from "@angular/core";
import KeenSlider, {KeenSliderInstance} from "keen-slider";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: [
    "./slider.component.scss",
    "../../../../../node_modules/keen-slider/keen-slider.min.css",
  ],
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  public timeout: ReturnType<typeof setTimeout>;
  public currentSlide = 0;
  public dotHelper: Array<number> = [];
  public slider: KeenSliderInstance | null = null;

  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>;
  @Output() slideChanged = new EventEmitter<number>();

  constructor(private _translateService: TranslateService) {}

  ngAfterViewInit() {
    this._initSlider();
    this._translateService.onLangChange.subscribe(() => {
      this._restartSlider();
    });
  }

  private _initSlider() {
    this.timeout = setTimeout(() => {
      this.slider = new KeenSlider(
        this.sliderRef.nativeElement,
        {
          initial: this.currentSlide,
          loop: true,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel;
            this.slideChanged.emit(this.currentSlide);
          },
        },
        [(slider) => this.createAutoMove(slider)]
      );
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ];
    });
    Object.values(this.sliderRef.nativeElement.children).forEach((node) => {
      node.classList.add("keen-slider__slide");
    });
  }

  private createAutoMove(slider: KeenSliderInstance) {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearAutoMoveTimeout() {
      clearTimeout(timeout);
    }

    function autoMoveTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 5000);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearAutoMoveTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        autoMoveTimeout();
      });
      autoMoveTimeout();
    });
    slider.on("dragStarted", clearAutoMoveTimeout);
    slider.on("animationEnded", autoMoveTimeout);
    slider.on("updated", autoMoveTimeout);
  }

  private _restartSlider() {
    this._destroySlider();
    this._initSlider();
  }

  private _destroySlider() {
    if (this.slider) this.slider.destroy();
    clearTimeout(this.timeout);
  }

  ngOnDestroy() {
    this._destroySlider();
  }
}
