import { importAll } from './helper-functions'

export function createItems(element, obj) {
  Object.entries(obj).forEach((entry, index) => {
    const item = document.createElement('li')
    item.classList.add('slider__item')

    const image = document.createElement('img')
    image.classList.add('slider__image', `slider__image--${index}`)
    image.setAttribute('src', obj[`hello-${index}.jpg`])

    item.append(image)
    element.append(item)
  })
}
