import { Server } from "http";
import request from "supertest";
import { Connection } from "typeorm";
import { app } from "../app";
// import { testData } from "../testUtils/insertTestData";
import { testSetup, testTearDown } from "../testUtils/testSetUpTearDown";

let server: Server;
let dbConnection: Connection;

beforeAll(async () => {
  ({ server, dbConnection } = await testSetup(app, { logging: false }));
});

afterAll(async () => {
  await testTearDown(server, dbConnection);
});

it("should return an array of users", async () => {
  const response = await request(server).get("/users");

  expect(response.status).toBe(200);
  expect(response.body.channels).toEqual(["test", "hello"]);
});
