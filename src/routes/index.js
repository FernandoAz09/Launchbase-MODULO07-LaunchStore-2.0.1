const express = require('express')
const routes = express.Router() 

const HomeController = require('../app/controllers/HomeController')
const products = require('./products')
const users = require('./users')

//PRODUCTS.JS (arquivo separado para melhor visualização)
routes.use('/products', products)

// HOME
routes.get('/', HomeController.index)

// USERS.JS (arquivo separado para melhor visualização)

routes.use('/users', users)
 
// ALIAS
routes.get('/ads/create', (req, res) => { 
    return res.redirect("/products/create")
})

routes.get('/accounts', (req, res) => { 
    return res.redirect("/users/login")
})



module.exports = routes 