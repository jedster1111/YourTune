import { Server } from "http";
import request from "supertest";
import { Connection } from "typeorm";
import { app } from "../app";
import {
  getTestDbConfig,
  testSetup,
  testTearDown
} from "./testUtils/testSetUpTearDown";

let server: Server;
let dbConnection: Connection;

const userKeys = ["id", "username", "isLive"];

beforeEach(async done => {
  ({ server, dbConnection } = await testSetup(app, getTestDbConfig()));
  done();
});

afterEach(async done => {
  await testTearDown(server, dbConnection);
  done();
});

it("/users should return an array of users containing id, username and isLive", async () => {
  const response = await request(server).get("/users");

  expect(response.status).toBe(200);
  expect(Object.keys(response.body.channels[0]).sort()).toEqual(
    userKeys.sort()
  );
});
