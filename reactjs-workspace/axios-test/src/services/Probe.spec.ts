import { rest } from "msw";
import { server } from "../mocks/server";
import { probe } from "./Probe";

describe("Probe", () => {
  it("should return 200", async () => {
    const result = await probe("https://jsonplaceholder.typicode.com/todos/1");
    expect(result.status).toBe(200);
  });

  it("should return 404 Not Found", async () => {
    const result = await probe("https://jsonplaceholder.typicode.com/todos/x");
    expect(result.status).toBe(404);
  });
});