const router = require('express').Router();
const Products = require('../models/product');

router.get('/', (req, res) => {
  let { page, count } = req.query
  return Products.getAll(page, count)
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500)
    })
})

router.get('/:product_id', (req, res) => {
  let product_id = req.url.substring() //find the indices
  return Products.getOne(product_id)
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500)
    })

})

router.get('/:product_id/styles', (req, res) => {
  let product_id = req.url.substring() //find the indices
  return Products.getStyles(product_id)
    .then(productStyles => {
      res.status(200).json(productStyles);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500)
    })

})


router.get('/products/:product_id/related', (req, res) => {
  let product_id = req.url.substring() //find the indices
  return Products.getRelated(product_id)
    .then(relatedProducts => {
      res.status(200).json(relatedProducts);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500)
    })
})

module.exports = router;