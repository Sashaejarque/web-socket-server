const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;


        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();

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

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Running on port ${this.port}`);
            console.log(`http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;