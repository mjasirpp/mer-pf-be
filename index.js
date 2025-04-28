//Loads .env file contents into process.env by default.
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
const path = require('path');
require('./DB/connection')

//Creates an Express application
const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)

pfServer.use('/uploads',express.static('./uploads'))
// pfServer.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const PORT = process.env.PORT || 4000

pfServer.listen(PORT,()=>{
    console.log(`Project Fair Server started at port: ${PORT} and waiting for client requests!!!!`);
})
//http get request resolving to http://localhost:4000/
pfServer.get('/',(req,res)=>{
    res.send(`<h1>Project Fair Server Started and waiting for client requests!!!</h1>`)
})
