const {Router} = require('express')
const { check } = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {musicGet,musicPost} = require('../controllers/music')

const router = Router()

router.get('/',musicGet)
router.post('/', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],musicPost)

module.exports = router