const { Router } = require("express")

Router.get('/',getEnvios)
Router.post('/',postEnvios)
Router.pust('/:id',putEnvios)
Router.delete('/:id',deleteEnvios)

module.exports = Router