import { rest } from "msw";
import { server } from "../mocks/server";
import { probe } from "./Probe";

describe("Probe", () => {
  it("should return 200 OK", async () => {
    server.use(
      rest.head("https://jsonplaceholder.typicode.com/todos/1", (req, res, ctx) => {
        return res(ctx.status(200, "OK"));
      })
    );

    const result = await probe("https://jsonplaceholder.typicode.com/todos/1");
    expect(result.status).toBe(200);
    expect(result.statusText).toBe("OK");
  });

  it("should return 404 Not Found", async () => {
    server.use(
      rest.head("https://jsonplaceholder.typicode.com/todos/X", (req, res, ctx) => {
        return res(ctx.status(404, "Not Found"));
      })
    );

    const result = await probe("https://jsonplaceholder.typicode.com/todos/X");
    expect(result.status).toBe(404);
    expect(result.statusText).toBe("Not Found");
  });

  it("should throw a Network Error", async () => {
    server.use(
      rest.head("https://jsonplaceholder.typicode.com/todos/1", (req, res, ctx) => {
        return res.networkError("Network Error");
      })
    );

    const result = await probe("https://jsonplaceholder.typicode.com/todos/1");
    expect(result).toThrowError("Network Error");
  });

  it("should timeout after 2 seconds", async () => {
    server.use(
      rest.head("https://jsonplaceholder.typicode.com/todos/1", (req, res, ctx) => {
        return res(ctx.delay(2000));
      })
    );

    const result = await probe("https://jsonplaceholder.typicode.com/todos/1");
  });

});