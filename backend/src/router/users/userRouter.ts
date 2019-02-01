import Router from "koa-router";
import { addUser, getUsers } from "../../database/helpers/userDbMethods";
import { errorMessages, UserGetData } from "../../types";
import { cleanUserData } from "../helpers/cleanUserData";
import { isUserInitDataValid } from "../helpers/isUserDataValid";

export const usersRouter = new Router({ prefix: "/users" });

usersRouter.get("/", async (ctx, next) => {
  const users = await getUsers();

  const cleanedUsers: UserGetData[] = users.map(cleanUserData);

  ctx.body = { users: cleanedUsers };
});

usersRouter.post("/", async (ctx, next) => {
  const data = ctx.request.body.data as unknown;

  if (!isUserInitDataValid(data)) {
    throw new Error(errorMessages.invalidData);
  }

  const user = await addUser(data);

  const cleanedUser: UserGetData = cleanUserData(user);

  ctx.body = { user: cleanedUser };
});
