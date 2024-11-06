const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;


// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for messages from clients
    socket.on('message', (msg) => {
        console.log('Message received:', msg);
        io.emit('message', msg); // Broadcast to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
