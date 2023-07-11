const express = require('express');
const cors    = require('cors');


class Server {


    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/users';
        this.middlewares();
        this.routes();
    }


    middlewares() {

        // Cors
        this.app.use( cors() );

        // Lectura y parseo del Body (cualquier info que venga en el body la serializará a formato JSON)
        this.app.use( express.json() );

        // Directorio público
        this.app.use( express.static('public') );

    }


    routes() {
        this.app.use( this.usuariosPath, require('../routes/user.routes') );
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log( `Servidor corriendo en el puerto ${ this.port }` );
        });
    }


}


module.exports = Server;
