const {Schema,model} = require('mongoose')

const MusicSchema = Schema({
    name:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    title:{
        type:String
    },
    id:{
        type:String
    }
})
MusicSchema.methods.toJSON = function (){
    const {__v,...music} = this.toObject()
    return music
}


module.exports = model('Music',MusicSchema)