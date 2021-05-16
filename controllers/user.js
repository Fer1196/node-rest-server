//Request para los query
const { response, request } = require('express');
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario');



const usuariosGet = (req = request, res = response) => {
    //Valores del query enviado
    const { nombre = 'No Name', apellido, appkey, page = 1, limit } = req.query;
    res.json({
        msg: 'get API -controlador',
        nombre,
        apellido,
        appkey,
        page,
        limit
    })
}

const usariosDelete = (req, res = response) => {
    res.json({

        msg: 'DELETE API'
    })
}

const usuariosPUT = (req, res = response) => {


    const { id } = req.params;
    const { password, google, ...resto } = req.body;

    //Validar contra BD
    if (password) {

    }


    res.json({
        msg: 'PUT APIPUT-control',
        id
    })
}

const usuarioPOST = async(req, res = response) => {



    //const { nombre, id } = req.body;

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    //Verificar si el usuario existe
    /*const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        return res.status(404).json({
            error: 'El correo electronico ya existe en BD'
        });
    }*/
    //Encriptar 
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)


    //Para grabar en Mongo
    await usuario.save();

    res.json({

        //msg: 'POST API-PUT API-control',
        usuario
    })
}

module.exports = { usuariosGet, usuariosPUT, usuarioPOST, usariosDelete }