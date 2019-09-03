import { Injectable } from "@angular/core";
import { LoggerService } from "projects/logger/src/public-api";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private static loggedInUser: { name: string };

  constructor(private logger: LoggerService) {}

  get username(): string {
    return AuthService.username;
  }

  static get username(): string {
    return AuthService.loggedInUser ? AuthService.loggedInUser.name : "No User";
  }

  get loggedIn(): boolean {
    return !!AuthService.loggedInUser;
  }

  logIn() {
    // This should actually do something to log in a user, but demo...
    AuthService.loggedInUser = { name: "John" };
    this.logger.log("Logging In");
  }

  logOut() {
    // This should actually do something to log out a user, but demo...
    AuthService.loggedInUser = undefined;
    this.logger.log("Logging Out");
  }
}

export function authExtraLogging() {
  return { username: AuthService.username };
}
