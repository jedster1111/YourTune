import { Server } from "http";
import Koa from "koa";
import { Connection } from "typeorm";
import { createDbConnection, DbConfig } from "../database/initDatabase";
import { insertTestData } from "./insertTestData";

/**
 * Creates a server, connects to a database and inserts test data.
 * @returns An object containing the created server and db connection objects.
 */
export async function testSetup(app: Koa<any, {}>, dbConfig?: DbConfig) {
  const server = await startServer(app);
  const dbConnection = await createDbConnection(dbConfig);
  await insertTestData(dbConnection);

  return { server, dbConnection };
}

/**
 * Shuts down the provided server and database connection.
 */
export async function testTearDown(server: Server, dbConnection: Connection) {
  await closeServer(server);
  await dbConnection.close();
}

async function startServer(app: Koa<any, {}>) {
  return new Promise<Server>(resolve => {
    const server = app.listen(() => resolve(server));
  });
}

async function closeServer(server: Server): Promise<void> {
  return new Promise((resolve, reject) => {
    server.close(() => resolve());
  });
}
