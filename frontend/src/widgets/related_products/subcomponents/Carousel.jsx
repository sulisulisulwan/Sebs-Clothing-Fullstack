import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card.jsx'
import onClick from '../../../onClickHandlers.js';
import Stars from '../../../shared_components/Stars.jsx'

const Carousel = ({ parentClassName, carouselName, cardsData, cardOptions }) => {

  const [prevButtonIsHidden, setPrevButtonIsHidden] = useState(true)
  const [nextButtonIsHidden, setNextButtonIsHidden] = useState(true)

  if (cardsData.length < 5) {
    if (!prevButtonIsHidden) {
      setPrevButtonIsHidden(true)
    }
    if (!nextButtonIsHidden) {
      setNextButtonIsHidden(true)
    }
  } else {
    if (nextButtonIsHidden) {
      setNextButtonIsHidden(false);
    }
  }

  const prevButtonClickHandler = (e) => {

  };

  const nextButtonClickHandler = (e) => {

  };

  const onScrollHandler = (e) => {
    console.log(e)
  }


  return (
    <>
      <div className={`carousel-wrapper ${carouselName}`}>
        <img className={`carousel-prev-button ${carouselName}`} src="/assets/carouselLeft.png" hidden={prevButtonIsHidden} onClick={prevButtonClickHandler}/>
        <div className={`carousel-display-wrapper ${carouselName}`} onScroll={onScrollHandler}>
          {cardsData.map(
          function (cardData, index) {
            if ((index + 1) % 4 === 0) {
              let scrollIndex = (index + 1) / 4;
              return (
                <React.Fragment key={`rps-${scrollIndex}`}>
                  <div id={`rps-${scrollIndex}`}></div>
                  <Card
                    key={`${carouselName}${cardData.id}-${index}`}
                    parentClassName={`${parentClassName}-${carouselName}-cards`}
                    productData={cardData}
                    cardOptions={cardOptions}
                  >
                    <div className={`${parentClassName}-${carouselName}-cards-card-category`}>{cardData.category}</div>
                    <div className={`${parentClassName}-${carouselName}-cards-card-name`}>{cardData.name}</div>
                    <div className={`${parentClassName}-${carouselName}-cards-card-price`}>{cardData.price}</div>
                    <Stars className={`${parentClassName}-${carouselName}-cards-card-stars`}/>
                  </Card>
                </React.Fragment>
              )
            } else {
              return (
                <Card
                  key={`relatedProduct${cardData.id}-${index}`}
                  parentClassName={`${parentClassName}-related-cards`}
                  productData={cardData}
                  cardOptions={cardOptions}
                >
                  <div className={`${parentClassName}-${carouselName}-cards-card-category`}>{cardData.category}</div>
                  <div className={`${parentClassName}-${carouselName}-cards-card-name`}>{cardData.name}</div>
                  <div  className={`${parentClassName}-${carouselName}-cards-card-price`}>{cardData.price}</div>
                  <Stars className={`${parentClassName}-${carouselName}-cards-card-stars`}/>
                </Card>
              )
            }
          }
        )}
        </div>
        <img className={`carousel-next-button ${carouselName}`} src="/assets/carouselRight.png" hidden={nextButtonIsHidden} onClick={nextButtonClickHandler}/>
      </div>
    </>
  )
}

/*
we need a grid template system which changes dynamically depending on an input integer
representing the amount of cards in the carousel
*/

/*
Build an algorithm which reassigns a card to have a css property of hidden depending on a user's toggling of a next
and prev button.  On load, cards with an index (indexed at 1) above the maximum visible cards will havwe
*/

export default Carousel