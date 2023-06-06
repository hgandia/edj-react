import React, { useState } from 'react';
import {    Carousel, 
            CarouselItem, 
            CarouselControl, 
            CarouselIndicators
        } from 'reactstrap';
import { OFFICIALS } from '../app/shared/OFFICIALS';

function OfficialsCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === OFFICIALS.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
  };
  
  const previous = () => {
      if (animating) return;
      const prevIndex = activeIndex === 0 ? OFFICIALS.length - 1 : activeIndex - 1;
      setActiveIndex(prevIndex);
  };
  
  const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
  };   
  
  const slides = OFFICIALS.map((item) => {
      return (
          <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.picture}
          >
              <img src={item.picture} alt={item.altText} height='400px' border='5px double darkblue' />
              {/* <CarouselCaption
                  captionText={item.title}
                  captionHeader={item.id}
              /> */}
          </CarouselItem>
      );
  }); 

  return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval='3000'
        ride='carousel'
        {...args}
      >
        <CarouselIndicators
          items={OFFICIALS}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          className='w-25'
          
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          className='w-25'
        />
      </Carousel>
    );
}
export default OfficialsCarousel;      
