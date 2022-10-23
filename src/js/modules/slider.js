import { createSlides } from './html-components'
import { importAll } from './helper-functions'

export default function slider() {
  const sliderTrack = document.querySelector('.slider__track')
  const scrollingSection = document.querySelector('#scrolling-section')
  const images = importAll(
    require.context('../../../images/slides', false, /\.(png|jpe?g|svg)$/)
  )
  const scrollNumber = 30

  // Create the Slides
  createSlides(sliderTrack, images)

  // Gather all of the slides in an array
  const slideArray = document.querySelectorAll('li.slider__slide')

  // Set the height of the scrolling div by multiplying the amount of slides by the scrollNumber.
  scrollingSection.style.height = `${slideArray.length * scrollNumber}px`
}
