import type { Image } from '../api'

export const generateNumber = (): number => {
  return Math.floor(Math.random() * (5 - 2 + 1)) + 2
}

export const getImages = (imagesList: Image[]): Promise<{ images: Image[], delay: number }> =>
  new Promise((resolve) => {
    const delay = generateNumber() * 1000

    setTimeout(() => {
      resolve({ images: imagesList, delay })
    }, delay)
  })

export const renderImagesRow = (images: Image[]): HTMLElement => {
  const row = document.createElement('div')
  row.classList.add('row')

  images.forEach((image) => {
    const imageElement = document.createElement('img')
    imageElement.className = 'image'
    imageElement.src = image.src
    imageElement.alt = image.alt

    row.append(imageElement)
  })

  return row
}
