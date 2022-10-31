const { v4: uuidv4 } = require('uuid');

class Envios{
    constructor(codigo,fecha,tracking,origen,destino,emisor,destinatario){
    this.id = uuidv4()
     this.id=codigo,
     this.codigo=codigo
     this.fecha=fecha
     this.tracking = tracking
     this.origen=origen
     this.destino=destino
     this.emisor=emisor
     this.destinatario=destinatario
    }

}

class ListadoEnvios{
    constructor(){
        this._listado = {};
    }
    get ListadoArr(){
        const listado =[];
        Object.keys(this._Listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }


 cargarTareasFromArray(  datos = [] ) {
    datos.forEach( envio =>  {
        this._Listado[envio.id] = envio 
    });
  }

  crearEnvio(datos){
    const envio = new Envios(
        datos.codigo,
        datos.fecha,
        datos.tracking,
        datos.origen,
        datos.destino,
        datos.emisor,
        datos.destinatario
    );
    this._listado[envio.id] = envio;
  }
}

module.exports ={
    ListadoEnvios
}