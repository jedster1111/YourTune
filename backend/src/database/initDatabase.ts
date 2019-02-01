import dotenv from "dotenv";
import "reflect-metadata"; // Needed to get TypeORM working
import { Connection, createConnection } from "typeorm";
import { LoggerOptions } from "typeorm/logger/LoggerOptions";
import { User } from "../entity/User";

export interface DbConfig {
  synchronize?: boolean;
  logging?: LoggerOptions;
}

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
const DB_PORT_INT = DB_PORT ? parseInt(DB_PORT, 10) : undefined; // Workaround for typeorm's port typing

if (!DB_PASSWORD) {
  console.log("No password for postgres db was provided!");
}

export async function createDbConnection(
  config?: DbConfig
): Promise<Connection> {
  return await createConnection({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: DB_PORT_INT || 3306,
    username: DB_USERNAME || "postgres",
    password: DB_PASSWORD,
    database: DB_DATABASE || "postgres",
    entities: [User],
    synchronize: (config && config.synchronize) || true,
    dropSchema: true,
    logger: "advanced-console",
    logging: config && config.logging !== undefined ? config.logging : "all"
  });
}
