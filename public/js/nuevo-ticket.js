const lblNewTicket = document.querySelector('#lblNuevoTicket');
const btnCreate = document.querySelector('button');


const socket = io();



socket.on('connect', () => {
    btnCreate.disabled = false;

});

socket.on('last-ticket', ( last ) => {
    lblNewTicket.innerText = `Ticket ${last}`;
});

socket.on('disconnect', () => {
    btnCreate.disabled = true;
});





btnCreate.addEventListener( 'click', () => {
    
    socket.emit( 'attendTicket', null, ( tkt ) => {
        lblNewTicket.innerText = tkt;
    });

});
