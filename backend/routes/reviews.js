const router = require('express').Router();
const { Reviews } = require('../models')

router.get('/', async (req, res) => {
  let { page, count, sort, product_id } = req.query
  try {
    let reviews = await Reviews.getAll(page, count, sort, product_id)
    res.status(200).json(reviews)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }

})

router.get('/meta', async (req, res) => {
  let { product_id } = req.query;
  try {
    let reviewMetadata = await Reviews.getMetadata(product_id)
    res.status(200).json(reviewMetadata)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
})

router.post('/', async (req, res) => {
  try {
    await Reviews.post(req.body)
    res.sendStatus(201)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
})

router.put('/:review_id/helpful', async (req, res) => {
  let review_id = req.params.review_id
  try {
    await Reviews.updateOneAsHelpful(review_id)
    res.sendStatus(204)
  } catch(err) {
    res.sendStatus(500);
    console.error(err);
  }
})

router.put('/:review_id/report', async (req, res) => {
  let review_id = req.params.review_id
  try {
    await Reviews.updateOneAsReported(review_id)
    res.sendStatus(204)
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
})

module.exports = router;