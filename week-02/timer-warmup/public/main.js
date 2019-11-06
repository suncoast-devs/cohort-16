let timer = 0
let interval = null
const startTimer = () => {
  if (!interval) {
    interval = setInterval(() => {
      timer++

      // all three of these lines do the same thing
      // timer++
      // timer += 1
      // timer = timer + 1
      console.log('heart beat', timer)
      let seconds = timer
      if (timer < 10) {
        seconds = '0' + timer.toString()
      }
      document.querySelector('.seconds').textContent = seconds
    }, 1000)
  }
}

const stopTimer = () => {
  // do something
  console.log(interval)
  clearInterval(interval)
  interval = null
}

document.querySelector('.start-button').addEventListener('click', startTimer)
document.querySelector('.stop-button').addEventListener('click', stopTimer)
