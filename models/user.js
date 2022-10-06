const {Schema,model} = require('mongoose')

const UserSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatoria']
    },
    rol:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
})
//Sobreescribir metodos video 125 min 6
UserSchema.methods.toJSON = function (){
    const {__v,password,...user} = this.toObject()//user son el resto
    return user
}


module.exports = model('User',UserSchema)