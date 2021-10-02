const db = require('../db/db')

const formatDateTimeOfNow = () => {
  let date = new Date().toISOString().split('T');
  return date[0] + ' ' + date[1].substring(0, 8);
}

const preparePhotosQueriesArray = (table, reference_id, photos) => {
  let idKey = table === 'Answers_Photos' ? 'question_id' : 'review_id'
  let photoQueries = []
  photos.forEach(photoUrl => {
    let v = {}
    v[idKey]= reference_id
    v.url = photoUrl
    photoQueries.push(db.query(`INSERT INTO ${table} SET ?`, v))
  })
  return photoQueries;
}

const updateReportQuery = (table, id) => {
  return `UPDATE ${table} SET reported = 1 WHERE id = ${id}`;
}
const updateHelpfulnessQuery = (table, id) => {
  return `UPDATE ${table} SET helpfulness = helpfulness + 1 WHERE id = ${id}`;
}


module.exports = {
  formatDateTimeOfNow,
  updateReportQuery,
  updateHelpfulnessQuery,
  preparePhotosQueriesArray
}