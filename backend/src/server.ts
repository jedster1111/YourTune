import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

const PORT = 8000;

router.get("/", (ctx, next) => {
  ctx.body = "Hello World! This is the home page";
});

router.get("/publish-auth", (ctx, next) => {
  const key: string = ctx.request.query.key;
  ctx.body = `This is your key: ${key}`;

  const username = "jedster1111";

  ctx.response.status = 300;
  ctx.set("Location", `/${username}`);
});

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

app.listen(PORT);

console.log(`Server is listening on port ${PORT}`);
