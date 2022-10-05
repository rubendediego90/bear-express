const express = require('express')
const product = require('../api/product')
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
        this.app.use("/api/product",product)
    }
   
    routes(){
        this.app.get('/',(req,res)=>{
            res.json({
                msg:"get Api"
            })
        })

        this.app.put('/',(req,res)=>{
            res.json({
                msg:"put Api"
            })
        })

        this.app.post('/',(req,res)=>{
            res.json({
                msg:"post Api"
            })
        })

        this.app.delete('/',(req,res)=>{
            res.json({
                msg:"delete Api"
            })
        })
    }

    listen (){
        this.app.listen(this.port , () => console.log(`Server is runing in por ${this.port }`))
    }
}


module.exports = Server