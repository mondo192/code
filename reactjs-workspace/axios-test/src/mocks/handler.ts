import { rest } from 'msw'

export const handlers = [
  rest.head("https://jsonplaceholder.typicode.com/todos/1", (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.head("https://jsonplaceholder.typicode.com/todos/x", (req, res, ctx) => {
    return res(ctx.status(404))
  }),
];
