const {Router} = require('express')
const { check } = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {usersGet,usersPost,usersPut,usersPatch,usersDelete} = require('../controllers/user')
const {esRoleValido,emailExiste,existeUserByID} = require('../helpers/db-validators')

const router = Router()

router.get('/',usersGet)//mandamos la referencia, no la ejecutamos al no poner los ()
router.post('/', [
    check('correo','El valor ingresado no es válido').isEmail(),
    check('correo').custom(emailExiste),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','Password más de 6 caracteres').isLength({min:6}),
    //check('rol','No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRoleValido),//video 125 min 3  (rol)=>esRoleValido (rol)
    validarCampos
],usersPost)//Arrego de middlerwares video 122 de curso node Fernando herrear
router.put('/:id',[
    check('id','No es un ID Válido').isMongoId(),//el id es el de la ruta, no el _id
    check('id').custom(existeUserByID),
    validarCampos
]
,usersPut)//para pasar datos desde la ruta
router.delete('/:id',
[
    check('id','No es un ID Válido').isMongoId(),//el id es el de la ruta, no el _id
    check('id').custom(existeUserByID),
    validarCampos
]
,usersDelete)
router.patch('/',usersPatch)


module.exports = router