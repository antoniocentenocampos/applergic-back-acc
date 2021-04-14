const express = require('express')
const server = require('./config/config')
const config = require('./config/config')
const loader = require('./loader')


function serverBootstraping(){

//App config
const app = express()
//Si se necesita usar otro puerto  para pruebas usar:
//const PORT = 5005

const server = app.listen(config.server.port)

server.on('listening', function(){
    console.info(`Applergic main server is running on port: ${config.server.port}`)
    loader(app)
})
}

serverBootstraping()