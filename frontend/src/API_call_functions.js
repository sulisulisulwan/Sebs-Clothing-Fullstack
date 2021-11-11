import axios from 'axios';
import React from 'react';
import Utils from './utils.js'
const utils = new Utils();

const getProduct = async (product_id) => {
  let formattedCurrentProduct;
  try {
    let result = await axios.get(`/product/${product_id}`)
    formattedCurrentProduct = result.data;

    result = await axios.get(`/product/${product_id}/styles`)
    formattedCurrentProduct.styles = result.data.results;
    let defaultExists = false;
    formattedCurrentProduct.styles.some((style, i) => {
      if (style['default?']) {
        defaultExists = true;
        formattedCurrentProduct.defaultStyleIndex = i
        return true;
      }
    });
    if (formattedCurrentProduct.styles.length) {
      if (!defaultExists) {
        formattedCurrentProduct.styles[0]['default?'] = true;
        formattedCurrentProduct.defaultStyleIndex = 0;
      }
    }
    let reviewsMetaData = await getProductReviewsMetaData(product_id);
    formattedCurrentProduct.reviewsMetaData = reviewsMetaData
    formattedCurrentProduct.reviewsMetaData.averageRating = utils.getAverageRating(formattedCurrentProduct.reviewsMetaData.ratings);
    return formattedCurrentProduct;
  } catch(err) {
    console.error(err);
    return err;
  }
}

const getRelated = async (product_id) => {
  const relatedProductsAPICalls = [];
  try {
    let result = await axios.get(`/product/${product_id}/related`)
    if (result.data.length) {
      result.data.forEach(relatedProductId => {
        let productData = getProduct(relatedProductId);
        let reviewsMetaData = getProductReviewsMetaData(relatedProductId);
        relatedProductsAPICalls.push(Promise.all([productData, reviewsMetaData]))
      })
    }
    let relatedProductsResults = await Promise.all(relatedProductsAPICalls)
    let formattedRelatedProductsResults = relatedProductsResults.map(result => {
      let [productData, reviewsMetaData] = result;
      productData.reviewsMetaData = reviewsMetaData;
      productData.reviewsMetaData.averageRating = utils.getAverageRating(productData.reviewsMetaData.ratings);

      return productData;
    })
    return formattedRelatedProductsResults;
  } catch(err) {
    console.error(err);
    return err;
  }
}

const getIfSearchResultIsExactMatch = async(searchQuery) => {
  try {
    let result = await axios.get(`/search/exact?search=${searchQuery}`);
    return result.data;
  } catch(err) {
    console.error(err);
  }
}

const getProductReviewsMetaData = async(product_id) => {
  try {
    let result = await axios.get(`/reviews/meta?product_id=${product_id}`);
    return result.data
  } catch(err) {
    console.error(err);
  }
}

const getSearchResults = async (searchQuery) => {
  try {
    let searchResults = await axios.get(`/search?search=${searchQuery}`)
    searchResults = searchResults.data.map(result => {
      return {
          display: {
            name: result.name,
            category: result.category
          },
          value: result.id
        }
    })
    return searchResults;
  } catch(err) {
    console.error(err)
    return err;
  }
}

const getCurrentProductReviews = async (product_id) => {
  let allReviews = await axios.get(`/reviews?product_id=${product_id}&page=1&count=5`) //sort is not a thing eh? hmm should we keep that as part of the api?
  return allReviews.data;
}

const API = {
  getProduct, getRelated, getIfSearchResultIsExactMatch, getSearchResults, getProductReviewsMetaData, getCurrentProductReviews
}

export default API;