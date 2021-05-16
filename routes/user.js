const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPUT, usuarioPOST, usariosDelete } = require('../controllers/user');
const { esRoleValido, emailExiste } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const Role = require('../models/rol')

const router = Router();

router.get('/', usuariosGet)


router.put('/:id', usuariosPUT)

//En el segundo se envia los Middlewares de express 
//Se guarda en requ
router.post('/', [
    check('correo', 'El correo no es valido').isEmail(),

    check('password', 'El password es obligatorio mayor de 6').isLength({ min: 6 }),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //check('rol', 'No es un rol').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    //Error personlzado
    check('rol').custom(esRoleValido),
    check('correo').custom(emailExiste),
    validarCampos

], usuarioPOST)


router.delete('/', usariosDelete)

module.exports = router;