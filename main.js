// GET INpUT FROM USER
let launch = window.prompt(
  'when would you like to count down to?',
  'January 1, 2023 00:00:00'
)

const h1 = document.querySelector('h1')
const countdowm = document.querySelector('.countdowm')
// ANIMATION
const countdownAnimate = document.querySelector('.countdown')
countdownAnimate.classList.add('animate__animated', 'animate__fadeInRight')
function countDown() {
  // CHECK INPUT FROM USER
  if (launch === '') {
    h1.innerText = `You didn't set a date yet`
    countDown.style.display = 'none'
  } else if (launch == null) {
    h1.innerText = `Refresh the page to set a date`
    countDown.style.display = 'none'
  } else {
    h1.innerText = `Your countdown has begun`
  }

  // COUNTDOWN END TIME
  const toStop = new Date(launch).getTime()
  // COUNTDOWN START TIME
  const toStart = new Date().getTime()
  // COUNTDOWN DURATION
  const countDuration = toStop - toStart
  // TIME CALCULATIONS
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  //   calculations

  const dDay = Math.floor(countDuration / day)
  const dHour = Math.floor((countDuration % day) / hour)
  const dMin = Math.floor((countDuration % hour) / minute)
  const dSec = Math.floor((countDuration % minute) / second)

  //   PRINT VALUES TO THE DOM

  document.querySelector('#days').innerText = dDay < 10 ? '0' + dDay : dDay
  document.querySelector('#hours').innerText = dHour < 10 ? '0' + dHour : dHour
  document.querySelector('#minutes').innerText = dMin < 10 ? '0' + dMin : dMin
  document.querySelector('#seconds').innerText = dSec < 10 ? '0' + dSec : dSec
}
countDown()

setInterval(countDown, 1000)
