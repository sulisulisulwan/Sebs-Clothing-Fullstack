import React from 'react';
import ReactDom from 'react-dom';
import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import onClick from '../../../onClickHandlers.js';
import Stars from '../../../shared_components/Stars.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const Carousel = ({ parentClassName, carouselName, cardsData, currentProduct, comparisonProductData, cardOptions, comparisonModalCoords }) => {

  const [prevButtonIsHidden, setPrevButtonIsHidden] = useState(true)
  const [nextButtonIsHidden, setNextButtonIsHidden] = useState(true)
  const [scrollLocation, setScrollLocation] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [maxScrollLocation, setMaxScrollLocation] = useState(0);

  useEffect(() => {
    let scrollIndexOne = document.getElementById(`${carouselName}-scrollIndex-1`)
    setScrollDistance( scrollIndexOne ? scrollIndexOne.offsetLeft : 0);
    setScrollLocation(0)
  }, [cardsData])

  useEffect(() => {
    let { scrollWidth, clientWidth } = document.querySelector(`.carousel-display-wrapper.${carouselName}`)
    setMaxScrollLocation(scrollWidth - clientWidth);
  }, [scrollDistance])

  useEffect(() => {
    if (maxScrollLocation === 0) {
      if (!prevButtonIsHidden) {
        setPrevButtonIsHidden(true);
      }
      if (!nextButtonIsHidden) {
        setNextButtonIsHidden(true);
      }
    } else {
      if (scrollLocation === 0) {
        if (!prevButtonIsHidden) {
          setPrevButtonIsHidden(true);
        }
        if (nextButtonIsHidden) {
          setNextButtonIsHidden(false);
        }
      } else if (0 < scrollLocation && scrollLocation < maxScrollLocation) {
        if (prevButtonIsHidden) {
          setPrevButtonIsHidden(false);
        }
        if (nextButtonIsHidden) {
          setNextButtonIsHidden(false);
        }
      } else if (scrollLocation === maxScrollLocation) {
        if (prevButtonIsHidden) {
          setPrevButtonIsHidden(false)
        }
        if (!nextButtonIsHidden) {
          setNextButtonIsHidden(true);
        }
      }
    }
  }, [scrollLocation, maxScrollLocation])



  const prevButtonClickHandler = (e) => {
    let translate = scrollLocation - scrollDistance < 0 ? 0 : scrollLocation - scrollDistance;
    let carouselElement = document.querySelector(`.carousel-display-wrapper.${carouselName}`)
    carouselElement.scroll({ left: translate, behavior: 'smooth' })
  };

  const nextButtonClickHandler = (e) => {
    let translate = scrollLocation + scrollDistance > maxScrollLocation ? maxScrollLocation : scrollLocation + scrollDistance;
    let carouselElement = document.querySelector(`.carousel-display-wrapper.${carouselName}`)
    carouselElement.scroll({ left: translate, behavior: 'smooth' })

  };

  const onScrollHandler = (e) => {
    setScrollLocation(e.nativeEvent.target.scrollLeft)
  }


  return (
    <>
      <div className={`carousel-wrapper ${carouselName}`}>
        {cardOptions.data.comparisonModalOpen ? <ComparisonModal cardOptions={cardOptions} currentProductData={currentProduct} comparisonProductData={comparisonProductData} comparisonModalCoords={comparisonModalCoords}/> : null}
        <img className={`carousel-prev-button${prevButtonIsHidden ? '-hidden' : ''} ${carouselName}`} src="/assets/carouselLeft.png" onClick={prevButtonClickHandler}/>
        <div className={`carousel-display-wrapper ${carouselName}`} onScroll={onScrollHandler}>
          <div id={`${carouselName}-scrollIndex-0`}></div>
          {cardsData.map(
          function (cardData, index) {
            let cardRowMax = carouselName === 'outfit' ? 3 : 4
            if (index > (cardRowMax - 1) && (index + 1) % cardRowMax === 1) {
              let generatedScrollIndex = (Math.ceil(index / cardRowMax));
              return (
                <React.Fragment key={`${carouselName}-scrollIndex-${generatedScrollIndex}`}>
                  <div id={`${carouselName}-scrollIndex-${generatedScrollIndex}`}></div>
                  <Card
                    key={`${carouselName}${cardData.id}-${index}`}
                    parentClassName={`${parentClassName}-${carouselName}-cards`}
                    productData={cardData}
                    cardOptions={cardOptions}
                  >
                    <div className={`${parentClassName}-${carouselName}-card name`}>{cardData.name}</div>
                    <div className={`${parentClassName}-${carouselName}-card category`}>{cardData.category}</div>
                    <div className={`${parentClassName}-${carouselName}-card price`}>{cardData.default_price}</div>
                    <Stars className={`${parentClassName}-${carouselName}-card stars`}  parentClassName={parentClassName} productData={cardData}/>
                  </Card>

                </React.Fragment>
              )
            } else {
              return (
                <Card
                  key={`relatedProduct${cardData.id}-${index}`}
                  parentClassName={`${parentClassName}-${carouselName}-cards`}
                  productData={cardData}
                  cardOptions={cardOptions}
                >
                  <div className={`${parentClassName}-${carouselName}-card name`}>{cardData.name}</div>
                  <div className={`${parentClassName}-${carouselName}-card category`}>{cardData.category}</div>
                  <div  className={`${parentClassName}-${carouselName}-card price`}>${cardData.default_price}</div>
                  <Stars className={`${parentClassName}-${carouselName}-card stars`} parentClassName={parentClassName} productData={cardData}/>
                </Card>
              )
            }
          }
        )}
        <div id={`${carouselName}-scrollIndex-end`}></div>
        </div>
        <img className={`carousel-next-button${nextButtonIsHidden ? '-hidden' : ''} ${carouselName}`} src="/assets/carouselRight.png" onClick={nextButtonClickHandler}/>
      </div>
    </>
  )
}

export default Carousel