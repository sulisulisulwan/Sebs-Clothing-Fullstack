import React from 'react';

const Carousel = ( { carouselName, children} ) => {
  return (
    <>
      <div className={`carousel-wrapper ${carouselName}`}>
        <button>Prev</button>
        <div className={`carousel-display-wrapper ${carouselName}`}>
          {children}
        </div>
        <button>Next</button>
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