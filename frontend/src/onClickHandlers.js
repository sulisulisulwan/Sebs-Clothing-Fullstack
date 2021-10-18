import api from './API_call_functions.js';

const searchBarResults = async (e, dropdownFuncs) => {
  let id = e.target.nodeName === 'SPAN' ? e.target.parentNode.value : e.target.value;
  try {
    let product = await getAllCurrentProductData(id)
    dropdownFuncs.ref.current.value = e.target.value;
    dropdownFuncs.setStateFuncs.setCurrentProduct(product);
  } catch(err) {
    console.error(err);
  }
}

const relatedProductCard = async (id, cardFuncs) => {
  try {
    console.log('id is ', id)
    let product = await getAllCurrentProductData(id);
    cardFuncs.setStateFuncs.setCurrentProduct(product);
  } catch(err) {
    console.error(err);
  }
}

async function getAllCurrentProductData(id) {
  try {
    let product = await api.getProduct(id)
    product.related = await api.getRelated(id);
    return product;
  } catch(err) {
    console.error(err);
  }
}

export default {
  searchBarResults,
  relatedProductCard
}