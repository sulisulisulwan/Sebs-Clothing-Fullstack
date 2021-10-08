import axios from 'axios';


const getProduct = (product_id) => {
  return new Promise((resolve, reject) => {
    let formattedCurrentProduct;
    return axios.get(`/product/${product_id}`)
      .then(result => {
        formattedCurrentProduct = result.data;
        return axios.get(`/product/${product_id}/styles`)
      })
      .then(result => {
        formattedCurrentProduct.styles = result.data.results;
        formattedCurrentProduct.styles.some((style, i) => {
          if (style['default?']) {
            formattedCurrentProduct.defaultStyleIndex = i
            return true;
          }
        })
        resolve(formattedCurrentProduct);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      })
  })
}

const getRelated = (product_id) => {
  return new Promise ((resolve, reject) => {
    const relatedProductsAPICalls = [];

    return axios.get(`/product/${product_id}/related`)
      .then(result => {
        result.data.forEach(relatedProductId => {
          relatedProductsAPICalls.push(getProduct(relatedProductId))
        })
        return Promise.all(relatedProductsAPICalls)
      })
      .then(relatedProductsResults => {
        resolve(relatedProductsResults)
      })

      .catch(err => {
        console.error(err);
        reject(err);
      })
  })
}


export { getProduct, getRelated };