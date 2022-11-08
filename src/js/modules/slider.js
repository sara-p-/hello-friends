import { createSlides } from './html-components'
import { importAll } from './helper-functions'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function slider() {
  const sliderTrack = document.querySelector('.slider__track')
  const scrollingSection = document.querySelector('#scrolling-section')
  const images = importAll(
    require.context('../../../images/slides', false, /\.(png|jpe?g|svg)$/)
  )
  const scrollNumber = 100

  // Create the Slides
  createSlides(sliderTrack, images)

  // Gather all of the slides in an array
  const slideArray = document.querySelectorAll('li.slider__slide')
  const scrollHeight = slideArray.length * scrollNumber

  // Set the height of the scrolling div by multiplying the amount of slides by the scrollNumber.
  // scrollingSection.style.height = `${scrollHeight + window.innerHeight}px`

  // Set the first slide to opacity 1
  // slideArray[0].style.opacity = '1'

  // Pulled the following code from this codepen demo: https://codepen.io/GreenSock/pen/rNOebyo
  let slides = gsap.utils.toArray('li.slider__slide'),
    currentSlide = slides[0]

  gsap.defaults({ overwrite: 'auto', duration: 0 })

  // stretch out the body height according to however many slides there are.
  gsap.set('body', { height: slides.length * 100 + '%' })
  gsap.set(slides[0], { opacity: 1 })

  // create a ScrollTrigger for each section
  slides.forEach((slide, i) => {
    ScrollTrigger.create({
      // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
      start: () => (i - 0.5) * innerHeight,
      end: () => (i + 0.5) * innerHeight,
      // when a new slide activates (from either direction), set the slide accordingly.
      onToggle: (self) => self.isActive && setSlide(slide),
    })
  })

  function setSlide(newSlide) {
    if (newSlide !== currentSlide) {
      gsap.to(currentSlide, { opacity: 0 })
      gsap.to(newSlide, { opacity: 1 })
      currentSlide = newSlide
    }
  }

  // gsap.set(slideArray[0], { opacity: 1 })

  // function scrollAnimation() {
  //   const t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: scrollingSection,
  //       pin: false, // pin the trigger element while active
  //       start: 'top top', // when the top of the trigger hits the top of the viewport
  //       end: 'bottom bottom', // end after scrolling 500px beyond the start
  //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //     },
  //   })

  //   t1.to(slideArray, {
  //     opacity: 1,
  //     stagger: 0.5,
  //     duration: 0,
  //   })

  //   return t1
  // }

  // scrollAnimation()
}
