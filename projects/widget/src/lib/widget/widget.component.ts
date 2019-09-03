import { Component, OnInit, Inject, Optional } from "@angular/core";
import { LoggerService } from "projects/logger/src/public-api";
import { BORDER_COLOR } from "../border-color";

@Component({
  selector: "lib-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"]
})
export class WidgetComponent implements OnInit {
  constructor(
    private logger: LoggerService,
    @Inject(BORDER_COLOR)
    private borderColor: string
  ) {
    this.borderColor = this.borderColor;
  }

  ngOnInit() {}

  onClick() {
    this.logger.log("Widget was clicked!");
  }
}
