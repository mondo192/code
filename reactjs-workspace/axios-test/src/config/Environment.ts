const development = {
  data: {
    ENDPOINTS: [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/X",
      "https://jsonplaceholder.typicode.com/todos/3",
    ]
  }
}

const production = {
  data: {
    ENDPOINTS: [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/2",
      "https://jsonplaceholder.typicode.com/todos/3",
    ]
  }
}

export const Environment = process.env.NODE_ENV === "development" ? development : production;