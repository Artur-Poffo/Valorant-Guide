'use client'

import { ReactChild } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface AgentsCarouselProps {
  children: ReactChild[]
}

export function AgentsCarousel({ children }: AgentsCarouselProps) {
  return (
    <Carousel
      centerMode
      centerSlidePercentage={100}
      autoPlay
      infiniteLoop
      stopOnHover
      useKeyboardArrows
      swipeable
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      interval={3000}
    >
      {children}
    </Carousel>
  )
}