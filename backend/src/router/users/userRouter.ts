import Router from "koa-router";
import { getRepository } from "typeorm";
import { User } from "../../database/entity/User";
import { getUsers } from "../../database/helpers/userDb";

export const usersRouter = new Router({ prefix: "/users" });

usersRouter.get("/", async (ctx, next) => {
  const users = await getUsers(getRepository(User));

  ctx.body = { channels: users };
});

// usersRouter.post("/", async (ctx, next) => {});
