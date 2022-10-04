const express = require("express")
const router = express.Router();

router.get("/",async(req,res)=>{
    try{
        res.json({
            status:200,
            message:"Alfa eres un payaso y Randy Tambien"
        })
    }catch(error){
        console.error(error)
        return res.status(500).send("Server error")
    }
})

module.exports = router