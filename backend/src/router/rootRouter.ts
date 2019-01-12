import combineRouters from "koa-combine-routers";
import { onPublishRouter } from "./on_publish/onPublish";
import { usersRouter } from "./users/user_router";

export const rootRouter = combineRouters(usersRouter, onPublishRouter);
