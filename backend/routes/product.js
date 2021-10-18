const router = require('express').Router();
const { Product } = require('../models');

router.get('/', async (req, res) => {
  let { page, count } = req.query
  try {
    let products = await Product.getAll(page, count)
    res.status(200).json(products);
  } catch(err) {
    console.error(err);
    res.sendStatus(500)
  }
})

router.get('/:product_id', async (req, res) => {
  let { product_id } = req.params
  try {
    let product = await Product.getOne(product_id)
    res.status(200).json(product);
  } catch(err) {
    console.error(err);
    res.sendStatus(500)
  }
})

router.get('/:product_id/styles', async (req, res) => {
  let { product_id } = req.params
  try {
    let productStyles = await Product.getStyles(product_id)
    res.status(200).json(productStyles);
  } catch(err) {
    console.error(err);
    res.sendStatus(500)
  }
})


router.get('/:product_id/related', async (req, res) => {
  let { product_id } = req.params
  try {
    let relatedProducts = await Product.getRelated(product_id)
    res.status(200).json(relatedProducts);
  } catch(err) {
    console.error(err);
    res.sendStatus(500)
  }
})

module.exports = router;