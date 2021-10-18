const db = require('../db/db')

async function getAll(page, count) {
  let q = `
  SELECT *
  FROM Product
  WHERE id >= ${count * (page - 1) + 1}
  LIMIT ${count};
  `;
  try {
    let products = await db.query(q)
    return (products[0])
  } catch(err) {
    return err;
  }
}

async function getOne(product_id) {
  let q = `
    SELECT JSON_OBJECT(
      'id', Product.id,
      'name', Product.name,
      'slogan', Product.slogan,
      'description', Product.description,
      'category', Product.category,
      'default_price', Product.default_price,
      'features', (
        SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'feature', feature,
            'value', value
          )
        ) FROM Features WHERE product_id = ${product_id}
      )
    ) AS product FROM Product WHERE id = ${product_id};
  `;
  try {
    let product = await db.query(q)
    return product[0][0].product;
  } catch(err) {
    return err;
  }
}

async function getStyles(product_id) {
  let q = `
    SELECT JSON_OBJECT(
      'product_id', ${product_id},
      'results', (
        SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'style_id', Styles.id,
            'name', Styles.name,
            'original_price', Styles.original_price,
            'sale_price', Styles.sale_price,
            'default?', Styles.default_style,
            'skus', (
              SELECT JSON_OBJECTAGG(id,
                JSON_OBJECT(
                  'size', size,
                  'quantity', quantity
                )
              ) FROM SKUs WHERE styleId = Styles.id
            ),
            'photos', (
              SELECT JSON_ARRAYAGG(
                JSON_OBJECT(
                  'url', url,
                  'thumbnail_url', thumbnail_url
                )
              ) FROM Product_Photos WHERE styleId = Styles.id
            )
          )
        ) FROM Styles WHERE productId = ${product_id}
      )
    ) AS Styles
  `;
  try {
    let styles = await db.query(q)
    let formatted = styles[0][0].Styles
      formatted.results ?
        formatted.results.forEach(style => style['default?'] = style['default?'] === '1' ? true : false)
        : formatted.results = [];
    return (formatted)
  } catch(err) {
    return err
  }
}

async function getRelated(product_id) {
  try {
    let relatedProductIds = await db.query(`
      SELECT JSON_ARRAYAGG(
        related_product_id
      ) AS related FROM Related WHERE current_product_id = ${product_id}
    `)
    if (relatedProductIds[0][0].related === null) {
      relatedProductIds[0][0].related = [];
    }
    return relatedProductIds[0][0].related
  } catch(err) {
    return err
  }
}

module.exports = {
  getAll,
  getOne,
  getStyles,
  getRelated
}
