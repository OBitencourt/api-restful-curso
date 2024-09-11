const router = require('express').Router()

const ProductsController = require('../controllers/products')
// VERBOS HTTP (4 TYPES)
// GET - obtain data
// POST - client send data, server receive data
// PUT  - update data
// DELETE - delete data



router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.remove)

module.exports = router