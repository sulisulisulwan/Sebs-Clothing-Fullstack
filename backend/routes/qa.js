const router = require('express').Router();
const QA = require('../models/qa')

router.get('/questions', (req,res) => {
  let { product_id, page, count } = req.query;
  return QA.getQsByProductId(product_id, page, count)
    .then(questions => {
      res.status(200).json(questions);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

router.get('/questions/:question_id/answers', (req, res) => {
  let { question_id } = req.params
  let { page, count } = req.query;
  return QA.getAnswersByQId(question_id, page, count)
    .then(answers => {
      res.status(200).json(answers);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

router.post('/questions', (req ,res) => {
  QA.postQuestion(req.body)
    .then(_=> {
      res.sendStatus(201);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})


router.post('/questions/:question_id/answers', (req,res) => {
  let { question_id } = req.params
  QA.postAnswer(question_id, req.body)
    .then(_=> {
      res.sendStatus(201);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})


router.put('/questions/:question_id/helpful', (req,res) => {
  let { question_id } = req.params
  QA.updateQuestionAsHelpful(question_id)
    .then(_=> {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

router.put('/questions/:question_id/report', (req,res) => {
  let { question_id } = req.params
  QA.reportQuestion(question_id)
    .then(_=> {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})



router.put('/answers/:answer_id/helpful', (req,res) => {
  let { answer_id } = req.params
  QA.updateAnswerAsHelpful(answer_id)
    .then(_=> {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})


router.put('/answers/:answer_id/report', (req,res) => {
  let { answer_id } = req.params
  QA.reportAnswer(answer_id)
    .then(_=> {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})



module.exports = router;