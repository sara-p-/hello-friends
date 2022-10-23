import { createItems } from './html-components'
import Data from '../json/images.json'
import { importAll } from './helper-functions'

export default function slider() {
  const sliderTrack = document.querySelector('.slider__track')
  const images = importAll(
    require.context('../../../images/slides', false, /\.(png|jpe?g|svg)$/)
  )

  console.log(images)

  createItems(sliderTrack, images)
}
