
const {Router} = require('express')

const {
    GetdetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
} = require('.../controllers/detallesEnvios');

const router = Router();

router.get('/',GetdetallesEnvios)
router.post('/',(req,res) = res.rend('Post Endpoint para detalles envios'))
router.put('/',(req,res) = res.rend('PUT Endpoint para detalles envios'))
router.delete('/',(req,res) = res.rend('Delete Endpoint para detalles envios'))

module.exports = router ();
