const User = require('../models/User')

async function post(req, res, next) {
    // check if has all fields
    const keys = Object.keys(req.body)

    for (key of keys) {
          if (req.body[key] == "") {
                return res.render('user/register', {
                    user: req.body,
                    error:'Por favor, preencha todos os campos!'
                })
          }
    }

// check if user exists (email, cpf_cnpj)
    let { email, cpf_cnpj, password, passwordRepeat } = req.body

    cpf_cnpj = cpf_cnpj.replace(/\D/g, "")

    const user = await User.findOne({ 
        where: { email },
        or: { cpf_cnpj }
    })

    if (user) return res.render('user/register', {
        user: req.body,
        error:'Este usuário já existe!'
    })

// check if password match
    if (password != passwordRepeat)
        return res.render('user/register', {
            user: req.body,
            error:'Senhas diferentes ou errada!'
        })

    next()
}

module.exports = {
    post
}