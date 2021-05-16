const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {

    //Los errores de las rutas para veirifcar el email
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);

    }

    //Es cuando pasa la validacion y para que pase con los siguiente midlewares
    next();

}

module.exports = { validarCampos };