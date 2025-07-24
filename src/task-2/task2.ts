import '../style.css'

const app = document.querySelector('#app')

const renderProgressBar = (time: number) => {
  const wrapper = document.createElement('div')
  const progressBar = document.createElement('div')
  const timer = document.createElement('p')

  const duration = Math.max(2, time)
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


app?.appendChild(renderProgressBar(5))
