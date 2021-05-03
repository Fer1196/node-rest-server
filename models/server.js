const express = require('express')
const cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users'


        //Midelwares
        this.middlewares();

        //Rutas de mi app
        this.routes();

    }
    middlewares() {
        //CORS
        this.app.use(cors())

        //Lectura y parse de body
        this.app.use(express.json())
            //Directorio Publico 
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'))


    }



    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en el puerto', this.port)
        })
    }

}


module.exports = Server;