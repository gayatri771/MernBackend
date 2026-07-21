const {Router} = require('express')
const {getproducts, createProduct, updateproducts, deleteproducts} = require('../controllers/productsController')

let router = Router();

router.post('/', createProduct)
router.get('/', getproducts)
router.put('/:id', updateproducts)
router.delete('/:id', deleteproducts)

module.exports = router



