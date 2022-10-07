const {responde,request} = require('express')
const Guest = require('../models/guest')

const guestGet =async (req=request,res=responde)=>{

    const {page=0,pageSize=10} = req.query//valores por defecto

    const query = {estado:true}

    const [total,guests] = await Promise.all([
        Guest.countDocuments(query),
        Guest.find(query)
        .skip(Number(page))
        .limit(Number(pageSize))

    ])

    res.json({total,guests}).status(200)
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

    try{
        const guest = await Guest.findByIdAndUpdate(id,resto)

        res.json(guest).status(200)
    }catch(error){
        res.json(error)
    }
}

const guestDelete = async(req,res=responde)=>{

    const {id} = req.params

    try{
        const guest = await Guest.findByIdAndUpdate(id,resto)

        res.json(guest).status(200)
    }catch(error){
        res.json(error)
    }
}

module.exports = {
    guestGet,guestPost,guestPut,guestDelete
}