const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

setInterval(
  () => io.sockets.emit("message", { message: "Hello everyone!" }),
  30000
);
// setInterval(() => io.sockets.emit('message', { message: "Hello everyone!" }), 60000);
server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("сервер запущен");
});
