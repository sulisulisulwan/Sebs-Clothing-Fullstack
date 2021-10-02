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
/**

List Questions
GET /qa/questions Retrieves a list of questions for a particular product. This list does not include any reported questions.


Parameters

Parameter	Type	Description
product_id	integer	Specifies the product for which to retrieve questions.
page	integer	Selects the page of results to return. Default 1.
count	integer	Specifies how many results per page to return. Default 5.
Response

Status: 200 OK

{
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]
}

 */
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
 /**
Answers List
Returns answers for a given question. This list does not include any reported answers.
Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question for wich answers are needed
Query Parameters

Parameter	Type	Description
page	integer	Selects the page of results to return. Default 1.
count	integer	Specifies how many results per page to return. Default 5.
Response

Status: 200 OK

{
  "question": "1",
  "page": 0,
  "count": 5,
  "results": [
    {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    },
    {
      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/answer_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/answer_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    // ...
  ]
}





   */
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

 /**

Add a Question
Adds a question for the given product

POST /qa/questions

Body Parameters

Parameter	Type	Description
body	text	Text of question being asked
name	text	Username for question asker
email	text	Email address for question asker
product_id	integer	Required ID of the Product for which the question is posted
Response
   */
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
  /**

Add an Answer
Adds an answer for the given question

POST /qa/questions/:question_id/answers

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to post the answer for
Body Parameters

Parameter	Type	Description
body	text	Text of question being asked
name	text	Username for question asker
email	text	Email address for question asker
photos	[text]	An array of urls corresponding to images to display
Response
   */
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
  /**

Mark Question as Helpful
Updates a question to show it was found helpful.

PUT /qa/questions/:question_id/helpful

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to update
Response

Status: 204 NO CONTENT

   */
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
    /**

Report Question
Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.

PUT /qa/questions/:question_id/report

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to update
Response

   */
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
  /**

   Mark Answer as Helpful
Updates an answer to show it was found helpful.

PUT /qa/answers/:answer_id/helpful

Parameters

Parameter	Type	Description
answer_id	integer	Required ID of the answer to update
Response

Status: 204 NO CONTENT

*/
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
  /**
Report Answer
Updates an answer to show it has been reported. Note, this action does not delete the answer, but the answer will not be returned in the above GET request.

PUT /qa/answers/:answer_id/report

Parameters

Parameter	Type	Description
answer_id	integer	Required ID of the answer to update
Response

Status: 204 NO CONTENT

   */
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