const router = require('express').Router()

const ProductsController = require('../controllers/products')
// VERBOS HTTP (4 TYPES)
// GET - obtain data
// POST - client send data, server receive data
// PUT  - update data
// DELETE - delete data



router.get('/products', ProductsController.get)
// router.post('/product', ProductsController.post)
// router.put('/product/:id', ProductsController.put)
// router.delete('/product/:id', ProductsController.delete)

module.exports = router