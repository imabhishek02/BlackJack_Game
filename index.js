let firstCard=11
let secondCard=4
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
cardsEl.textContent="Cards: "+firstCard+" "+secondCard
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
  sum+=card
  renderGame()
}

