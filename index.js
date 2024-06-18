let homeScore = document.getElementById('homeScore')
let guestScore = document.getElementById('guestScore')


homeCount = 0
guestCount = 0

function homePlusOne() {
    homeCount += 1
    homeScore.textContent = homeCount
    console.log(homeCount)
}

function homePlusTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
    console.log(homeCount)
}

function homePlusThree() {
    homeCount += 3
    homeScore.textContent = homeCount
    console.log(homeCount)
}

function guestPlusOne() {
    guestCount += 1
    guestScore.textContent = guestCount
    console.log(guestCount)
}

function guestPlusTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
    console.log(guestCount)
}

function guestPlusThree() {
    guestCount += 3
    guestScore.textContent = guestCount
    console.log(guestCount)
}