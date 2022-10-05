const express = require('express')
const product = require('../routes/productuct')
const user = require('../routes/user')
const cors = require('cors')
class Server {

    constructor(){
        this.app = express()
        this.port =process.env.PORT

        //Middlewares
        this.middlewares()
         //Rutas de la aplicación
        this.routes()
    }

    middlewares(){
        this.app.use(cors())
    }
    
    routes(){
        this.app.use("/api/product",product)
        this.app.use('/api/usuarios',user)
    }

    listen (){
        this.app.listen(this.port , () => console.log(`Server is runing in por ${this.port }`))
    }
}


module.exports = Server