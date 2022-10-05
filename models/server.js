const express = require('express')
const product = require('../routes/product')
const user = require('../routes/user')
const cors = require('cors')
class Server {

    constructor(){
        this.app = express()
        this.port =process.env.PORT
        this.usuariosPath='/api/usuarios'
        this.productPath='/api/product'
        //Middlewares
        this.middlewares()
         //Rutas de la aplicación
        this.routes()
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json())//Serializar a formate JSON
    }
    
    routes(){
        this.app.use(this.usuariosPath,user)
        this.app.use(this.productPath,product)
    }

    listen (){
        this.app.listen(this.port , () => console.log(`Server is runing in por ${this.port }`))
    }
}


module.exports = Server