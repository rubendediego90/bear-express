
const mongoose = require('mongoose')

const dbConnection = async () =>{
    try{
       await mongoose.connect(process.env.CONECTION_STRING,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            //useCreateIndex:true,
            //useFindAndModify:false
        })

        console.log('BBDD conectada')

    }catch(error){
        console.log(error)
        throw new Error('Error a la hora de inicializar la bbdd')
    }

}

module.exports = {dbConnection}