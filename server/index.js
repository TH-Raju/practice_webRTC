import express from "express";
import json from "body-parser";
import { Server } from "socket.io";

const io = new Server({
  cors: true,
});
const app = express();

// Middleware
app.use(json());

const emailToSocketMapping = new Map();

io.on("connection", (socket) => {
  console.log("New Connection");
  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log("User ", emailId, " Joined Room ", roomId);
    emailToSocketMapping.set(emailId, socket.id);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });
});

app.listen(8000, () => console.log(`HTTP Server running on port 8000`));
io.listen(8001);
