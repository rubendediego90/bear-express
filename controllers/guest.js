const {responde,request} = require('express')
const Guest = require('../models/guest')

const guestGet =async (req=request,res=responde)=>{

    //const {q,nombre='NONAME',apikey,page=1,limit=10} = req.query//valores por defecto
    const {page=0,pageSize=10} = req.query//valores por defecto

    const query = {estado:true}

    const [total,guests] = await Promise.all([
        Guest.countDocuments(query),
        Guest.find(query)
        .skip(Number(page))//espera un numero
        .limit(Number(pageSize))//espera un numero

    ])

    res.json({
        total,guests
       // q,nombre,apikey,page,limit
    }).status(200)
}

const guestPost= async(req,res=responde)=>{

    const {nombre,acompaniantesNombre,numAdultos,numNinios,alergias,bus,observaciones} = req.body
    const guest = new Guest({nombre,acompaniantesNombre,numAdultos,numNinios,alergias,bus,observaciones})

    try{
        await guest.save()

        res.json(guest).status(200)
    }catch(error){
        res.json({
            msg:error,
        })
    }
}

const guestPut = async (req,res=responde)=>{

    const {id} = req.params 
    const {_id,...resto} = req.body

    const guest = await Guest.findByIdAndUpdate(id,resto)

    res.json(guest).status(200)
}

const guestDelete = async(req,res=responde)=>{

    const {id} = req.params

    //Borrado fisico
    const guest = await Guest.findByIdAndDelete(id)

    res.json(
        guest
    )
}

module.exports = {
    guestGet,guestPost,guestPut,guestDelete
}