const {responde,request} = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/user')

const usersGet =async (req=request,res=responde)=>{

    //const {q,nombre='NONAME',apikey,page=1,limit=10} = req.query//valores por defecto
    const {page=0,pageSize=10} = req.query//valores por defecto

    const query = {estado:true}

    const [total,users] = await Promise.all([
         User.countDocuments(query),
         User.find(query)
        .skip(Number(page))//espera un numero
        .limit(Number(pageSize))//espera un numero

    ])

    res.json({
        total,users
       // q,nombre,apikey,page,limit
    })
}

const usersPost= async(req,res=responde)=>{

    const {nombre,correo,password,rol} = req.body
    const user = new User({nombre,correo,password,rol})

    //Encriptar pass
    const salt = bcryptjs.genSaltSync()//Numero de vueltas para hacer mas complicada la enctriptacion por defecto es 10, cuantas mas vueltas mas tarda
    user.password = bcryptjs.hashSync(password,salt)

    try{
        await user.save()//Grabar en la bbdd

        res.json({
            msg:"post Api contriolador",
            user
        })
    }catch(error){
        res.json({
            msg:error,
        })
    }

}

const usersPut = async (req,res=responde)=>{

    const {id} = req.params //Coger valores de la ruta la parte de delante de la ?
    const {password,google,correo,_id,...resto} = req.body //se saca el id para que no se pueda actualizar

    //Todo Validar contra bbdd
    if(password){
        //Encriptar pass
        const salt = bcryptjs.genSaltSync()//Numero de vueltas para hacer mas complicada la enctriptacion por defecto es 10, cuantas mas vueltas mas tarda
        resto.password = bcryptjs.hashSync(password,salt)
    }

    const user = await User.findByIdAndUpdate(id,resto)

    res.json({
        msg:"put Api contriolador",
        user
    })
}

const usersDelete = async(req,res=responde)=>{

    const {id} = req.params

    //Borrado fisico
    //const user = await User.findByIdAndDelete(id)

    //Borrado logico
    const user = await User.findByIdAndUpdate(id,{estado:false})


    res.json(
        user
    )
}

const usersPatch = (req,res=responde)=>{
    res.json({
        msg:"patch Api contriolador"
    })
}


module.exports = {
    usersGet,usersPost,usersPut,usersDelete,usersPatch
}