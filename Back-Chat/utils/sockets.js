module.exports = function(server, socket) {
  const socketIo = require("socket.io");
  const io = socketIo(server);

  io.on("connection", socket => {
    const { id } = socket.client;
    console.log("socket conection");
    console.log(`User connected: ${id}`);
    socket.on("chat message", ({ Name, data, date }) => {
      io.emit("chat message", { Name, data, date });
      console.log(`${id}: ${data}`);
    });

    socket.on("chat:typing", function(data) {
      socket.broadcast.emit("chat:typing", data);
    });
  });
};
