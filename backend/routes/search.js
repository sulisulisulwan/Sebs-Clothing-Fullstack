const router = require('express').Router();
const { Search } = require('../models')

router.get('/', async (req, res) => {
  try {
    let searchResults = await Search.getProductNameAndId(req.query.search)
    searchResults = searchResults.filter((result, i) => {
      if (i === 0) {
        return true;
      }
      if (result.name === searchResults[i - 1].name) {
        return false;
      }
      return true;
    })
    res.status(200).json(searchResults);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
})

router.get('/exact', async(req, res) => {
  try {
    let isExact = await Search.getProductByName(req.query.search);
    return res.status(200).json(isExact);
  } catch(err) {
    console.error(err)
  }
})

module.exports = router;