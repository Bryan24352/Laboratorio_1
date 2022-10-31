const{request, response} = require('express')
const{ListadoEnvios} = require('../models/envios')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const getEnvios = (req = request, res =  response) => {

    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadaArr)

}
const postEnvios = (req = request, res = response) => {
      let lista = new ListadoEnvios()
      let datosJSON =   leerDB('envios')
      lista.cargarTareasFromArray(datosJSON)
      lista.crearEnvio(req.body)
      guardarDB(lista.listadaArr,'envios')
      res.send('Registro Creado')
}

const putEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadaArr.map( p => 
        p.id == req.params.id
        ?{"id":p.id,...req.body}
        : P
        );
        guardarDB(datos,'envios')
        res.send('Resgistro Actualizado')
}

const deleteEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.lista.filter(item => item.id !== req.params.id)
    guardarDB(data,'envios')
    res.send('Registro Eliminado')
}