import { User, UserInitData } from "../../database/entity/User";
import { addUser } from "../../database/helpers/userDbMethods";

export function createTestData(): UserInitData[] {
  return [
    { username: "jedster1111", password: "jedpassword", secretKey: "jedkey" },
    { username: "mum", password: "mumpassword", secretKey: "mumkey" }
  ];
}

export async function insertTestData(): Promise<User[]> {
  const testData = createTestData();

  const addedUsers: User[] = [];

  for (const userData of testData) {
    const newUser = await addUser(userData);
    addedUsers.push(newUser);
  }

  return addedUsers;
}
