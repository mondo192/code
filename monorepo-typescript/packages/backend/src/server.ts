import cluster from 'cluster';
import https from 'https';
import { cpus } from 'os';
import process from 'process';
import { app } from './app';

const numOfCpuCores = (cpus().length - 1) / 2;
const options: http.ServerOptions = {

}

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numOfCpuCores; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else if (cluster.isWorker) {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    https.createServer(options, app).listen(8080);

    console.log(`Worker ${process.pid} started`);
}