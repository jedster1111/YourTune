import { User } from "../../database/entity/User";
import { UserGetData } from "../../types";

export function cleanUserData(user: User): UserGetData {
  const { id, isLive, username } = user;
  return { id, isLive, username };
}
