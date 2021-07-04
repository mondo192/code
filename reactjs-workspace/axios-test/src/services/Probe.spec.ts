import { probe } from "./Probe";

describe("Probe", () => {
  it("should return 200 OK", async () => {
    const result = await probe("https://jsonplaceholder.typicode.com/todos/1");
    expect(result.status).toBe(200);
    expect(result.statusText).toBe("OK");

  });

  it("should return 404 Not Found", async () => {
    const result = await probe("https://jsonplaceholder.typicode.com/todos/x");
    expect(result.status).toBe(404);
    expect(result.statusText).toBe("Not Found");
  });

});