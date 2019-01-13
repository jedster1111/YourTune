import combineRouters from "koa-combine-routers";
import { streamAuthRouter } from "./stream_auth/streamAuthRouter";
import { usersRouter } from "./users/userRouter";

export const rootRouter = combineRouters(usersRouter, streamAuthRouter);
