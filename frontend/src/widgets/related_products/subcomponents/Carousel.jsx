import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card.jsx'
import onClick from '../../../onClickHandlers.js';
import Stars from '../../../shared_components/Stars.jsx'

const Carousel = ({ parentClassName, carouselName, cardsData, cardOptions }) => {

  const [prevButtonIsHidden, setPrevButtonIsHidden] = useState(true)
  const [nextButtonIsHidden, setNextButtonIsHidden] = useState(true)
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

  useEffect(() => {
    setCurrentScrollIndex(0)
  }, [cardsData])

  useEffect(() => {
    let maxScrollIndex = Math.floor(((cardsData.length - 1) / 4));
    if (maxScrollIndex === 0) {
      if (!prevButtonIsHidden) {
        setPrevButtonIsHidden(true)
      }
      if (!nextButtonIsHidden) {
        setNextButtonIsHidden(true)
      }
    } else {
      //if we are at the start of the carousel
      if (currentScrollIndex === 0) {
        if (!prevButtonIsHidden) {
          setPrevButtonIsHidden(true);
        }
        if (nextButtonIsHidden) {
          setNextButtonIsHidden(false);
        }
      //if we are in the middle of the carousel
      } else if (currentScrollIndex < maxScrollIndex) {
        if (prevButtonIsHidden) {
          setPrevButtonIsHidden(false);
        }
        if (nextButtonIsHidden) {
          setNextButtonIsHidden(false);
        }
      //if we are at the end of the carousel
      } else if (currentScrollIndex === maxScrollIndex) {
        if (prevButtonIsHidden) {
          setPrevButtonIsHidden(false)
        }
        if (!nextButtonIsHidden) {
          setNextButtonIsHidden(true);
        }
      }
    }
  }, [currentScrollIndex, cardsData])



  const prevButtonClickHandler = (e) => {
    setCurrentScrollIndex(currentScrollIndex - 1);
  };

  const nextButtonClickHandler = (e) => {
    setCurrentScrollIndex(currentScrollIndex + 1);
  };

  const onScrollHandler = (e) => {
  }


  return (
    <>
      <div className={`carousel-wrapper ${carouselName}`}>
        <a><img className={`carousel-prev-button ${carouselName}`} src="/assets/carouselLeft.png" hidden={prevButtonIsHidden} onClick={prevButtonClickHandler}/></a>
        <div className={`carousel-display-wrapper ${carouselName}`} onScroll={onScrollHandler}>
          <div id={`${carouselName}-scrollIndex-0`}></div>
          {cardsData.map(
          function (cardData, index) {
            if (index > 3 && (index + 1) % 4 === 1) {
              let scrollIndex = (Math.ceil(index / 4));
              return (
                <React.Fragment key={`${carouselName}-scrollindex-${scrollIndex}`}>
                  <div id={`${carouselName}-scrollindex-${scrollIndex}`}></div>
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
        <a><img className={`carousel-next-button ${carouselName}`} src="/assets/carouselRight.png" hidden={nextButtonIsHidden} onClick={nextButtonClickHandler}/></a>
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