const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// const { readFileSync } = require("fs");
// const { createServer } = require("https");
// const httpServer = createServer({
//     key: readFileSync("/path/to/my/key.pem"),
//     cert: readFileSync("/path/to/my/cert.pem")
//   });
// const io = new Server(httpServer, { /* options */ });
// httpServer.listen(3000);

const { Server } = require("socket.io");
const io = new Server(server);


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });

    socket.broadcast.emit('hi');
});
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets


server.listen(3000, () => {
  console.log('listening on *:3000');
});