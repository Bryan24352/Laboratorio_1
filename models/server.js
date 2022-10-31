const express = require ('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app =express()

        this.app.use(cors());

        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));
        this.routes();
    }
}