const router = require('express').Router();
const { QA } = require('../models')

router.get('/questions', async (req,res) => {
  let { product_id, page, count } = req.query;
  try {
    let questions = await QA.getQsByProductId(product_id, page, count)
    res.status(200).json(questions);
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
})

router.get('/questions/:question_id/answers', async (req, res) => {
  let { question_id } = req.params
  let { page, count } = req.query;
  try {
    let answers = await QA.getAnswersByQId(question_id, page, count)
    res.status(200).json(answers);
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
})

router.post('/questions', async (req ,res) => {
  try {
    await QA.postQuestion(req.body)
    res.sendStatus(201);

  } catch(err) {

    console.error(err);
    res.sendStatus(500);
  }
})


router.post('/questions/:question_id/answers', async (req,res) => {
  let { question_id } = req.params
  try {
    await QA.postAnswer(question_id, req.body)
    res.sendStatus(201);
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
})


router.put('/questions/:question_id/helpful', async (req,res) => {
  let { question_id } = req.params
  try {
    await QA.updateQuestionAsHelpful(question_id)
    res.sendStatus(204)
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
})

router.put('/questions/:question_id/report', async (req,res) => {
  let { question_id } = req.params
  try {
    await QA.reportQuestion(question_id)
    res.sendStatus(204)
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
})



router.put('/answers/:answer_id/helpful', async (req,res) => {
  let { answer_id } = req.params
  try {
    await QA.updateAnswerAsHelpful(answer_id)
    res.sendStatus(204)
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
})


router.put('/answers/:answer_id/report', async (req,res) => {
  let { answer_id } = req.params
  try {
    await QA.reportAnswer(answer_id)
    res.sendStatus(204)

  } catch(err) {
    console.error(err);
    res.sendStatus(500);

  }
})



module.exports = router;