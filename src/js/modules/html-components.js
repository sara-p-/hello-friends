import { importAll } from './helper-functions'

export function createSlides(element, obj) {
  Object.entries(obj).forEach((entry, index) => {
    const item = document.createElement('li')
    item.classList.add('slider__slide')

    const image = document.createElement('img')
    image.classList.add(
      'slider__image',
      `slider__image--${index}`,
      'image--cover'
    )
    image.setAttribute('src', obj[`hello-${index}.jpg`])

    item.append(image)
    element.append(item)
  })
}
