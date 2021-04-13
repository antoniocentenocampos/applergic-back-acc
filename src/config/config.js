const config = {
    server:{
        port: process.env.PORT || 5050
    },

    db: {
        uri:process.env.DB_URI,
    }
}

module.exports = config