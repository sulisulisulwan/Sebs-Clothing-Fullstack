const lineProcessors = require('./etl_lineProcessor')

class ETL_Options {
  constructor (csvFile, table, dataTypes, totalRows) {
    this.csvFile = csvFile
    this.table = table
    this.dataTypes = dataTypes
    this.totalEntries = totalRows
  }

  processLine(line) {
    return this.lineProcessors[this.table](line);
  }
}

module.exports = {
  Product: new ETL_Options('/csvs/products/product.csv', 'Product', ['int', 'string', 'string', 'string', 'string', 'string'], 1000011),
  Features: new ETL_Options('/csvs/products/features.csv', 'Features', ['int', 'int', 'string', 'string'], 2219279),
  Related: new ETL_Options('/csvs/products/related.csv', 'Related', ['int', 'int', 'int'], 4508263),
  SKUs: new ETL_Options('/csvs/products/skus.csv', 'SKUs', ['int', 'int', 'int', 'int'], 11323917),
  Styles: new ETL_Options('/csvs/products/styles.csv', 'Styles', ['int', 'int', 'string', 'string', 'string', 'boolean'], 1958102),
  Product_Photos: new ETL_Options('/csvs/products/photos.csv', 'Product_Photos', ['int', 'int', 'string', 'string']),
  Questions: new ETL_Options('/csvs/qa/questions.csv', 'Questions', ['int', 'string', 'string', 'datetime', 'string', 'string', 'boolean', 'int']),
  Answers: new ETL_Options('/csvs/qa/answers.csv', 'Answers', ['int', 'int', 'string']),
  Answers_Photos: new ETL_Options('/csvs/qa/answers_photos.csv', 'Answers_Photos', ['int', 'int', 'string', 'datetime', 'string', 'string', 'boolean', 'int']),
  Characteristic_Reviews: new ETL_Options('/csvs/reviews/characteristic_reviews.csv', 'Characteristic_Reviews', ['int', 'int', 'int', 'string']),
  Characteristics: new ETL_Options('/csvs/reviews/characteristics.csv', 'Characteristics', ['int', 'int', 'string']),
  Review_Photos: new ETL_Options('/csvs/reviews/review_photos.csv', 'Review_Photos', ['int', 'int', 'string']),
  Reviews: new ETL_Options('/csvs/reviews/reviews.csv', 'Reviews', ['int', 'int', 'int', 'datetime', 'string', 'string', 'boolean', 'boolean', 'string', 'string', 'string', 'int']),
  Cart: new ETL_Options('/csvs/cart/cart.csv', 'Cart', ['int', 'string', 'int', 'boolean'])
}



