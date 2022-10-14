/*let lapsCompleted=0
function incrementLap(){
	lapsCompleted=lapsCompleted+1
}
incrementLap()
incrementLap()
incrementLap()
console.log(lapsCompleted)*/


/*function increment(){
	console.log("clicked")
}
increment()*/

/*let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
console.log(countEl)

let count=0;

function increment(){
	count +=1;
	countEl.textContent=count;
	console.log(countEl)
}

function save(){
	let countStr= count+ "-"
	saveEl.innerText= saveEl.innerText+ countStr
	countEl.textContent=0
	count=0
	//console.log(count)
}*/


/*let welcomeEl=document.getElementById("welcome-el")
let name="Saung Thet Ngon Oo"
let greeting="Welcomeback"
welcomeEl= greeting +" "+ name;
welcomeEl.innerText+="👋"
console.log(welcomeEl.innerText)*/

/*let firstName="Saung Thet"
let lastName="Ngon Oo"
console.log(firstName+" "+lastName)*/

/*let name="Linda"
let greeting="Hi there"
function greetLinda(){
	console.log(greeting + "," + name + "!")
}
greetLinda()*/

/*let myPoints=3
function add3Point(){
myPoints +=3
}
function remove1Point(){
myPoints -=1
}
add3Point()
add3Point()
add3Point()
remove1Point()
remove1Point()
console.log(myPoints)*/

/*console.log("2"+2)//22
console.log(11+7)//18
console.log(6+"5")//65
console.log("My points:"+5+9)//My points:59
console.log(2+2)//4
console.log("11"+"14")//1114*/

/*let errorParagraph=document.getElementById("error")
console.log(errorParagraph)

function purchase(){
	console.log("button Clicked")
	errorParagraph.textContent="Something went wrong, please try again"
}*/

/*let num1=8
let num2=2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
let sumEl=document.getElementById("sum-el")

function add(){
let result= num1 + num2
sumEl.textContent= "Sum="+ result;
}

function subtract(){
let result= num1 - num2
sumEl.textContent= "Subtract="+ result;
}
function divide(){
let result= num1 / num2
sumEl.textContent= "divide="+ result;
}
function multiply(){
let result= num1 * num2
sumEl.textContent= "multiply="+ result;
}*/

firstCard=10
secondCard=7
let cards=[firstCard,secondCard]
let sum=firstCard+secondCard+6
let hasBlackJack=false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")
console.log(messageEl)
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
//let sumEl=document.querySelector("body")
//console.log(sum)
function startgame(){
	rendergame()
}
function rendergame(){
	cardEl.textContent="Cards:"
	for(let i=0;i<cards.length;i++){
		cardEl.textContent+=cards[i]+" "
	}
	sumEl.textContent="Sum:"+sum
	if(sum<=20)
	{
	message="Do you want to draw a new card!😀"
	}else if(sum===21){
	message="Wohoo! You've got Blackjack!🥳"
	hasBlackJack=true
	}else{
	message="You're out of the game!😫"
	isAlive=false
	}
//console.log(hasBlackJack)
	console.log(message)
}

function newCard(){
	//console.log("Drawing a new card from deck")
	let card=getRandomCard()
	sum+=card
	cards.push(card)
	console.log(cards)
	rendergame()
}
function getRandomCard(){
	let randomNumber=Math.floor(Math.random()*6)
	return randomNumber
}

/*let age=19
if(age<=21){
	console.log("You can't enter the club")
}else{
	console.log("Welcome!")
}*/
/*let age=1145
if(age<100){
	console.log("Not elegible")
}else if (age===100){
	console.log("Here is your birthday card from the King!")
} else {
console.log("Not elegible, you have already gotten one")
}*/
/*let cards=[7,4]
cards.push(6)
console.log(cards)
console.log(cards.length)
for(let i=0;i<cards.length;i++){
console.log(cards[i])
}*/
/*let sentence=["Hello ","my ","name ","is ","per"]
let greetingEl=document.getElementById("greeting-el")
for(let i=0;i<sentence.length;i++){
greetingEl.textContent += sentence[i]
}
console.log(greetingEl)*/

/*let player1Time=102
let player2Time=107
//cmd+d - ctrl+d
function getFastestRaceTime(){
	if(player1Time<player2Time){
		return player1Time
	}else if(player2Time<player1Time){
		return player2Time
	}else{
		return player1Time
	}
}
let fastRace=getFastestRaceTime()
console.log(fastRace)
function TotalReacTime(){
	return player1Time+player2Time
}
let totalTime=TotalReacTime()
console.log(totalTime)*/
