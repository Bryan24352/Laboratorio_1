require('dotenv').config()
const Server = require('./models/server')

const Server = new Server();
server.listen();

/*
const express = require('express');
const server = require('./models/server');
const app = express()

app.get('/', function(req,res){
    res.send('hello world')

})

app.listen(process.env.PORT,function(){
    console.log("El puerto esta corriendo el puerto TCP"+ process.env.PORT)
})  */
