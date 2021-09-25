"use strict";
// import cluster from "cluster";
// import http from "http";
// import { app } from "./app";
// import { cpus } from "os";
// import process from "process";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
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
var http_1 = __importDefault(require("http"));
var process_1 = __importDefault(require("process"));
var server = http_1.default
  .createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hello World");
  })
  .listen(3000, function () {
    console.log("Server running on port 3000");
  });
process_1.default.on("SIGTERM", function (code) {
  server.close(function (code) {
    console.log("Process terminated " + code);
  });
});
