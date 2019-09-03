import { NgModule } from "@angular/core";
import { LoggerModule } from "projects/logger/src/public-api";
import { authExtraLogging } from "./auth.service";

@NgModule({
  declarations: [],
  imports: [LoggerModule.withExtraParams(authExtraLogging)],
  providers: [],
  exports: []
})
export class AuthModule {}
