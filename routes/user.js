const { Router } = require('express')
const { usuariosGet, usuariosPUT, usuarioPOST, usariosDelete } = require('../controllers/user')

const router = Router();

router.get('/', usuariosGet)


router.put('/:id', usuariosPUT)


router.post('/', usuarioPOST)


router.delete('/', usariosDelete)

module.exports = router;