import Router from "koa-router";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export const usersRouter = new Router({ prefix: "/users" });

usersRouter.get("/", async (ctx, next) => {
  const users = await getRepository(User).find();

  ctx.body = { users };
});
