import { Injectable, Inject, Optional, forwardRef } from "@angular/core";
import { EXTRA_LOGGER_PARAMS, extraLoggingFunc } from "./extra-params";

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  constructor(
    @Optional()
    @Inject(EXTRA_LOGGER_PARAMS)
    private extraLogging: extraLoggingFunc[]
  ) {}

  log(...args): void {
    console.log(...args, ...this.getExtraLoggingParams());
  }

  private getExtraLoggingParams() {
    return (this.extraLogging || []).map(extra => extra());
  }
}
