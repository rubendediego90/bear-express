const {Schema,model} = require('mongoose')

const GuestSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    acompaniantesNombre:{
        type:String,
        default:null
    },
    numAdultos:{
        type:Number,
        default:1
    },
    numNinios:{
        type:Number,
        default:0
    },
    alergias:{
        type:String,
        default:null
    },
    bus:{
        type:Boolean,
        default:false
    },
    observaciones:{
        type:String,
        default:null
    },
    fechaRegistro:{
        type: Date,
		default: Date.now
    }
})
GuestSchema.methods.toJSON = function (){
    const {__v,...guest} = this.toObject()
    return guest
}


module.exports = model('Guest',GuestSchema)