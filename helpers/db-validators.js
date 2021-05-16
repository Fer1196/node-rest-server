const Role = require('../models/rol');
const Usuario = require('../models/usuario');


const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error('El Rol no existe en la BD');
    }
}

const emailExiste = async(correo = '') => {

    //Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya esta registrado`);
    }
}



module.exports = { esRoleValido, emailExiste }