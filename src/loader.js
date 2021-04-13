const mongooseLoader = require('./loaders/mongooseLoader')
const expressLoader = require('./loaders/expressLoader')

async function loader(app){
    await mongooseLoader(app)
    console.log('Mongoose Ready!')
    expressLoader(app)
    console.log('Express Ready!')
}

module.exports = loader