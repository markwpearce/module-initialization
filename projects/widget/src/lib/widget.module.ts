import { NgModule, ModuleWithProviders } from "@angular/core";
import { WidgetComponent } from "./widget/widget.component";
import { BORDER_COLOR } from "./border-color";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [WidgetComponent],
  imports: [CommonModule],
  exports: [WidgetComponent],
  providers: [
    {
      provide: BORDER_COLOR,
      useValue: "black"
    }
  ]
})
export class WidgetModule {
  static withBorder(color: string): ModuleWithProviders {
    return {
      ngModule: WidgetModule,
      providers: [
        {
          provide: BORDER_COLOR,
          useValue: color
        }
      ]
    };
  }
}
