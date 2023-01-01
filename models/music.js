const {Schema,model} = require('mongoose')

const MusicSchema = Schema({
    name:{
        type:String,
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