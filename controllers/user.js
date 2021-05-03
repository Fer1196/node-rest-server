//Request para los query
const { response, request } = require('express');


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
    res.json({
        msg: 'PUT APIPUT-control',
        id
    })
}

const usuarioPOST = (req, res = response) => {
    const { nombre, id } = req.body;

    res.status(400).json({

        msg: 'POST API-PUT API-control',
        nombre,
        id
    })
}

module.exports = { usuariosGet, usuariosPUT, usuarioPOST, usariosDelete }