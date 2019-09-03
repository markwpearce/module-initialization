import { InjectionToken, Injector } from "@angular/core";

export const EXTRA_LOGGER_PARAMS = new InjectionToken("EXTRA_LOGGER_PARAMS");

export type extraLoggingFunc = () => { [key: string]: any };
