const {Router} = require('express')
const {usersGet,usersPost,usersPut,usersPatch,usersDelete} = require('../controllers/user')

const router = Router()

router.get('/',usersGet)//mandamos la referencia, no la ejecutamos al no poner los ()
router.post('/',usersPost)
router.put('/:id',usersPut)//para pasar datos desde la ruta
router.delete('/',usersDelete)
router.patch('/',usersPatch)


module.exports = router