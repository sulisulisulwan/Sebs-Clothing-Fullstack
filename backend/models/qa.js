const db = require('../db/db')
const utils = require('./utils.js')

const getQsByProductId = (product_id, page, count) => {
  return new Promise((resolve, reject) => {
    let q = `SELECT COUNT(*) FROM Questions WHERE product_id= ${product_id} AND reported = 0`;
    return db.query(q)
      .then(resultCount => {
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
        return db.query(q)
      })
      .then(questions => {
        resolve(questions[0][0].questions)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const getAnswersByQId = (question_id, page, count) => {
  return new Promise((resolve, reject) => {

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
    return db.query(q)
      .then(answers => {
        resolve(answers[0][0].answers);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      })
  })
}

const postQuestion = ({ body, name, email, product_id}) => {
  return new Promise((resolve, reject) => {
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
    db.query(q, v)
      .then(_=> {
        resolve()
      })
      .then(err => {
        reject()
      })
  })
}

const postAnswer = (question_id, { body, name, email, photos }) => {
  return new Promise((resolve, reject) => {
    let v1 = {
      question_id: Number(question_id),
      body: body,
      date_written: utils.formatDateTimeOfNow(),
      answerer_name: name,
      answerer_email: email,
      reported: 0,
      helpful: 0
    }

    return db.query(`INSERT INTO Answers SET ?`, v1)
      .then(result => {
        let answer_id = result[0].insertId
        return Promise.all(utils.preparePhotosQueriesArray('Answers_Photos', answer_id, photos))
      })
      .then(_=> {
        resolve()
      })
      .catch(err => {
        reject(err)
      })
  })
}

const updateQuestionAsHelpful = (question_id) => {
  return new Promise((resolve, reject) => {
    db.query(utils.updateHelpfulnessQuery('Questions', question_id))
      .then(_=>{
        resolve();
      })
      .catch(err => {
        console.error(err);
        reject(err);
      })
  })
}

const reportQuestion = (question_id) => {
  return new Promise((resolve, reject) => {
    db.query(utils.updateReportQuery('Questions', question_id))
      .then(_=> {
        resolve()
      })
      .catch(err => {
        console.error(err)
        reject(err);
      })
  })
}

const updateAnswerAsHelpful = (answer_id) => {
  return new Promise((resolve, reject) => {
    db.query(utils.updateHelpfulnessQuery('Answers', answer_id))
      .then(_=>{
        resolve();
      })
      .catch(err => {
        console.error(err);
        reject(err);
      })
  })
}

const reportAnswer = (answer_id) => {
  db.query(utils.updateReportQuery('Answers', answer_id))
    .then(_=> {
      resolve()
    })
    .catch(err => {
      console.error(err)
      reject(err);
    })
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