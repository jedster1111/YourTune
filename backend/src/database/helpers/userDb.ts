import { Repository } from "typeorm";
import { User, UserInitData } from "../entity/User";

export function getUsers(
  userRepo: Repository<User>
): Promise<User[] | undefined> {
  const users = userRepo.find();
  return users;
}

export function getUserById(
  userRepo: Repository<User>,
  id: number
): Promise<User | undefined> {
  const user = userRepo.findOne({ id });
  return user;
}

export function getUserBySecretKey(
  userRepo: Repository<User>,
  secretKey: string
): Promise<User | undefined> {
  const user = userRepo
    .createQueryBuilder("user")
    .addSelect("user.secretKey", "secretKey")
    .where("user.secretKey = :secretKey", { secretKey })
    .getOne();

  return user;
}

export function getUserByName(
  userRepo: Repository<User>,
  username: string
): Promise<User | undefined> {
  const user = userRepo.findOne({ username });
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

export function addUser(
  userRepo: Repository<User>,
  data: UserInitData
): Promise<User> {
  const user = new User(data);
  const newUser = userRepo.save(user);

  return newUser;
}
