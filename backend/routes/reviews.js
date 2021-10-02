const router = require('express').Router();
const Reviews = require('../models/reviews')

router.get('/', (req, res) => {
  let { page, count, sort, product_id } = req.query
  return Reviews.getAll(page, count, sort, product_id)
    .then(reviews => {
      res.status(200).json(reviews)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

router.get('/meta', (req, res) => {
  let { product_id } = req.query;
  return Reviews.getMetadata(product_id)
    .then(reviewMetadata => {
      res.status(200).json(reviewMetadata)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
  Reviews.post(req.body)
    .then(_=> {
      res.sendStatus(201)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

router.put('/:review_id/helpful', (req, res) => {
  let review_id = req.params.review_id
  Reviews.updateOneAsHelpful(review_id)
    .then(_=> {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

router.put('/:review_id/report', (req, res) => {
  let review_id = req.params.review_id //find the indices
  Reviews.updateOneAsReported(review_id)
    .then(_=> {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

module.exports = router;