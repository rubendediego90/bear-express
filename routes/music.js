const {Router} = require('express')
const {musicGet,musicPost} = require('../controllers/music')

const router = Router()

router.get('/',musicGet)
router.post('/',musicPost)

module.exports = router