import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-pino-logger";
import Router from "koa-router";
import { getUserById } from "./data";

const app = new Koa();
const router = new Router();

const PORT = 8000;

router.post("/on_publish", (ctx, next) => {
  const secretKey: string | undefined = ctx.request.body.name;

  if (!secretKey) {
    throw new Error("No secret key found in request!");
  }

  const userData = getUserById(secretKey);

  if (!userData) {
    throw new Error("No user with the provided secret key was found!");
  }

  ctx.redirect(userData.username); // Not sure if this is the right code to use in this case
});

app.use(logger());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

export const server = app.listen(PORT);

console.log(`Server is listening on port ${PORT}`);

process.on("SIGINT", () => {
  process.exit();
});
