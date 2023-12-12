const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/dd'));

server.listen(52273, () => {
    console.log('Server listening on port 52273');
});

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('line', (data) => {
        console.log('Line event received:', data);
        io.sockets.emit('line', data);
    });
});
