import { Connection } from "typeorm";
import { User, UserInitData } from "../../database/entity/User";
import { addUser } from "../../database/helpers/userDb";
// import { addUser } from "../../database/helpers/userDb";

export function createTestData(): UserInitData[] {
  return [
    { username: "jedster1111", password: "jedpassword", secretKey: "jedkey" },
    { username: "mum", password: "mumpassword", secretKey: "mumkey" }
  ];
}

export async function insertTestData(connection: Connection): Promise<User[]> {
  const userRepository = connection.getRepository(User);
  const testData = createTestData();

  const addedUsers: User[] = [];

  testData.forEach(async userData => await addUser(userRepository, userData));
  for (const userData of testData) {
    const newUser = await addUser(userRepository, userData);
    addedUsers.push(newUser);
  }

  return addedUsers;

  // await addUser(userRepository, testData[0]);
  // await addUser(userRepository, testData[1]);

  // return await userRepository.save([
  //   new User(testData[0]),
  //   new User(testData[1])
  // ]);
}
