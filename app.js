const Server = require('./models/server');

//Para la aribales de entorno
require('dotenv').config();

//Servicico
const server = new Server();


server.listen();