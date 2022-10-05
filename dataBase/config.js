
const mongoose = require('mongoose')

const dbConnection = async () =>{
    const CONECTION_STRING = 'mongodb+srv://user_node_boda:yuTXSKSd9fAQlctq@bodabbdd.tylkgmz.mongodb.net/BodaBBDD'
    try{
       await mongoose.connect(CONECTION_STRING,
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