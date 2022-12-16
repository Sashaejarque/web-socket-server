

const lblEscritorio = document.querySelector('h1');
const handleTicket = document.querySelector('small');
const btnCreate = document.querySelector('button');
const divAlert = document.querySelector('.alert');

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
lblEscritorio.innerText = escritorio;

divAlert.style.display = 'none';

const socket = io();



socket.on('connect', () => {
    btnCreate.disabled = false;

});

socket.on('last-ticket', ( last ) => {
    /* lblNewTicket.innerText = `Ticket ${last}`; */
});

socket.on('disconnect', () => {
    btnCreate.disabled = true;
});





btnCreate.addEventListener( 'click', () => {
    
   socket.emit( 'attendTicket', { escritorio }, ( { ok, ticket, msg }) => {
       if (!ok) {
        handleTicket.innerText = 'Nadie';
        return divAlert.style.display = '';
       }
       handleTicket.innerText = `Ticket ${ticket.number}`;
   });


});
