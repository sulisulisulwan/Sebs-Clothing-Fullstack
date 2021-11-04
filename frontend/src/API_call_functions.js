import axios from 'axios';
import React from 'react';

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
    if (!defaultExists) {
      formattedCurrentProduct.styles[0]['default?'] = true;
      formattedCurrentProduct.defaultStyleIndex = 0;
    }

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
        relatedProductsAPICalls.push(getProduct(relatedProductId))
      })
    }
    let relatedProductsResults = await Promise.all(relatedProductsAPICalls)
    return relatedProductsResults;
  } catch(err) {
    console.error(err);
    return err;
  }
}

const getIfSearchResultIsExactMatch = async(searchQuery) => {
  try {
    let result = await axios.get(`/search/exact?search=${searchQuery}`);
    console.log(result.data)
    return result.data;
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

const API = {
  getProduct, getRelated, getIfSearchResultIsExactMatch, getSearchResults
}

export default API;