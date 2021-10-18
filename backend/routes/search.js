const router = require('express').Router();
const { Search } = require('../models')

router.get('/', async (req, res) => {
  try {
    let result = await Search.getProductNameAndId(req.query.search)
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
})

module.exports = router;