import { Server } from "http";
import request from "supertest";
import { Connection } from "typeorm";
import { app } from "../app";
import { getUsers } from "../database/helpers/userDbMethods";
import { RequestArguments } from "../types";
import { getRandomInt } from "./testUtils/getRandomNumber";
import {
  getTestDbConfig,
  testSetup,
  testTearDown
} from "./testUtils/testSetUpTearDown";

let server: Server;
let dbConnection: Connection;

beforeEach(async done => {
  ({ server, dbConnection } = await testSetup(app, getTestDbConfig()));
  done();
});

afterEach(async done => {
  await testTearDown(server, dbConnection);
  done();
});

it("should return a 500 error with no query params", async () => {
  const response = await request(server).post("/on_publish");

  expect(response.status).toBe(500);
});

it("should return a 302 to channel name when secret key is provided", async () => {
  const users = await getUsers();
  const { secretKey, username } = users[getRandomInt(users.length - 1)];

  const response = await request(server)
    .post("/on_publish")
    .send({ [RequestArguments.name]: secretKey });

  expect(response.status).toBe(302);
  expect(response.header.location).toBe(username);
});
