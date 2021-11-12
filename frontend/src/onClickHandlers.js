import api from './API_call_functions.js';

const searchBarResults = async (e, dropdownOptions) => {
  let id = e.target.nodeName === 'SPAN' ? e.target.parentNode.value : e.target.value;
  try {
    let product = await getAllCurrentProductData(id)
    dropdownOptions.ref.current.value = e.target.value;
    dropdownOptions.setStateFuncs.setCurrentProduct(product);
  } catch(err) {
    console.error(err);
  }
}

const relatedProductCard = async (id, cardOptions) => {

  try {
    let product = await getAllCurrentProductData(id);
    cardOptions.funcs.setCurrentProduct(product)
  } catch(err) {
    console.error(err);
  }
}

const addToOutfitCard = (id, cardOptions, productData) => {
  if (cardOptions.data.addOutfitDisabled) {
    return;
  }
  let myOutfit = cardOptions.data.myOutfit.slice();
  myOutfit.push(productData);
  cardOptions.funcs.setMyOutfit(myOutfit);
  cardOptions.funcs.setAddOutfitDisabled(true);
}

const removeFromOutfitAction = (id, cardOptions) => {
  const myOutfit = cardOptions.data.myOutfit.slice();
  for (let i = 0; i < myOutfit.length; i++) {
    if (myOutfit[i].id === id) {
      myOutfit.splice(i, 1)
      cardOptions.funcs.setMyOutfit(myOutfit);
      cardOptions.funcs.setAddOutfitDisabled(false);
      break;
    }
  }
}

const productComparisonAction = (id, cardOptions, e) => {
  let { relatedProducts } = cardOptions.data
  console.log(e)
  id = Number(e.target.parentNode.id.split('-')[0]);
  let clickedProduct;
  for (let i = 0; i < relatedProducts.length; i++) {
    if (id === relatedProducts[i].id) {
      clickedProduct = relatedProducts[i];
      break;
    }
  }
  cardOptions.funcs.setComparisonProductData(clickedProduct);
  cardOptions.funcs.setComparisonModalOpen(true);
  cardOptions.funcs.setComparisonModalCoords([e.clientX, e.clientY])
}

const getMoreAnsweredQuestions = (e, buttonOptions) => {
  const { maxQuestionsShown, setMaxQuestionsShown } = buttonOptions.componentDataAndFuncs;
  setMaxQuestionsShown(maxQuestionsShown + 2)
}

const addAQuestion = (e, buttonOptions) => {
  alert('This adds a question')
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
  productComparisonAction,
  getMoreAnsweredQuestions,
  addAQuestion
}