const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./.env") });

setInterval(
  () => io.sockets.emit("message", { message: "Hello everyone!" }),
  10000
);

server.listen(process.env.PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("сервер запущен", process.env.PORT);
});
