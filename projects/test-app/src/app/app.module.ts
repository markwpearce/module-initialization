import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "projects/auth/src/public-api";
import { LoggerModule } from "projects/logger/src/public-api";
import { WidgetModule } from "projects/widget/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    LoggerModule,
    WidgetModule.withBorder("red")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
