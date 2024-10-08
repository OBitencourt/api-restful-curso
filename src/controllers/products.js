const ProductsModel = require('../models/products')

async function get (req, res) {

    const {id} = req.params

    let obj = id ? { _id: id} : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post (req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    console.log(req.body)

    const product = new ProductsModel({
        name, 
        brand,
        price
    })

    product.save()

    res.send({
        message: 'sucess'
    })

}
async function put (req, res) {
    const {id} = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id}, req.body, {new: true})

    res.send({
        message: 'sucess',
        product,
    })

    /* const product = await ProductsModel.findById({ _id: id})

    await product.updateOne(req.body)

    res.send({
        message: 'sucess',
        product,
    }) */
}
async function remove (req, res) {
    const {id} = req.params
 
    const remove = await ProductsModel.deleteOne({_id: id})

    let message = ''

    if(remove.deletedCount == 1) {
        message = 'sucess'
    } else {
        message = 'error'
    }
   
    res.send({
        message,
        remove,
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}