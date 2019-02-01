import uuid from "uuid/v4";
import { UserInitData } from "../../database/entity/User";

export function createUserInitData(): UserInitData {
  return { username: uuid(), password: "password", secretKey: "secretKey" };
}
