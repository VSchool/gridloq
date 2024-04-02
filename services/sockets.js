const { Server } = require('socket.io');
const { server } = require('../server');
const { UUID } = require('bson');

const io = new Server(server, {
    cors: {
        origin: [process.env.ClIENT_SOCKET_URL]
    }
});

io.on('connection', (socket) => {
    console.log('socket connected: ' + socket.id);
    socket.join('chat-room');
    socket.on('user_join', async payload => {
        socket.data.user = payload.user;
        sockets = await io.in("chat-room").fetchSockets();
        io.to('chat-room').emit('user_joined', { users: sockets.map(s => s.data.user) })
    })

    socket.on('disconnect', () => {
        io.to('chat-room').emit('user_left', {user: socket.data.user})
    })
   
    socket.on('publish_message', payload => io.to('chat-room').emit('message_published', {
        message: {
            text: payload.message,
            sender: payload.user,
            id: new UUID().toJSON()
        }
    }))
})




module.exports = {
    io
}
