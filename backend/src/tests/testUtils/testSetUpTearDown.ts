import { Server } from "http";
import Koa from "koa";
import { Connection } from "typeorm";
import { LoggerOptions } from "typeorm/logger/LoggerOptions";
import { createDbConnection } from "../../database/initDatabase";
import { insertTestData } from "./insertTestData";

export interface TestDbConfig {
  synchronize?: boolean;
  logging?: LoggerOptions;
}

export function getTestDbConfig(): TestDbConfig {
  return { logging: false, synchronize: true };
}

/**
 * Creates a server, connects to a database and inserts test data.
 * @returns An object containing the created server and db connection objects.
 */
export async function testSetup(app: Koa<any, {}>, dbConfig?: TestDbConfig) {
  const server = await startServer(app);
  const dbConnection = await createDbConnection(dbConfig);
  await insertTestData();

  return { server, dbConnection };
}

/**
 * Shuts down the provided server and database connection.
 */
export async function testTearDown(server: Server, dbConnection: Connection) {
  await closeServer(server);
  await dbConnection.close();
}

function startServer(app: Koa<any, {}>) {
  return new Promise<Server>(resolve => {
    const server = app.listen(() => resolve(server));
  });
}

function closeServer(server: Server): Promise<void> {
  return new Promise(resolve => {
    server.close(resolve);
  });
}
