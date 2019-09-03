import {
  NgModule,
  InjectionToken,
  ModuleWithProviders,
  forwardRef
} from "@angular/core";
import { EXTRA_LOGGER_PARAMS, extraLoggingFunc } from "./extra-params";

@NgModule({
  declarations: [],
  imports: [],
  providers: []
})
export class LoggerModule {
  static withExtraParams(extraLog: extraLoggingFunc): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        {
          provide: EXTRA_LOGGER_PARAMS,
          multi: true,
          useValue: extraLog
        }
      ]
    };
  }
}
