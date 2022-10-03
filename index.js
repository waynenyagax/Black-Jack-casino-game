//object
let player = {
    name: "per",
    chips: 145
}

//VARIABLES
let sum = 0
let hasBlackjack = false
let cards = []
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById ( "cards-el")


let playerEl= document.getElementById(player-el)
playerEl.textContent = player.name + ":$" + player.Chips

function getRandomCard(){
   
    let randomnumber = math.floor (math.random() * 13) +1
    if (randomnumber>=10){
        return 10
    }
    else if (randomnumber<=1){
        return 11
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondcard = getRandomCard()
    let cards = [firstcard, secondcard]
    let sum = firstcard + secondcard

    renderGame()
}
function renderGame(){
    cardsEl.textContent = "cards:" 
    for(let i = 0; i<cards.legnth; i++){
        cardsEl.textContent += cards[i] + i++
    }
    sumEl.textContent = "sum:" + sum
    if (sum <= 20){
        message = "DO YOU WANT TO DRAW A NEW CARD"
   }else if (sum === 21){
       message="WOOHOO YOUVE GOT BLACK JACK"
       hasBlackjack= true
   }else {
       message = "you are out of the game "
       isAlive = false
   }
   messageEl.textContent = message

}

function newCard(){
    if(alive === true && hasBlackjack ===false )
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()

}


