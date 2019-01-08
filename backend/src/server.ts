import Koa from "koa";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";
import { getUserById } from "./data";

const app = new Koa();
const router = new Router();

const PORT = 8000;

router.get("/", (ctx, next) => {
  console.log(ctx.query);

  const secretKey: string | undefined = ctx.request.query.name;

  if (!secretKey) {
    throw new Error("No secret key found in request!");
  }

  const userData = getUserById(secretKey);

  if (!userData) {
    throw new Error("No user with the provided secret key was found!");
  }

  ctx.set("Location", userData.username);
  ctx.status = 302; // Not sure if this is the right code to use in this case
});

app.use(bodyParser());

app.use(async (ctx, next) => {
  await next();
  const responseTime = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${responseTime} - ${ctx.status}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes()).use(router.allowedMethods());

export const server = app.listen(PORT);

console.log(`Server is listening on port ${PORT}`);
