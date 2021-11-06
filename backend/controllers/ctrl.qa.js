const { QA } = require('../models')

const getQuestionsByProductId = async (req,res) => {
  let { product_id, page, count } = req.query;
  try {
    let questions = await QA.getQsByProductId(product_id, page, count)
    res.status(200).json(questions);
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getAnswersByQuestionId = async (req, res) => {
  let { question_id } = req.params
  let { page, count } = req.query;
  try {
    let answers = await QA.getAnswersByQId(question_id, page, count)
    res.status(200).json(answers);
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const postQuestion = async (req ,res) => {
  try {
    await QA.postQuestion(req.body)
    res.sendStatus(201);

  } catch(err) {

    console.error(err);
    res.sendStatus(500);
  }
};


const postAnswer = async (req,res) => {
  let { question_id } = req.params
  try {
    await QA.postAnswer(question_id, req.body)
    res.sendStatus(201);
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
};


const updateQuestionAsHelpful = async (req,res) => {
  let { question_id } = req.params
  try {
    await QA.updateQuestionAsHelpful(question_id)
    res.sendStatus(204)
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const updateQuestionAsReported = async (req,res) => {
  let { question_id } = req.params
  try {
    await QA.reportQuestion(question_id)
    res.sendStatus(204)
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
};



const updateAnswerAsHelpful = async (req,res) => {
  let { answer_id } = req.params
  try {
    await QA.updateAnswerAsHelpful(answer_id)
    res.sendStatus(204)
  } catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
};


const updateAnswerAsReported = async (req,res) => {
  let { answer_id } = req.params
  try {
    await QA.reportAnswer(answer_id)
    res.sendStatus(204)

  } catch(err) {
    console.error(err);
    res.sendStatus(500);

  }
};


module.exports = {
  getQuestionsByProductId,
  getAnswersByQuestionId,
  postQuestion,
  postAnswer,
  updateQuestionAsHelpful,
  updateQuestionAsReported,
  updateAnswerAsHelpful,
  updateAnswerAsReported
};