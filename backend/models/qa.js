const db = require('../db/db')
const utils = require('./utils.js')

async function getQsByProductId(product_id, page, count) {
  try {
    let q = `SELECT COUNT(*) FROM Questions WHERE product_id= ${product_id} AND reported = 0`;
    let resultCount = await db.query(q);
    q = `
      SELECT JSON_OBJECT(
        'product_id', ${product_id},
        'results', (
          SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
              'question_id', id,
              'question_body', body,
              'question_date', date_written,
              'asker_name', asker_name,
              'question_helpfulness', helpful,
              'reported', reported,
              'answers', (
                SELECT JSON_OBJECTAGG(id,
                  JSON_OBJECT(
                    'id', id,
                    'body', body,
                    'date', date_written,
                    'answerer_name', answerer_name,
                    'helpfulness', helpful,
                    'photos', (
                      SELECT JSON_ARRAYAGG(
                        url
                      ) FROM Answers_Photos WHERE answer_id = Answers.id
                    )
                  )
                ) FROM Answers WHERE question_id = NonReportedQs.id AND Answers.reported = 0
              )
            )
          ) FROM (SELECT * FROM Questions WHERE product_id= ${product_id} AND reported = 0 LIMIT ${count} OFFSET ${(page * count) - count}) AS NonReportedQs
        )
      ) AS questions
    `;
    let questions = await db.query(q)
    return questions[0][0].questions;
  } catch(err) {
    return err;
  }
}

async function getAnswersByQId (question_id, page, count) {
  let q = `
    SELECT JSON_OBJECT(
      'question', ${question_id},
      'page', ${page},
      'count', ${count},
      'results', (
        SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'answer_id', id,
            'body', Answers.body,
            'date', Answers.date_written,
            'answerer_name', Answers.answerer_name,
            'helpfulness', Answers.helpful,
            'photos', (
              SELECT JSON_ARRAYAGG(
                JSON_OBJECT(
                  'id', id,
                  'url', url
                )
              ) FROM Answers_Photos WHERE answer_id = Answers.id
            )
          )
        ) FROM Answers WHERE question_id = ${question_id} AND reported = 0
      )
    ) AS answers;
  `;
  try {
    let answers = await db.query(q);
    return answers[0][0].answers;
  } catch(err) {
    return err;

  }
}

async function postQuestion({ body, name, email, product_id}) {
  let q = `
    INSERT INTO
    Questions SET ?
  `;
  let v = {
    product_id: product_id,
    body: body,
    date_written: utils.formatDateTimeOfNow(),
    asker_name: name,
    asker_email: email,
    reported: 0,
    helpful: 0
  }
  try {
    await db.query(q, v)
    return;
  } catch(err) {
    return;
  }
}

async function postAnswer(question_id, { body, name, email, photos }) {
  let v1 = {
    question_id: Number(question_id),
    body: body,
    date_written: utils.formatDateTimeOfNow(),
    answerer_name: name,
    answerer_email: email,
    reported: 0,
    helpful: 0
  }
  try {
    let result = await db.query(`INSERT INTO Answers SET ?`, v1);
    let answer_id = result[0].insertId
    await utils.preparePhotosQueriesArray('Answers_Photos', answer_id, photos)
    return;
  } catch(err) {
    return err;
  }
}

async function updateQuestionAsHelpful(question_id) {
  try {
    await db.query(utils.updateHelpfulnessQuery('Questions', question_id))
    return;
  } catch(err) {
    return err
  }
}

async function reportQuestion (question_id) {
  try {
    await db.query(utils.updateReportQuery('Questions', question_id))
    return
  } catch(err) {
    return err
  }
}

async function updateAnswerAsHelpful(answer_id) {
  try {
    await db.query(utils.updateHelpfulnessQuery('Answers', answer_id))
    return
  } catch(err) {
    return err
  }
}

async function reportAnswer(answer_id) {
  try {
    await db.query(utils.updateReportQuery('Answers', answer_id))
    return
  } catch(err) {
    return err
  }
}

module.exports = {
  getQsByProductId,
  getAnswersByQId,
  postQuestion,
  postAnswer,
  updateQuestionAsHelpful,
  reportQuestion,
  updateAnswerAsHelpful,
  reportAnswer
}