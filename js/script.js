let countToDate = new Date("Nov 1, 2022 00:00:00")
let previousTimeBetweenDates
let main = setInterval(() => {
  
  const currentDate = new Date()
  if (currentDate >= countToDate){
    clearInterval(main);
    countToDate = currentDate
    messageSending()
  }
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
  
}, 250)

function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)

  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let messageSending = async function() {
  await sleep(1000)
  $(".m1").removeClass("none")
  await sleep(1000)
  $(".m2").removeClass("none")
  await sleep(2000)
  $(".m3").removeClass("none")
  await sleep(1000)
  $(".m4").removeClass("none")
  await sleep(2000)
  $(".m5").removeClass("none")
  await sleep(2000)
  $(".m6").removeClass("none")
  await sleep(2000)
  $(".m7").removeClass("none")
  await sleep(1000)
  $(".m8").removeClass("none")
};

