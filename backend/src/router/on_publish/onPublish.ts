import Router from "koa-router";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export const onPublishRouter = new Router({ prefix: "/on_publish" });

onPublishRouter.post("/", async (ctx, next) => {
  const usersRepo = getRepository(User);
  const secretKey: string | undefined = ctx.request.body.name;

  if (!secretKey) {
    throw new Error("No secret key found in request!");
  }

  const userData = await usersRepo.findOne({ secretKey });

  if (!userData) {
    throw new Error("No user with the provided Id was found!");
  }

  ctx.redirect(userData.username); // Not sure if this is the right code to use in this case
});
