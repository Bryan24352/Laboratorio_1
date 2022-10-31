require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('hello world')

})

app.listen(process.env.PORT,function(){
    console.log("El puerto esta corriendo el puerto TCP"+ process.env.PORT)
})


