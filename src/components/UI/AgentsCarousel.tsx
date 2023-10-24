'use client'

import { ReactNode } from "react";
import { Carousel } from "react-configurable-carousel";

interface AgentsCarouselProps {
  children: ReactNode[],
  slideInHover: boolean
}

export function AgentsCarousel({ children, slideInHover }: AgentsCarouselProps) {
  let screenWidth = window.innerWidth
  const breakpoints = {
    large: 1180,
    small: 600
  }

  return (
    <Carousel
      arrows={screenWidth > breakpoints.large ? true : false}
      dotsNavigation={false}
      autoScrollInterval={slideInHover ? 0 : 3000}
      autoScrollClickDelay={slideInHover ? 0 : 3000}
      outOfFocusDarken={screenWidth > breakpoints.large ? false : true}
      width={"98%"}
      height={"auto"}
      carouselStyle={screenWidth > breakpoints.small ? '3d' : 'flat'}
    >
      {children}
    </Carousel>
  )
}