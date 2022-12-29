const {responde,request} = require('express')
const Music = require('../models/music')

const musicGet =async (req=request,res=responde)=>{

    const {page=0,pageSize=10} = req.query//valores por defecto

    const query = {estado:true}

    const [total,musics] = await Promise.all([
        Music.countDocuments(query),
        Music.find(query)
        .skip(Number(page))
        .limit(Number(pageSize))

    ])

    res.json({total,musics}).status(200)
}

const musicPost= async(req,res=responde)=>{

    const {nombre} = req.body
    const music = new Music({nombre})

    try{
        await music.save()

        res.json(music).status(200)
    }catch(error){
        res.json({
            msg:error,
        })
    }
}

module.exports = {
    musicGet,musicPost
}