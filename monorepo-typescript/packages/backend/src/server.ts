// import cluster from "cluster";
// import http from "http";
// import { app } from "./app";
// import { cpus } from "os";
// import process from "process";

// const numCPUs = cpus().length;

// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   process.on("SIGINT", () => {
//     cluster.on("exit", (worker, code, signal) => {
//         console.log(`worker ${worker.process.pid} died`);
//       });
//   })

// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http.createServer(app).listen(3000);

//   console.log(`Worker ${process.pid} started`);

// }

import http from "http";
import process from "process";

const server = http.createServer((_, res) => {
  res.writeHead(200);
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

process.on("SIGTERM", (code) => {
  server.close(() => {
    console.log(`Process terminated ${code}`);
    process.exit();
  });
});

process.on("SIGINT", (code) => {
  server.close(() => {
    console.log(`Process terminated ${code}`);
    process.exit();
  });
});
