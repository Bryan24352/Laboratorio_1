const GetdetallesEnvios = (req,res) =>{
    res.send('GET Endpoint para Detalles Envios')
}

module.exports ={
    GetdetallesEnvios
}

const {Router} = require('express');
const {GetdetallesEnvios} = require('.../controllers/detallesEnvios')

const router = ROUTER();

router.get('/', GetdetallesEnvios)
router.post('/',(req,res) => res.send('POST Endpoint para Detalles Envios'))
router.put('/',(req,res) => res.send('Put endpoint para detalles envios'))
router.delete('/',(req,res) => res.send('Delete Endpoint para detalles Envios'))

const {request, response}  = require('express')

const  getDetallesEnvios = (req = request, res = response) => 
       res.send('Get Endpoint para Detalles Envios')

const postDetallesEnvios = (req = request, res = response) =>
       res.send('Post Endpoint para Detalles Envios')

const putDetallesEnvios = (req = request, res = response) =>
       res.send('PUT Endpoint para Detalles Envios')

const deleteDetallesEnvios = (req = request, res = response) =>
      res.send('DELETE Endpoint para Detalles Envios')

module.exports = {
    GetdetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios

}