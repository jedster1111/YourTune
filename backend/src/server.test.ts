import request from "supertest";
import { server } from "./server";
import { RequestArguments } from "./types";

const secretKey = "jedkey";

afterEach(() => {
  server.close();
});

it("should return a 500 error with no query params", async () => {
  const response = await request(server).post("/");

  expect(response.status).toBe(500);
});

it("should return a 302 when there is correct pageUrl redirect", async () => {
  const response = await request(server)
    .post("/")
    .send({ [RequestArguments.name]: secretKey });

  expect(response.status).toBe(302);
  expect(response.header.location).toBe("jedster1111");
});
