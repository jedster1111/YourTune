import Router from "koa-router";
import { getRepository } from "typeorm";
import { User } from "../../database/entity/User";
import {
  getUserBySecretKey,
  setUserLiveStatus
} from "../../database/helpers/userDbMethods";
import { errorMessages } from "../../types";

export const streamAuthRouter = new Router();

streamAuthRouter.post("/on_publish", async (ctx, next) => {
  const usersRepo = getRepository(User);
  const secretKey: string | undefined = ctx.request.body.name;

  if (!secretKey) {
    throw new Error(errorMessages.noSecretKey);
  }

  const userData = await getUserBySecretKey(usersRepo, secretKey);

  if (!userData) {
    throw new Error(errorMessages.noUserFound);
  }

  await setUserLiveStatus(usersRepo, userData.id, "Live");

  ctx.redirect(userData.username); // Not sure if this is the right code to use in this case
});

streamAuthRouter.post("/on_publish_done", async (ctx, next) => {
  const usersRepo = getRepository(User);
  const secretKey: string | undefined = ctx.request.body.name;

  if (!secretKey) {
    throw new Error(errorMessages.noSecretKey);
  }

  const userData = await getUserBySecretKey(usersRepo, secretKey);

  if (!userData) {
    throw new Error(errorMessages.noUserFound);
  }

  await setUserLiveStatus(usersRepo, userData.id, "Offline");
});
