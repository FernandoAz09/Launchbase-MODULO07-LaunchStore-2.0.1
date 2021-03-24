const session = require('express-session') //LIB INSTALADA
const pgSession = require('connect-pg-simple') (session) //LIB INSTALADA
const db = require('./db') //Necessário para integração

/* CRIANDO A SESSÃO DE USUÁRIO */
/*maxAge: DIAS * HORAS * MINUTOS * SEGUNDOS * MILISSEGUNDOS*/

module.exports = session({
    store: new pgSession({
        pool: db
    }),
    secret: 'iabadabadu',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000 
    }, 

})