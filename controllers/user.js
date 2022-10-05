const {responde,request} = require('express')
const User = require('../models/user')

const usersGet = (req=request,res=responde)=>{

    const {q,nombre='NONAME',apikey,page=1,limit=10} = req.query//valores por defecto
    res.json({
        msg:"get Api contriolador",
        q,nombre,apikey,
        page,limit
    })
}

const usersPost= async(req,res=responde)=>{

    const body = req.body
    const user = new User(body)

    await user.save()//Grabar en la bbdd


    res.json({
        msg:"post Api contriolador",
        user
    })
}

const usersPut = (req,res=responde)=>{

    const {id} = req.params //Coger valores de la ruta la parte de delante de la ?
    res.json({
        msg:"put Api contriolador",
        id
    })
}

const usersDelete = (req,res=responde)=>{
    res.json({
        msg:"delete Api contriolador"
    })
}

const usersPatch = (req,res=responde)=>{
    res.json({
        msg:"patch Api contriolador"
    })
}


module.exports = {
    usersGet,usersPost,usersPut,usersDelete,usersPatch
}