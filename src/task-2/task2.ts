import { generateNumber } from '../utils'

import '../style.css'

const app = document.querySelector('#app')

const renderProgressBar = () => {
  const wrapper = document.createElement('div')
  const progressBar = document.createElement('div')
  const timer = document.createElement('p')

  const randomNumber = generateNumber()
  const DELAY = 1.5

  let intervalId: ReturnType<typeof setInterval> | null = null

  progressBar.id = 'progress-bar'
  wrapper.className = 'wrapper'
  progressBar.className = 'progress-bar'
  timer.textContent = `0 seconds`

  wrapper.append(progressBar, timer)

  setTimeout(() => {
    const startTime = Date.now()

    intervalId = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      timer.textContent = `${elapsed} seconds`

      if (elapsed >= randomNumber) {
        clearInterval(intervalId!)
      }

    progressBar.style.transition = `width ${randomNumber}s linear`
    progressBar.style.width = '100%'

    }, 250)
  }, DELAY * 1000)

  return wrapper
}

app?.appendChild(renderProgressBar())
