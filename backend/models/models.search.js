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
    console.log(err)
    return err;
  }
}

async function getProductByName(searchQuery) {
  let q = `
  SELECT id FROM Product WHERE name = '${searchQuery}';
  `;
  try {
    let result = await db.query(q);
    return !!result[0].length;
  } catch(err) {
    console.error(err)
  }
}

module.exports = {
  getProductNameAndId, getProductByName
}