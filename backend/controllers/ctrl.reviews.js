const { Reviews } = require('../models')

const getAllReviewsByProductId = async (req, res) => {
  let { page, count, sort, product_id } = req.query
  try {
    let reviews = await Reviews.getAll(page, count, sort, product_id)
    res.status(200).json(reviews)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getReviewMetaDataByProductId = async (req, res) => {
  let { product_id } = req.query;
  try {
    let reviewMetadata = await Reviews.getMetadata(product_id)
    res.status(200).json(reviewMetadata)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const postReview = async (req, res) => {
  try {
    await Reviews.post(req.body)
    res.sendStatus(201)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const updateReviewAsHelpful = async (req, res) => {
  let review_id = req.params.review_id
  try {
    await Reviews.updateOneAsHelpful(review_id)
    res.sendStatus(204)
  } catch(err) {
    res.sendStatus(500);
    console.error(err);
  }
};

const updateReviewAsReported = async (req, res) => {
  let review_id = req.params.review_id
  try {
    await Reviews.updateOneAsReported(review_id)
    res.sendStatus(204)
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllReviewsByProductId,
  getReviewMetaDataByProductId,
  postReview,
  updateReviewAsHelpful,
  updateReviewAsReported
}