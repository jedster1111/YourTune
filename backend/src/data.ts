import { Repository } from "typeorm";
import { User } from "./entity/User";

export async function getUserById(
  userRepo: Repository<User>,
  id: number
): Promise<User | undefined> {
  const user = await userRepo.findOne({ id });
  return user;
}

export async function getUserBySecretKey(
  userRepo: Repository<User>,
  secretKey: string
): Promise<User | undefined> {
  const user = await userRepo
    .createQueryBuilder("user")
    .addSelect("user.secretKey", "secretKey")
    .where("user.secretKey = :secretKey", { secretKey })
    .getOne();

  return user;
}

export async function getUserByName(
  userRepo: Repository<User>,
  username: string
): Promise<User | undefined> {
  const user = await userRepo.findOne({ username });
  return user;
}

export async function setUserLiveStatus(
  userRepo: Repository<User>,
  userId: number,
  newStatus: "Live" | "Offline"
) {
  // userData.isLive = newStatus === "Live" ? true : false;

  await userRepo.update(userId, {
    isLive: newStatus === "Live" ? true : false
  });
}

export async function addUser(
  userRepo: Repository<User>,
  username: string,
  secretKey: string
): Promise<User> {
  const user = new User(username, secretKey);
  const newUser = await userRepo.save(user);

  return newUser;
}
