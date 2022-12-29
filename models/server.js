const express = require('express')
const product = require('../routes/product')
const user = require('../routes/user')
const guest = require('../routes/guest')
const music = require('../routes/music')
const cors = require('cors')
const { dbConnection } = require('../dataBase/config')
class Server {

    constructor(){
        this.app = express()
        this.port =process.env.PORT
        this.usuariosPath='/api/usuarios'
        this.productPath='/api/product'
        this.guestPath='/api/guest'
        this.musicPath='/api/music'

        //Conectar BBDD
        this.conectarDB()

        //Middlewares
        this.middlewares()

         //Rutas de la aplicación
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
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
        this.app.use(this.guestPath,guest)
        this.app.use(this.musicPath,music)
    }

    listen (){
        this.app.listen(this.port , () => console.log(`Server is runing in por ${this.port }`))
    }
}


module.exports = Server