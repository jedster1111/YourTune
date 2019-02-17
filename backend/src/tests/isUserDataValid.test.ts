import { isUserInitDataValid } from "../router/helpers/isUserDataValid";
import { createUserInitData } from "./testUtils/createUserInitData";

it("should return true for valid UserInitData", () => {
  expect(isUserInitDataValid(createUserInitData())).toBe(true);
});

it("should return false if data doesn't have all of the required properties", () => {
  expect(isUserInitDataValid({ a: "apple", b: "banana", c: "cucumber" })).toBe(
    false
  );
});

it("should return true if it has the correct properties but extra as well", () => {
  expect(isUserInitDataValid({ ...createUserInitData(), a: "apple" })).toBe(
    true
  );
});
