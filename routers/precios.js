const {Router} = requiere('express')

const router = Router();

router.app.get('/precios',(req,res) = res.send('Endpoint para precios'))
router.app.post('/pecios',(req,res) = res.send('Post Endpoint para precios'))
router.app.put('/precios',(req,res) = res.send('PUT Endpoint paraPrcios'))
router.app.delete('/precios',(req,res) = res.send('DELETE Endpoint para precios'))

module.exports= router