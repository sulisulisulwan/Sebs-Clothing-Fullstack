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

const relatedProductCard = async (id, cardOptions) => {

  try {
    let product = await getAllCurrentProductData(id);
    cardOptions.setStateFuncs(product)
  } catch(err) {
    console.error(err);
  }
}

const addToOutfitCard = (id, setStateFunc) => {
  alert('THIS ADDS PRODUCT TO OUTFIT')
}

const removeFromOutfitAction = (id, setStateFunc) => {
  alert('THIS REMOVES PRODUCT FROM OUTFIT')
}

const productComparisonAction = (id) => {
  alert('THIS IS THE PRODUCT COMPARISON MODAL')
}





//API aggregator
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
  relatedProductCard,
  addToOutfitCard,
  removeFromOutfitAction,
  productComparisonAction
}