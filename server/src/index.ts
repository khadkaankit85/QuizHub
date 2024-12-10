import { createServer } from "node:http";
import { Server } from "socket.io";
import express from "express";

const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 3005;

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {});

server.listen(port, () => {
  console.log("server up and running at http://" + hostname + ":" + port);
});
