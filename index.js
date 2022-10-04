require('dotenv').config()

const Server = require('./models/server')


const server = new Server()
server.listen()

/*
const express = require('express')
const product = require('./api/product')
const app = express()

const PORT = process.env.PORT || 5050

app.use("/api/product",product)

app.listen(PORT, () => console.log(`Server is runing in por ${PORT}`))*/