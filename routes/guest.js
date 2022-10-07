const {Router} = require('express')
const { check } = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {guestGet,guestPost,guestPut,guestDelete} = require('../controllers/guest')
const {existeGuestByID} = require('../helpers/db-validators')

const router = Router()

router.get('/',guestGet)
router.post('/', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],guestPost)
router.put('/:id',[
    check('id','No es un ID Válido').isMongoId(),
    check('id').custom(existeGuestByID),
    validarCampos
]
,guestPut)
router.delete('/:id',
[
    check('id','No es un ID Válido').isMongoId(),
    check('id').custom(existeGuestByID),
    validarCampos
]
,guestDelete)

module.exports = router