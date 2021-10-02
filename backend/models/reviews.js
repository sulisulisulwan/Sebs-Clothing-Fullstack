const db = require('../db/db');
const utils = require('./utils.js');

const getAll = (page, count, sort, product_id) => {
  return new Promise ((resolve, reject) => {

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
    `
    db.query(q)
      .then(reviews => {
        resolve(reviews[0][0])
      })
      .catch(err => {
        console.error(err);
        reject(err);
      })
  })
  /*
  {


Parameter	Type	Description
page	integer	Selects the page of results to return. Default 1.
count	integer	Specifies how many results per page to return. Default 5.
sort	text	Changes the sort order of reviews to be based on "newest", "helpful", or "relevant"
product_id	integer	Specifies the product for which to retrieve reviews.




    "product": "2",
    "page": 0,
    "count": 5,
    "results": [
      {
        "review_id": 5,
        "rating": 3,
        "summary": "I'm enjoying wearing these shades",
        "recommend": false,
        "response": null,
        "body": "Comfortable and practical.",
        "date": "2019-04-14T00:00:00.000Z",
        "reviewer_name": "shortandsweeet",
        "helpfulness": 5,
        "photos": [{
            "id": 1,
            "url": "urlplaceholder/review_5_photo_number_1.jpg"
          },
          {
            "id": 2,
            "url": "urlplaceholder/review_5_photo_number_2.jpg"
          },
          // ...
        ]
      },
      {
        "review_id": 3,
        "rating": 4,
        "summary": "I am liking these glasses",
        "recommend": false,
        "response": "Glad you're enjoying the product!",
        "body": "They are very dark. But that's good because I'm in very sunny spots",
        "date": "2019-06-23T00:00:00.000Z",
        "reviewer_name": "bigbrotherbenjamin",
        "helpfulness": 5,
        "photos": [],
      },
      // ...
    ]
  }

*/
}

const getMetadata = (product_id) => {
  return new Promise ((resolve, reject) => {
    let ratings = db.query(`SELECT rating, COUNT(1) count FROM Reviews WHERE product_id = ${product_id} GROUP BY rating`)
    let recommend = db.query(`SELECT recommend, COUNT(1) count FROM Reviews WHERE product_id = ${product_id} GROUP BY recommend`)
    let characteristics = db.query(`
      SELECT name, characteristic_id, FORMAT(AVG(value), 4) value
      FROM Characteristics C
        INNER JOIN
          Characteristic_Reviews CR
          ON C.id = CR.characteristic_id
          WHERE product_id = ${product_id}
          GROUP BY characteristic_id;
      `);
    return Promise.all([ratings, recommend, characteristics])
      .then(metaData => {
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
        })
        resolve(formattedMetaData);
      })
      .catch(err => {
        reject(err)
      })
  })
  // product_id	integer	Required ID of the product for which data should be returned

  /*
  {
    "product_id": "2",
    "ratings": {
      2: 1,
      3: 1,
      4: 2,
      // ...
    },
    "recommended": {
      0: 5
      // ...
    },
    "characteristics": {
      "Size": {
        "id": 14,
        "value": "4.0000"
      },
      "Width": {
        "id": 15,
        "value": "3.5000"
      },
      "Comfort": {
        "id": 16,
        "value": "4.0000"
      },
      // ...
  }

  */

}

const post = (
  { product_id, rating, summary, body,
    recommend, name, email, photos,
    characteristics}) => {
  return new Promise((resolve, reject) => {
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

    return db.query(`INSERT INTO Reviews SET ?`, v)
      .then(results => {
        let review_id = results[0].insertId
        Promise.all(utils.preparePhotosQueriesArray('Review_Photos', review_id, photos))
      })
      .then(_=> {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  })
/*

  Parameter	Type	Description
  product_id	integer	Required ID of the product to post the review for
  rating	int	Integer (1-5) indicating the review rating
  summary	text	Summary text of the review
  body	text	Continued or full text of the review
  recommend	bool	Value indicating if the reviewer recommends the product
  name	text	Username for question asker
  email	text	Email address for question asker
  photos	[text]	Array of text urls that link to images to be shown
  characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

  */


}

const updateOneAsHelpful = (review_id) => {
  return new Promise((resolve, reject) => {
    return db.query(utils.updateHelpfulnessQuery('Reviews', review_id))
      .then(_=> {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  })
  /*
Updates a review to show it was found helpful.


  Parameter	Type	Description
  reveiw_id	integer	Required ID of the review to update
Response

Status: 204 NO CONTENT
  */

}

const updateOneAsReported = (review_id) => {
  return new Promise((resolve, reject) => {
    return db.query(utils.updateReportQuery('Reviews', review_id))
    .then(_=> {
      resolve();
    })
    .catch(err => {
      reject(err);
    })
  })
  /*
Parameters

Parameter	Type	Description
review_id	integer	Required ID of the review to update
Response

Status: 204 NO CONTENT
  */

}

module.exports = {
  getAll,
  getMetadata,
  post,
  updateOneAsHelpful,
  updateOneAsReported
}