import type { Image } from '../api'

export const generateNumber = (): number => {
  return Math.floor(Math.random() * (5 - 2 + 1)) + 2
}

export const getImages = (imagesList: Image[]): Promise<Image[]> =>
  new Promise((resolve) => {
    const delay = generateNumber() * 1000

    setTimeout(() => {
      resolve(imagesList)
    }, delay)
  })

export const renderImagesRow = (images: Image[], placement: HTMLElement) => {
  const row = document.createElement('div')
  row.classList.add('row')

  images.map((image) => {
    const imageElement = document.createElement('img')
    imageElement.className = 'image'
    imageElement.src = image.src
    imageElement.alt = image.alt
    row.append(imageElement)
  })

  placement?.append(row)
}
