const { validationResult } = require('express-validator')


const validarCampos =(req,res,next)=>{ //next es la funciona que se llama si el middleware pasa
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(400).json(errors)

    next()
}

module.exports = {
    validarCampos
}