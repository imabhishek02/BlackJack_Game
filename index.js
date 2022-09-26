let firstCard=11
let secondCard=4
let cards=[firstCard,secondCard]
let sum=firstCard+secondCard
let hasBlacJack=false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")

function startGame(){
  renderGame()
}

function renderGame(){
  sumEl.textContent="Sum:"+sum
cardsEl.textContent="Cards: "+cards[0]+" "+ cards[1]
  if(sum<=20){
  message="Do you want to draw a new card?"
}else if(sum===21){
  message="Wohoo! you've got BlackJack"
  hasBlacJack=true
}else{
  message="You're out of the game!"
  isAlive=false
}
messageEl.textContent=message 
}

function newCard(){
  console.log("draw new card!")
  let card=3
  cards.push(card)
  sum+=card
  renderGame()
}

