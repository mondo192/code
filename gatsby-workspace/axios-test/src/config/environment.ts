const development = {
  ENDPOINTS: [
    new URL("https://jsonplaceholder.typicode.com/todos/1"),
    new URL("https://jsonplaceholder.typicode.com/todos/2"),
    new URL("https://jsonplaceholder.typicode.com/todos/3"),
  ]
}

const production = {
  ENDPOINTS: [
    new URL("https://jsonplaceholder.typicode.com/todos/1"),
    new URL("https://jsonplaceholder.typicode.com/todos/2"),
    new URL("https://jsonplaceholder.typicode.com/todos/3"),
  ]
}

export const Environment = process.env.NODE_ENV === "development" ? development : production;