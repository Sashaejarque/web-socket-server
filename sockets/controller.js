const Tickets = require("../models/Ticket-control");

const ticketControl = new Tickets();

const socketController = socket => {

    socket.emit('last-ticket', ticketControl.last);

        socket.on('nextTicket', (payload, callback) => {
            const next = ticketControl.next();
            callback(next);
        });

    socket.on('attendTicket', ({ escritorio }, callback) => {
        if(!escritorio){
            return callback({
                ok: false,
                msg: 'El escritorio es obligatorio'
            });
        }

        const ticket = ticketControl.handleTicket(escritorio);

        if (!ticket) {
            return callback({
                ok: false,
                msg: 'Ya no hay tickets'
            });
        } else {
            callback({
                ok: true,
                ticket
            });
        }
    })
};

module.exports = {
    socketController
};