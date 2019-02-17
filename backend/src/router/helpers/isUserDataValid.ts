import { UserInitData } from "../../database/entity/User";

export const requiredKeys: Array<keyof UserInitData> = [
  "username",
  "password",
  "secretKey"
];

export function isUserInitDataValid(data: unknown): data is UserInitData {
  if (typeof data === "object" && data !== null) {
    for (const key of requiredKeys) {
      if (!data.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  }
  return false;
}

// export const isUserInitDataValid = (data: unknown) =>
//   isObjectWithKeys(requiredKeys, data);

// function isObjectWithKeys<T>(keys: Array<keyof T>, data: unknown): data is T {
//   if (typeof data === "object" && data !== null) {
//     for (const key of keys) {
//       if (!data.hasOwnProperty(key)) {
//         return false;
//       }
//     }
//     if (Object.keys(data).length !== keys.length) {
//       return false;
//     }
//     return true;
//   }
//   return false;
// }
