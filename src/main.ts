import './style.css'

type Image = {
  src: string,
  alt: string,
}

const dogsImages: Image[] = [
  {
    src: 'images/dog1.jpg',
    alt: 'dog1'
  },
  {
    src: 'images/dog2.jpg',
    alt: 'dog2'
  },
  {
    src: 'images/dog3.jpg',
    alt: 'dog3'
  }
]

const catsImages: Image[] = [
  {
    src: 'images/cat1.jpg',
    alt: 'cat1'
  },
  {
    src: 'images/cat2.jpg',
    alt: 'cat2'
  },
  {
    src: 'images/cat3.jpg',
    alt: 'cat3'
  }
]

const renderImagesRow = (images: Image[]): HTMLDivElement => {
  const row = document.createElement('div')
  row.classList.add('row')

  images.map((image) => {
    const imageElement = document.createElement('img')
    imageElement.className = 'image'
    imageElement.src = image.src
    imageElement.alt = image.alt
    row.append(imageElement)
  })

  return row
}

const generateNumber = (): number => {
  const randomNumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2
  console.log(randomNumber)
  return randomNumber
}

const renderProgressBar = () => {
  const wrapper = document.createElement('div')
  const progressBar = document.createElement('div')
  const timer = document.createElement('p')

  const randomNumber = generateNumber()
  const DELAY = 1.5

  let intervalId: ReturnType<typeof setInterval> | null = null

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

const app = document.querySelector('#app')
const progressBar = renderProgressBar()

app?.append(progressBar)
