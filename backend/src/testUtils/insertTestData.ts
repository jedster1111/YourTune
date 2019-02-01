import { Connection } from "typeorm";
import { User } from "../entity/User";

export const testData = [
  new User("jedster1111", "jedkey"),
  new User("mum", "mumkey")
];

export async function insertTestData(connection: Connection) {
  return await connection.getRepository(User).save(testData);
}
