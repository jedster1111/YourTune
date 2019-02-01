import { User } from "./database/entity/User";

export enum RequestArguments {
  pageUrl = "pageUrl",
  name = "name"
}

export enum errorMessages {
  noSecretKey = "No secret key found!",
  noUserFound = "No user was found!",
  invalidData = "The data you provided is invalid!"
}

export type UserGetData = Pick<User, "id" | "username" | "isLive">;
