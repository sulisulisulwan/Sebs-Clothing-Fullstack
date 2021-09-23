const router = require('express').Router();
const Cart = require('../models/cart')

router.get('/', (req, res) => {

  let cookies = req.cookies;
  Cart.getUserCart(cookies)
    .then(cart => {
      res.status(200).json(cart);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
  Cart.addToCart(cookies, req.body)
    .then(_=> {
      res.sendStatus(201)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router;