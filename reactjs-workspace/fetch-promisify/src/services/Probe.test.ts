import {probe} from "./Probe";

describe("Probe test", () => {
  test("should return something", async () => {
    const result = await probe("https://jsonplaceholder.typicode.com/todos/1");
    console.log(result);
    expect(result).toBeCalledTimes(1);
  });
});