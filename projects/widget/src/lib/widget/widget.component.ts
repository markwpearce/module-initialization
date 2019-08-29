import { Component, OnInit } from "@angular/core";
import { LoggerService } from "projects/logger/src/public-api";

@Component({
  selector: "lib-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"]
})
export class WidgetComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit() {}

  onClick() {
    this.logger.log("Widget was clicked!");
  }
}
