const router = require('express').Router();
const { getProducts, getProductById, getProductStyles, getRelatedProducts } = require('../models/product');

router.get('/', (req, res) => {
  let { page, count } = req.query
  return getProducts(page, count)
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.sendStatus(500)
    })
})

router.get('/:product_id', (req, res) => {
  let { product_id } = req.query;
  return getProductById(product_id)
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      res.sendStatus(500)
    })

})

router.get('/:product_id/styles', (req, res) => {
  let { product_id } = req.query;
  return getProductStyles(product_id)
    .then(productStyles => {
      res.status(200).json(productStyles);
    })
    .catch(err => {
      res.sendStatus(500)
    })

})


router.get('/products/:product_id/related', (req, res) => {
  let { product_id } = req.query;
  return getRelatedProducts(product_id)
    .then(relatedProducts => {
      res.status(200).json(relatedProducts);
    })
    .catch(err => {
      res.sendStatus(500)
    })
})

module.exports = router;