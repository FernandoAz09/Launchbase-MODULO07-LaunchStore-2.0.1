const express = require("express") //importando a dependencia do express
const nunjucks = require("nunjucks") // Template engine // reuso de códigos // 
const routes = require('./routes') // Criando as rotas de fora do servidor pelo routes.js
const methodOverride = require('method-override')
const session = require('./config/session')


const server = express() // criando um servidor, executando o express como função

//USE = middleware

server.use(session)
server.use(express.urlencoded({ extended: true })) // ojeto + propriendade responsáveis pelo funcionamento do req.body do routes
server.use(express.static('public')) // express observando a pasta "public", para servir o arquivos estáticos
server.use(methodOverride('_method')) // Sobreescrever o tipo do método usado // Vindo antes da rota para funcionar
server.use(routes) // habilitando o servidor para utilizar as rotas

server.set("view engine", "njk") //Configurando a Template Engine //setando o motor de view para NJK (antes como HTML)

nunjucks.configure("src/app/views", { //Configurando o caminho "views" , opções em objeto, usando o express com a variável que ele está utilizando
    express: server,
    autoescape: false, //resolvendo padrão do NUNJUKS de segurar códigos e formatação HTML colocadas nas variáveis
    noCache: true //não guardar CACHE para que possa haver mudança nas classes e ID
})

server.listen(5000, function() { //servidor fica ouvindo a porta 5000 // CALLBACK = função dentro de uma outra função
    console.log("server is running")
})