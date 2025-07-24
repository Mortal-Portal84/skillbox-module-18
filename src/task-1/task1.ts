import { catsImages, dogsImages } from '../api'
import { getImages, renderImagesRow } from '../utils'

import '../style.css'

const app = document.querySelector('#app')

window.onload = () => {
  getImages(dogsImages).then((images) => {
    renderImagesRow(images, app as HTMLElement)
  })

  getImages(catsImages).then((images) => {
    renderImagesRow(images, app as HTMLElement)
  })
}
