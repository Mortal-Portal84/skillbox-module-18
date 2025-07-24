import { catsImages, dogsImages, type Image } from './api'
import { getImages, renderImagesRow } from './utils'

import './style.css'

const app = document.querySelector('#app') as HTMLElement

const progress = (time: number, progressBarId: string) => {
  const wrapper = document.createElement('div')
  const progressBar = document.createElement('div')
  const timer = document.createElement('p')

  const duration = Math.max(2, time / 1000) // delay в ms → сек
  const DELAY = 1.5

  let intervalId: ReturnType<typeof setInterval> | null = null

  progressBar.id = progressBarId
  wrapper.className = 'wrapper'
  progressBar.className = 'progress-bar'
  timer.textContent = `0 seconds`

  wrapper.append(progressBar, timer)

  setTimeout(() => {
    const startTime = Date.now()

    intervalId = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      timer.textContent = `${elapsed} seconds`

      if (elapsed >= duration) {
        clearInterval(intervalId!)
        timer.textContent = `${duration} seconds`
      }
    }, 1000)

    progressBar.style.transition = `transform ${duration}s linear`
    progressBar.style.transform = 'scaleX(1)'
  }, DELAY * 1000)

  return wrapper
}

// 💡 Универсальный загрузчик с прогрессом
const loadWithProgress = (
  _label: string,
  imageList: Image[],
  barId: string
): Promise<void> => {
  return getImages(imageList)
    .then(({ images, delay }) => {
    const progressWrapper = progress(delay, barId)
    const imagesRow = renderImagesRow(images)

    // Сначала добавляем прогресс-бар, потом вставим изображения над ним
    app.append(progressWrapper)

    return new Promise((resolve) => {
      setTimeout(() => {
        app.insertBefore(imagesRow, progressWrapper) // ⬅️ Вставляем ВЫШЕ
        resolve()
      }, delay + 1500) // учтена задержка + DELAY в progressBar
    })
  })
}


// 🚀 Запуск по очереди
window.onload = () => {
  loadWithProgress('Cats', catsImages, 'cats-progress')
    .then(() => loadWithProgress('Dogs', dogsImages, 'dogs-progress')
  )
}

