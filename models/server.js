require('dotenv').config()

const Server = require('./models/server')
const Server = new Server();

const express = require('express')

class  server{
    constructor(){
        this.app = express()
        this.app.get('/',function(req,res){
            res.send('Hello world')
    
        })
        this.app.liten(process.env.PORT)
             console.log("El puerto esta corriendo el puerto TCP"+ process.env.PORT)
    }
}

module.exports = server