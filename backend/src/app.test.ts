import { Server } from "http";
import request from "supertest";
import { Connection } from "typeorm";
import { app } from "./app";
import { testSetup, testTearDown } from "./testUtils/testSetUpTearDown";
import { RequestArguments } from "./types";

const secretKey = "jedkey";

let server: Server;
let dbConnection: Connection;

beforeAll(async done => {
  ({ server, dbConnection } = await testSetup(app, { logging: false }));
  done();
});

afterAll(async done => {
  await testTearDown(server, dbConnection);
  done();
});

it("should return a 500 error with no query params", async () => {
  const response = await request(server).post("/on_publish");

  expect(response.status).toBe(500);
});

it("should return a 302 to channel name when secret key is provided", async () => {
  const response = await request(server)
    .post("/on_publish")
    .send({ [RequestArguments.name]: secretKey });

  expect(response.status).toBe(302);
  expect(response.header.location).toBe("jedster1111");
});
