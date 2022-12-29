const {responde,request} = require('express')
const Music = require('../models/music')

const musicGet =async (req=request,res=responde)=>{

    const [total,musics] = await Promise.all([
        Music.countDocuments(),
        Music.find()

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