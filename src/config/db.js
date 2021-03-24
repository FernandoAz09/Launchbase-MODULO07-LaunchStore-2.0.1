const { Pool } = require("pg") // Chamando o banco de dados 

module.exports = new Pool({ //Configurando o banco de dados
    user:'postgres',
    password:"543210",
    host: "localhost",
    port: 5432,
    database:"launchstoredb"
        
})
