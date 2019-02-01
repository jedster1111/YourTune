import Koa from "koa";
import bodyParser from "koa-bodyparser";
// import logger from "koa-pino-logger";

import { rootRouter } from "./router/rootRouter";

export const app = new Koa();

// app.use(logger());
app.use(bodyParser());
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  await next();
});

app.use(rootRouter());
