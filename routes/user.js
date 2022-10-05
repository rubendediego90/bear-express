const {Router} = require('express')

const router = Router()

router.get('/',(req,res)=>{
    res.json({
        msg:"get Api"
    })
})

router.put('/',(req,res)=>{
    res.json({
        msg:"put Api"
    })
})

router.post('/',(req,res)=>{
    res.json({
        msg:"post Api"
    })
})

router.delete('/',(req,res)=>{
    res.json({
        msg:"delete Api"
    })
})

module.exports = router