const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);


        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets();

    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio publico
        this.app.use(express.static('public'));
    }
  
    routes() {
      /*  this.app.use(this.PRODUCT_PATH, require('../routes/products')); */
    }

    sockets() {
        this.io.on('connection', socket => {
            console.log('Cliente conectado', socket.id);

            socket.on('disconnect', () => {
                console.log('Cliente desconectado', socket.id);
            });
        });
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Running on port ${this.port}`);
            console.log(`http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;