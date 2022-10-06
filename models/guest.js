const {Schema,model} = require('mongoose')

const GuestSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    acompaniantesNombre:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    numAdultos:{
        type:Number,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    numNinios:{
        type:Number,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    alergias:{
        type:String,
        required:[true,'La contraseña es obligatoria']
    },
    bus:{
        type:Boolean,
        default:true
    }
})


module.exports = model('User',GuestSchema)