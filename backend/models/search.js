const db = require('../db/db')

async function getProductNameAndId(searchQuery) {
  let q = `
    SELECT id, name, category
    FROM Product
    WHERE name LIKE '${searchQuery}%'
    LIMIT 5;
  `;
  try {
    let result = await db.query(q);
    return result[0];
  } catch(err) {
    return err;
  }
}

module.exports = {
  getProductNameAndId
}