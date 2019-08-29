import { Injectable } from "@angular/core";
import { LoggerService } from "projects/logger/src/public-api";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedInUser: { name: string };

  constructor(private logger: LoggerService) {}

  get username(): string {
    return this.loggedInUser ? this.loggedInUser.name : "No User";
  }

  get loggedIn(): boolean {
    return !!this.loggedInUser;
  }

  logIn() {
    // This should actually do something to log in a user, but demo...
    this.loggedInUser = { name: "John" };
    this.logger.log("Logging In");
  }

  logOut() {
    // This should actually do something to log out a user, but demo...
    this.loggedInUser = undefined;
    this.logger.log("Logging Out");
  }
}
