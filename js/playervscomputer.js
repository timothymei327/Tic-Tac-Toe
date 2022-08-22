////////////////////////////////
// Global Variables Here
//change index.html <script src="js/testbot.js"> to test
const toggleMode = document.getElementById('toggle')
const gameMode = document.querySelector('script')
const allSpaces = document.querySelectorAll('div')
const board = document.getElementById('board')
const message = document.getElementById('message')
const reset = document.getElementById('reset')
const clearscore = document.getElementById('clearscore')
let Xwins = document.getElementById('Xwins')
let Xscore = 0
let Owins = document.getElementById('Owins')
let Oscore = 0
let gameWon = false
let scoreAdded = false
////////////////////////////////
// Functions For Game Logic Here

const switchTurns = () => {
  if (board.getAttribute('value') == 'X') {
    board.setAttribute('value', 'O')
    message.innerText = `Player "O's" turn!`
  } else {
    board.setAttribute('value', 'X')
    message.innerText = `Player "X's" turn!`
  }
}

const winCon = () => {
  if (
    allSpaces[0].getAttribute('data-held') ==
      allSpaces[1].getAttribute('data-held') &&
    allSpaces[1].getAttribute('data-held') ==
      allSpaces[2].getAttribute('data-held')
  ) {
    message.innerText = `Player "${allSpaces[1].getAttribute(
      'data-held'
    )}" wins!`
    gameWon = true
    switch (allSpaces[1].getAttribute('data-held')) {
      case 'X':
        Xwins.innerText = 'X: ' + (Xscore = Xscore + 1)
        break
      case 'O':
        Owins.innerText = 'O: ' + (Oscore = Oscore + 1)
        break
    }
    for (let i = 0; i < allSpaces.length; i++) {
      allSpaces[i].style.pointerEvents = 'none'
    }
  } else if (
    allSpaces[3].getAttribute('data-held') ==
      allSpaces[4].getAttribute('data-held') &&
    allSpaces[4].getAttribute('data-held') ==
      allSpaces[5].getAttribute('data-held')
  ) {
    message.innerText = `Player "${allSpaces[4].getAttribute(
      'data-held'
    )}" wins!`
    gameWon = true
    switch (allSpaces[4].getAttribute('data-held')) {
      case 'X':
        Xwins.innerText = 'X: ' + (Xscore = Xscore + 1)
        break
      case 'O':
        Owins.innerText = 'O: ' + (Oscore = Oscore + 1)
        break
    }
    for (let i = 0; i < allSpaces.length; i++) {
      allSpaces[i].style.pointerEvents = 'none'
      //learned pointerEvents from https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
    }
  } else if (
    allSpaces[6].getAttribute('data-held') ==
      allSpaces[7].getAttribute('data-held') &&
    allSpaces[7].getAttribute('data-held') ==
      allSpaces[8].getAttribute('data-held')
  ) {
    message.innerText = `Player "${allSpaces[7].getAttribute(
      'data-held'
    )}" wins!`
    gameWon = true
    switch (allSpaces[7].getAttribute('data-held')) {
      case 'X':
        Xwins.innerText = 'X: ' + (Xscore = Xscore + 1)
        break
      case 'O':
        Owins.innerText = 'O: ' + (Oscore = Oscore + 1)
        break
    }
    for (let i = 0; i < allSpaces.length; i++) {
      allSpaces[i].style.pointerEvents = 'none'
    }
  } else if (
    allSpaces[0].getAttribute('data-held') ==
      allSpaces[3].getAttribute('data-held') &&
    allSpaces[3].getAttribute('data-held') ==
      allSpaces[6].getAttribute('data-held')
  ) {
    message.innerText = `Player "${allSpaces[3].getAttribute(
      'data-held'
    )}" wins!`
    gameWon = true
    switch (allSpaces[3].getAttribute('data-held')) {
      case 'X':
        Xwins.innerText = 'X: ' + (Xscore = Xscore + 1)
        break
      case 'O':
        Owins.innerText = 'O: ' + (Oscore = Oscore + 1)
        break
    }
    for (let i = 0; i < allSpaces.length; i++) {
      allSpaces[i].style.pointerEvents = 'none'
    }
  } else if (
    allSpaces[1].getAttribute('data-held') ==
      allSpaces[4].getAttribute('data-held') &&
    allSpaces[4].getAttribute('data-held') ==
      allSpaces[7].getAttribute('data-held')
  ) {
    message.innerText = `Player "${allSpaces[4].getAttribute(
      'data-held'
    )}" wins!`
    gameWon = true
    switch (allSpaces[4].getAttribute('data-held')) {
      case 'X':
        Xwins.innerText = 'X: ' + (Xscore = Xscore + 1)
        break
      case 'O':
        Owins.innerText = 'O: ' + (Oscore = Oscore + 1)
        break
    }
    for (let i = 0; i < allSpaces.length; i++) {
      allSpaces[i].style.pointerEvents = 'none'
    }
  } else if (
    allSpaces[2].getAttribute('data-held') ==
      allSpaces[5].getAttribute('data-held') &&
    allSpaces[5].getAttribute('data-held') ==
      allSpaces[8].getAttribute('data-held')
  ) {
    message.innerText = `Player "${allSpaces[5].getAttribute(
      'data-held'
    )}" wins!`
    gameWon = true
    switch (allSpaces[5].getAttribute('data-held')) {
      case 'X':
        Xwins.innerText = 'X: ' + (Xscore = Xscore + 1)
        break
      case 'O':
        Owins.innerText = 'O: ' + (Oscore = Oscore + 1)
        break
    }
    for (let i = 0; i < allSpaces.length; i++) {
      allSpaces[i].style.pointerEvents = 'none'
    }
  } else if (
    allSpaces[0].getAttribute('data-held') ==
      allSpaces[4].getAttribute('data-held') &&
    allSpaces[4].getAttribute('data-held') ==
      allSpaces[8].getAttribute('data-held')
  ) {
    message.innerText = `Player "${allSpaces[4].getAttribute(
      'data-held'
    )}" wins!`
    gameWon = true
    switch (allSpaces[4].getAttribute('data-held')) {
      case 'X':
        Xwins.innerText = 'X: ' + (Xscore = Xscore + 1)
        break
      case 'O':
        Owins.innerText = 'O: ' + (Oscore = Oscore + 1)
        break
    }
    for (let i = 0; i < allSpaces.length; i++) {
      allSpaces[i].style.pointerEvents = 'none'
    }
  } else if (
    allSpaces[2].getAttribute('data-held') ==
      allSpaces[4].getAttribute('data-held') &&
    allSpaces[4].getAttribute('data-held') ==
      allSpaces[6].getAttribute('data-held')
  ) {
    message.innerText = `Player "${allSpaces[4].getAttribute(
      'data-held'
    )}" wins!`
    gameWon = true
    switch (allSpaces[4].getAttribute('data-held')) {
      case 'X':
        Xwins.innerText = 'X: ' + (Xscore = Xscore + 1)
        break
      case 'O':
        Owins.innerText = 'O: ' + (Oscore = Oscore + 1)
        break
    }
    for (let i = 0; i < allSpaces.length; i++) {
      allSpaces[i].style.pointerEvents = 'none'
    }
  } else if (
    allSpaces[0].getAttribute('data-space') == 'filled' &&
    allSpaces[1].getAttribute('data-space') == 'filled' &&
    allSpaces[2].getAttribute('data-space') == 'filled' &&
    allSpaces[3].getAttribute('data-space') == 'filled' &&
    allSpaces[4].getAttribute('data-space') == 'filled' &&
    allSpaces[5].getAttribute('data-space') == 'filled' &&
    allSpaces[6].getAttribute('data-space') == 'filled' &&
    allSpaces[7].getAttribute('data-space') == 'filled' &&
    allSpaces[8].getAttribute('data-space') == 'filled'
  ) {
    message.innerText = 'Tie Game!'
    for (let i = 0; i < allSpaces.length; i++) {
      allSpaces[i].style.pointerEvents = 'none'
    }
  }
}

const resetBoard = () => {
  allSpaces[0].setAttribute('data-held', '1')
  allSpaces[1].setAttribute('data-held', '2')
  allSpaces[2].setAttribute('data-held', '3')
  allSpaces[3].setAttribute('data-held', '4')
  allSpaces[4].setAttribute('data-held', '5')
  allSpaces[5].setAttribute('data-held', '6')
  allSpaces[6].setAttribute('data-held', '7')
  allSpaces[7].setAttribute('data-held', '8')
  allSpaces[8].setAttribute('data-held', '9')
  for (let i = 0; i < allSpaces.length; i++) {
    allSpaces[i].style.pointerEvents = 'auto'
    allSpaces[i].innerText = ''
    allSpaces[i].setAttribute('data-space', 'open')
    board.setAttribute('value', 'X')
    message.innerText = 'Click on the board to start a game!'
  }
}

const clearScoreboard = () => {
  Xscore = 0
  Oscore = 0
  Xwins.innerText = 'X: ' + Xscore
  Owins.innerText = 'O: ' + Xscore
}

const toggleComputer = () => {
  resetBoard()
  clearScoreboard()
  location.href = 'index.html'
}

////////////////////////////////
// Event Listeners Here

//write X if space is open and is "X's" turn
for (let i = 0; i < allSpaces.length; i++) {
  allSpaces[i].addEventListener('click', () => {
    if (
      allSpaces[i].getAttribute('data-space') == 'open' &&
      board.getAttribute('value') == 'X'
    ) {
      allSpaces[i].innerText = 'X'
      allSpaces[i].setAttribute('data-space', 'filled')
      allSpaces[i].setAttribute('data-held', 'X')
      message.innerText = `Computer's turn!`
      for (let i = 0; i < allSpaces.length; i++) {
        allSpaces[i].style.pointerEvents = 'none'
      }
      winCon()
      //setTimeout learned from https://www.w3schools.com/jsref/met_win_settimeout.asp
      setTimeout(computer, 1500)
    } else if (allSpaces[i].getAttribute('data-space') == 'filled')
      allSpaces[i].style.pointerEvents = 'none'
  })
}

//computer changes it to "O's" turn and writes O if chosen space is open
const computer = () => {
  if (gameWon) {
    console.log('the game is over')
  } else {
    if (board.getAttribute('value') == 'X') {
      board.setAttribute('value', 'O')
    }
    while (board.getAttribute('value') == 'O') {
      let computerChoice = Math.round(Math.random() * 8)
      if (
        allSpaces[computerChoice].getAttribute('data-space') == 'open' &&
        board.getAttribute('value') == 'O'
      ) {
        allSpaces[computerChoice].innerText = 'O'
        allSpaces[computerChoice].setAttribute('data-space', 'filled')
        allSpaces[computerChoice].setAttribute('data-held', 'O')
        for (let i = 0; i < allSpaces.length; i++) {
          allSpaces[i].style.pointerEvents = 'auto'
        }
        board.setAttribute('value', 'X')
        message.innerText = `Player "X's" turn!`
        winCon()
      } else if (
        allSpaces[computerChoice].getAttribute('data-space') == 'filled'
      ) {
        board.setAttribute('value', 'O')
      }
    }
  }
}

reset.addEventListener('click', () => {
  gameWon = false
  allSpaces[0].setAttribute('data-held', '1')
  allSpaces[1].setAttribute('data-held', '2')
  allSpaces[2].setAttribute('data-held', '3')
  allSpaces[3].setAttribute('data-held', '4')
  allSpaces[4].setAttribute('data-held', '5')
  allSpaces[5].setAttribute('data-held', '6')
  allSpaces[6].setAttribute('data-held', '7')
  allSpaces[7].setAttribute('data-held', '8')
  allSpaces[8].setAttribute('data-held', '9')
  for (let i = 0; i < allSpaces.length; i++) {
    allSpaces[i].style.pointerEvents = 'auto'
    allSpaces[i].innerText = ''
    allSpaces[i].setAttribute('data-space', 'open')
  }

  board.setAttribute('value', 'X')
  message.innerText = 'Click on the board to start a game!'
})

clearscore.addEventListener('click', () => {
  Xscore = 0
  Oscore = 0
  Xwins.innerText = 'X: ' + Xscore
  Owins.innerText = 'O: ' + Xscore
})

reset.addEventListener('click', resetBoard)

clearscore.addEventListener('click', clearScoreboard)

toggleMode.addEventListener('click', toggleComputer)
////////////////////////////////
