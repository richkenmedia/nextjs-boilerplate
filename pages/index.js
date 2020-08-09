/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from '../components/vendor/reactstrap';
import CarouselThumbnails from '../components/custom/carouselThumbnails';

export default function Home() {
  const items = [
    {
      src: 'https://picsum.photos/id/1/1500/300',
      altText: 'Slide 1',
      caption: 'Slide 1',
    },
    {
      src: 'https://picsum.photos/id/10/1500/300',
      altText: 'Slide 2',
      caption: 'Slide 2',
    },
    {
      src: 'https://picsum.photos/id/123/1500/300',
      altText: 'Slide 3',
      caption: 'Slide 3',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md="4">
            {/* Use className `flex-column` to display vertically */}
            {/* default is flex-row */}
            <CarouselThumbnails
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
              className="flex-column"
            />
          </Col>
          <Col md="8">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}
