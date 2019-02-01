import { Server } from "http";
import request from "supertest";
import { Connection } from "typeorm";
import { app } from "../app";
import { UserInitData } from "../database/entity/User";
import { getUsers } from "../database/helpers/userDbMethods";
import { UserGetData } from "../types";
import { createUserInitData } from "./testUtils/createUserInitData";
import {
  getTestDbConfig,
  testSetup,
  testTearDown
} from "./testUtils/testSetUpTearDown";

let server: Server;
let dbConnection: Connection;

const userKeys: Array<keyof UserGetData> = ["id", "username", "isLive"];

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
  expect(Object.keys(response.body.users[0]).sort()).toEqual(userKeys.sort());
});

it("should allow me to create a user and returns username, isLive and id", async () => {
  const body: { data: UserInitData } = { data: createUserInitData() };
  const response = await request(server)
    .post("/users")
    .send(body)
    .set("Accept", "application/json");

  const { username, isLive } = response.body.user;

  expect(response.status).toBe(200);
  expect({ username, isLive }).toEqual({
    username: body.data.username,
    isLive: false
  });
  expect(typeof response.body.user.id).toBe("number");
});
