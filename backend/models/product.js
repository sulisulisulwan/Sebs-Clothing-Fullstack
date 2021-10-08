const db = require('../db/db')

const getAll = (page, count) => {
  return new Promise ((resolve, result) => {
    let q = `
    SELECT *
    FROM Product
    WHERE id >= ${count * (page - 1) + 1}
    LIMIT ${count};
    `;
    db.query(q)
    .then(products => {
      resolve(products[0])
    })
  })
}

const getOne = (product_id) => {
  return new Promise ((resolve, reject) => {
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
    db.query(q)
      .then(product => {
        resolve(product[0][0].product);
      })
      .catch(err => {
        console.error(err);
      })
  })
}

const getStyles = (product_id) => {
  return new Promise((resolve, reject) => {
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
    return db.query(q)
      .then(styles => {
        let formatted = styles[0][0].Styles
        formatted.results.forEach(style => style['default?'] = style['default?'] === '1' ? true : false)
        resolve(formatted)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const getRelated = (product_id) => {
  return new Promise((resolve, reject) => {
    db.query(`
      SELECT JSON_ARRAYAGG(
        related_product_id
      ) AS related FROM Related WHERE current_product_id = ${product_id}
    `)
      .then(relatedProductIds => {
        resolve(relatedProductIds[0][0].related)
      })
      .catch(err => {
        reject(err);
      })
  })
}

module.exports = {
  getAll,
  getOne,
  getStyles,
  getRelated
}
