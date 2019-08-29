import { Injectable } from "@angular/core";
import { AuthService } from "projects/auth/src/public-api";

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  constructor(private auth: AuthService) {}

  log(...args): void {
    console.log(`User: ${this.auth.username}`, ...args);
  }
}
