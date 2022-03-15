// Create an Array of at least 3 losing messages


var lostMsg = [ 'Oh no!', ' Better luck next time!', 'Try again!'];
var ranLoss= lostMsg[Math.floor(Math.random()*lostMsg.length)];


// Create variables to count wins and losses

var winsCt=  0;
var lossCt=  0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var msg = document.getElementById('message').innerHTML;
var wins = document.getElementById('wins').innerHTML;

var lose = document.getElementById('losses').innerHTML;



// target all .box elements and attach a click event listener to each one using a loop

let box1= parseInt(document.getElementById ("box-1").textContent);
console.log(box1);
let box2= parseInt(document.getElementById("box-2").textContent);
console.log(box2);
let box3= parseInt(document.getElementById("box-3").textContent);
console.log(box3);

//[box1, box2, box3].for(function(i){
//  i.addEventListener( 'click', function(){
// console.log(i);


let boxs = document.querySelectorAll('.box');

var boxClick= parseInt(boxs.forEach(function(i){
  i.addEventListener('click', function(){
  console.log(i.innerHTML);
 });

})).textContent;

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box



// TESTING HANDLECLICK to help target clicked boxes??//


//const randomNumber = Math.floor(Math.random()*3)+1;
//console.log(randomNumber);



// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins


var randomNumber = Math.floor(Math.random()*3)+1;
  console.log(randomNumber);

//problem: runs as soon as page opens rather tahn after click, doesn't seem to be reading code, immediatly says failure msg


if (boxClick ==randomNumber){
   winsCt++;
   document.getElementById('wins').innerHTML= 'Wins:' + winsCt;
   document.getElementById('losses').innerHTML= 'Losses:' + lossCt;
   document.getElementById('message').innerHTML='You won!';}

else {
   lossCt++;
    document.getElementById('losses').innerHTML= 'Losses:' + lossCt;
    document.getElementById('wins').innerHTML= 'Wins:' + winsCt;
    document.getElementById('message').innerHTML=ranLoss;
}
console.log(msg);

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses

