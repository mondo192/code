"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const http_1 = __importDefault(require("http"));
const os_1 = require("os");
const process_1 = __importDefault(require("process"));
const app_1 = require("./app");
const numOfCpuCores = ((0, os_1.cpus)().length - 1) / 2;
if (cluster_1.default.isPrimary) {
    console.log(`Primary ${process_1.default.pid} is running`);
    // Fork workers.
    for (let i = 0; i < numOfCpuCores; i++) {
        cluster_1.default.fork();
    }
    cluster_1.default.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}
else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http_1.default.createServer(app_1.app).listen(8080);
    console.log(`Worker ${process_1.default.pid} started`);
}
