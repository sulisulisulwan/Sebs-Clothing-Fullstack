const db = require('../db/db');
const utils = require('./utils.js');

async function getAll(page, count, sort, product_id) {
    //NEED TO FIX NULL ON EMPTY ARRAY TO BE AN EMPTY ARRAY
    let q = `
      SELECT JSON_OBJECT(
        'product', ${product_id},
        'page', ${page},
        'count', ${count},
        'results', (
          SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
              'review_id', ID,
              'rating', rating,
              'summary', summary,
              'recommend', recommend,
              'response', response,
              'body', body,
              'date', date,
              'reviewer_name', reviewer_name,
              'helpfulness', helpfulness,
              'photos', (
                SELECT JSON_ARRAYAGG(
                  JSON_OBJECT(
                  'id', ID,
                  'url', url
                  )
                ) FROM Review_Photos WHERE review_id = paginatedReviews.ID
              )
            )
          ) FROM (SELECT * FROM Reviews WHERE product_id = ${product_id} LIMIT ${count} OFFSET ${(page * count) - count}) AS paginatedReviews
        )
      ) AS reviews
    `;
  try {
    let reviews = await db.query(q);
    return reviews[0][0];

  } catch(err) {
    return err;
  }
}

async function getMetadata(product_id) {
  try {
    let ratings = await db.query(`SELECT rating, COUNT(1) count FROM Reviews WHERE product_id = ${product_id} GROUP BY rating`)
    let recommend = await db.query(`SELECT recommend, COUNT(1) count FROM Reviews WHERE product_id = ${product_id} GROUP BY recommend`)
    let characteristics = await db.query(`
      SELECT name, characteristic_id, FORMAT(AVG(value), 4) value
      FROM Characteristics C
        INNER JOIN
          Characteristic_Reviews CR
          ON C.id = CR.characteristic_id
          WHERE product_id = ${product_id}
          GROUP BY characteristic_id;
      `);
    let metaData = [ratings, recommend, characteristics];
    let formattedMetaData = {
      product_id: product_id
    }
    metaData.forEach((data, i) => {
      if (i === 0) {
        formattedMetaData.ratings = {}
        data[0].forEach(datum => {
          formattedMetaData.ratings[datum.rating] = datum.count;
        })
      } else if (i === 1) {
        formattedMetaData.recommended = {}
        data[0].forEach(datum => {
          formattedMetaData.recommended[datum.recommend] = datum.count;
        })
      } else {
        formattedMetaData.characteristics = {}
        data[0].forEach(datum => {
          formattedMetaData.characteristics[datum.name] = {}
          formattedMetaData.characteristics[datum.name].value = datum.value
          formattedMetaData.characteristics[datum.name].id = datum.characteristic_id
        })
      }
    });
    return formattedMetaData
  } catch(err) {
    return err;
  }
}

async function post(
  { product_id, rating, summary, body,
    recommend, name, email, photos,
    characteristics}) {
  let v = {
    product_id: product_id,
    rating: rating,
    date: utils.formatDateTimeOfNow(),
    summary: summary,
    body: body,
    recommend: recommend,
    reviewer_name: name,
    reviewer_email: email,
    reported: 0,
    helpfulness: 0,
  }
  try {
    let results = await db.query(`INSERT INTO Reviews SET ?`, v)
    let review_id = results[0].insertId
    await utils.preparePhotosQueriesArray('Review_Photos', review_id, photos)
    return
  } catch(err) {
    return err
  }
}

async function updateOneAsHelpful(review_id) {
  try {
    await db.query(utils.updateHelpfulnessQuery('Reviews', review_id))
    return;
  } catch(err) {
    return err;
  }
}

async function updateOneAsReported(review_id) {
  try {
    await db.query(utils.updateReportQuery('Reviews', review_id))
    return
  } catch(err) {
  return err;
  }
}

module.exports = {
  getAll,
  getMetadata,
  post,
  updateOneAsHelpful,
  updateOneAsReported
}