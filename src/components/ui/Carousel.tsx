'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'


interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  photo: string
}

interface CarouselProps {
  testimonials: Testimonial[]
}

export const TestimonialsCarousel = ({ testimonials }: CarouselProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      duration: 30,
      skipSnaps: false,
      dragFree: true
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const slidesToShow = isMobile ? 1 : 4
  const gap = isMobile ? 16 : 24

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const onDragStart = useCallback(() => {
    setIsDragging(true)
    if (emblaApi?.plugins()?.autoplay) {
      emblaApi.plugins().autoplay.stop()
    }
  }, [emblaApi])

  const onDragEnd = useCallback(() => {
    setIsDragging(false)
    if (emblaApi?.plugins()?.autoplay) {
      emblaApi.plugins().autoplay.play()
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    const updateSlideSizes = () => {
      const slideNodes = emblaApi.slideNodes()
      const viewportWidth = emblaApi.containerNode().offsetWidth
      
      slideNodes.forEach((slide) => {
        const slideWidth = (viewportWidth - (gap * (slidesToShow - 1))) / slidesToShow
        
        slide.style.flex = `0 0 ${slideWidth}px`
        slide.style.marginRight = `${gap}px`
        slide.style.minWidth = '0'
      })
      
      emblaApi.reInit()
      setScrollSnaps(emblaApi.scrollSnapList())
    }

    updateSlideSizes()
    onSelect()
    
    emblaApi
      .on('select', onSelect)
      .on('pointerDown', onDragStart)
      .on('pointerUp', onDragEnd)
    
    window.addEventListener('resize', updateSlideSizes)
    
    return () => {
      emblaApi
        .off('select', onSelect)
        .off('pointerDown', onDragStart)
        .off('pointerUp', onDragEnd)
      window.removeEventListener('resize', updateSlideSizes)
    }
  }, [emblaApi, isMobile, onSelect, onDragStart, onDragEnd, gap, slidesToShow])

  return (
    <div className="mx-auto">
      <div 
        className={`embla overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} pb-10`}
        ref={emblaRef}
      >
        <div className="embla__container flex select-none">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="embla__slide relative"
            >
              <div className="bg-white  h-full flex flex-col  hover:shadow-xl shadow-lg  rounded-2xl">
                <div className="aspect-square mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={testimonial.photo} 
                    alt={`${testimonial.name}`}
                    className="w-[80vh] h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    draggable="false"
                  /> 
                </div>
                
                <div className="flex-grow p-4">
                  <h4 className="text-card-title text-lg mb-2">{testimonial.name}</h4>
                  <p className="text-card-description mb-4 italic">« {testimonial.text} »</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= testimonial.rating} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-gray-500 w-6' : 'bg-gray-200 w-3'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)