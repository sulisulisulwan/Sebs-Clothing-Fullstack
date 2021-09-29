let q = `
SELECT JSON_OBJECT(
  'product_id', ${product_id},
  'results', (
    SELECT CAST(
      CONCAT(
        '[', GROUP_CONCAT(
          JSON_OBJECT(
            'style_id', Styles.id,
            'name', Styles.name,
            'original_price', Styles.original_price,
            'sale_price', Styles.sale_price,
            'default?', Styles.default_style
          )
        ), ']'
      ) AS JSON
    ) FROM Styles WHERE productId = ${product_id}
  )
) AS result FROM Product WHERE id = ${product_id}