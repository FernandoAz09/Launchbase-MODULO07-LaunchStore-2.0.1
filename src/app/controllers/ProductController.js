const Category = require('../models/Category')
const Product = require('../models/Product')
const File = require('../models/File')

const { formatPrice, date } = require('../../lib/utils')


module.exports = {
      create(req, res) {
            Category.all()
                  .then(function (results) {
                        const categories = results.rows
                        return res.render("products/create.njk", { categories })
                  }).catch(function (err) {
                        throw new Error(err)
                  })
      },
      async post(req, res) {

            const keys = Object.keys(req.body)

            for (key of keys) {
                  if (req.body[key] == "") {
                        return res.send('Por favor, preencha todos os campos!')
                  }
            }

            if (req.files.length == 0)
                  return res.send("Por favor, envie ao menos uma imagem do produto")

            req.body.user_id = req.session.userId
            
            let results = await Product.create(req.body)
            const productId = results.rows[0].id

            const filesPromise = req.files.map(file => File.create({ ...file, product_id: productId }))
            await Promise.all(filesPromise)

            return res.redirect(`/products/${productId}/edit`)


      },
      async show(req, res) {

            let results = await Product.find(req.params.id)
            const product = results.rows[0]

            if (!product) return res.send("Produto não encontrado ou inexistente!")

            const { day, hour, minutes, month } = date(product.updated_at)

            product.published = {
                  day: `${day}/${month}`,
                  hour: `${hour}:${minutes}`
            }

            product.oldPrice = formatPrice(product.old_price)
            product.price = formatPrice(product.price)

            results = await Product.files(product.id)
            const files = results.rows.map(file => ({
                  ...file,
                  src: `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}`
            }))

            return res.render("products/show", { product, files })
      },
      async edit(req, res) {

            let results = await Product.find(req.params.id)
            const product = results.rows[0]

            if (!product) return res.send("Produto não encontrado ou inexistente!")

            product.old_price = formatPrice(product.old_price)
            product.price = formatPrice(product.price)
            //GET Categories
            results = await Category.all()
            const categories = results.rows

            //GET Images
            results = await Product.files(product.id)
            let files = results.rows
            files = files.map(file => ({
                  ...file,
                  src: `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}`
            }))

            return res.render("products/edit.njk", { product, categories, files })

      },
      async put(req, res) {
            const keys = Object.keys(req.body)

            for (key of keys) {
                  if (req.body[key] == "" && key != "removed_files") {
                        return res.send('Por favor, preencha todos os campos!')
                  }
            }

            if (req.files.length != 0) {
                  const newFilesPromise = req.files.map(file =>
                        File.create({ ...file, product_id: req.body.id }))

                  await Promise.all(newFilesPromise)
            }


            if (req.body.removed_files) {
                  const removedFiles = req.body.removed_files.split(",")
                  const lastIndex = removedFiles.length - 1
                  removedFiles.splice(lastIndex, 1)

                  const removedFilesPromise = removedFiles.map(id => File.delete(id))

                  await Promise.all(removedFilesPromise)
            }

            req.body.price = req.body.price.replace(/\D/g, "") //trazendo um numero sem formatação para o banco de dados

            if (req.body.old_price != req.body.price) { // Pegando o preço antigo após edição para trazer o old_price
                  const oldProduct = await Product.find(req.body.id)
                  req.body.old_price = oldProduct.rows[0].price
            }

            await Product.update(req.body)

            return res.redirect(`/products/${req.body.id}`)
      },
      async delete(req, res) {
            await Product.delete(req.body.id)

            return res.redirect("/products/create")
      }
}
