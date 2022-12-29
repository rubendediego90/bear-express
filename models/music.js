const {Schema,model} = require('mongoose')

const MusicSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    }
})
MusicSchema.methods.toJSON = function (){
    const {__v,...music} = this.toObject()
    return music
}


module.exports = model('Music',MusicSchema)