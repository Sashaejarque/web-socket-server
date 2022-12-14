const socketController = socket => {

        socket.on('send-message', (payload, callback) => {
            console.log('esto se ejecuta')
            const id = 123456;
            callback(id);
            socket.broadcast.emit('send-message', payload);
        });
};

module.exports = {
    socketController
};