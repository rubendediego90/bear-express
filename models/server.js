const express = require('express')
const product = require('../api/product')
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
        this.app.use("/api/product",product)
    }
   
    routes(){
        this.app.get('/',(req,res)=>{
            res.send('Hello Wordl')
        })
    }

    listen (){
        this.app.listen(this.port , () => console.log(`Server is runing in por ${this.port }`))
    }
}


module.exports = Server