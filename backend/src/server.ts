import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-pino-logger";

import "reflect-metadata"; // Needed to get TypeORM working
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { rootRouter } from "./router/rootRouter";

import dotenv from "dotenv";
dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const DB_PORT_INT = DB_PORT ? parseInt(DB_PORT, 10) : undefined; // Workaround for typeorm's port typing

if (!DB_PASSWORD) {
  console.log("No password for postgres db was provided!");
}

createConnection({
  type: "postgres",
  host: DB_HOST || "localhost",
  port: DB_PORT_INT || 3306,
  username: DB_USERNAME || "postgres",
  password: DB_PASSWORD,
  database: DB_DATABASE || "postgres",
  entities: [User],
  synchronize: true,
  dropSchema: true,
  logger: "advanced-console",
  logging: "all"
})
  .then(connection => {
    console.log("Connected!");
    connection
      .getRepository(User)
      .save([new User("jedster1111", "jedkey"), new User("mum", "mumkey")]); // insert some starting data for dev purposes
  })
  .catch(error => console.log(error));

const app = new Koa();

const PORT = 8000;

app.use(logger());
app.use(bodyParser());

app.use(rootRouter());

export const server = app.listen(PORT);

console.log(`Server is listening on port ${PORT}`);

// process.on("SIGINT", () => {
//   process.exit();
// });
