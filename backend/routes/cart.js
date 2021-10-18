const router = require('express').Router();
const { Cart } = require('../models')

router.get('/', async (req, res) => {
  let cookies = req.cookies;
  try {
    let cart = await Cart.getUserCart(cookies)
    res.status(200).json(cart);
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
})

router.post('/', async (req, res) => {
  try {
    await Cart.addToCart(cookies, req.body)
    res.sendStatus(201)
  } catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
})

module.exports = router;