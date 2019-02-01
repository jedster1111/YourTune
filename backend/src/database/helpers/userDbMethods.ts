import { getRepository, Repository } from "typeorm";
import { hashPassword } from "../../auth/authHelpers";
import { User, UserInitData } from "../entity/User";

export function getUsers(): Promise<User[]> {
  const users = getRepository(User).find();
  return users;
}

export function getUserById(id: number): Promise<User | undefined> {
  const user = getRepository(User).findOne({ id });
  return user;
}

export function getUserBySecretKey(
  userRepo: Repository<User>,
  secretKey: string
): Promise<User | undefined> {
  const user = userRepo.findOne({ where: { secretKey } });

  return user;
}

export function getUserByUsername(username: string): Promise<User | undefined> {
  const user = getRepository(User).findOne({ username });
  return user;
}

export function setUserLiveStatus(
  userRepo: Repository<User>,
  userId: number,
  newStatus: "Live" | "Offline"
) {
  // userData.isLive = newStatus === "Live" ? true : false;

  return userRepo.update(userId, {
    isLive: newStatus === "Live" ? true : false
  });
}

export async function addUser(data: UserInitData): Promise<User> {
  const hashedPassword = await hashPassword(data.password);
  const user = new User({ ...data, password: hashedPassword });
  const newUser = getRepository(User).save(user);

  return newUser;
}
