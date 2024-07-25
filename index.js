// let fcard=document.getElementById('first');
// let scard=document.getElementById('second');



let Cards = [];
let sum = 0;
let hasBlackJack = false;
// take hasBlackJack  boolean to get to konw
// that it it true or false
let isAlive = false;
//take an array
//declare a var called message and assign a empty string
let message = " ";
let msg = document.getElementById('messages');

let s = document.getElementById('add');

let cardse = document.getElementById('cards-el');
// create an object playern  go to line 63

// let player={
//     playerName:"sakshi :",
//     playerChips:145
// }

// let play=document.getElementById('player-El')
// play.innerText=player.playerName+"$"+player.playerChips;

let playerChips = 145;

function abc() {
    // Get the value of the input field
    let playerName = document.getElementById('player-input').value;

    // Get the element where the player's name will be displayed
    let changename = document.getElementById('player-El');

    // Update the text content of the element
    changename.innerText = playerName + " $" + playerChips;
}

function startGame() {
    isAlive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
 Cards = [firstcard, secondcard];
    sum = firstcard + secondcard;

    renderGame();
}


function renderGame() {

    cardse.innerText = "Cards :"

    for (let i = 0; i < Cards.length; i++) {
        cardse.innerText += " " + Cards[i] + "  ";
    }

    s.innerText = `Sum: ${sum}`;
    if (sum <= 20) {
        //reassign a  message variable to the string we are logging out
        message = "Do you want play another card";
    }
    else if (sum === 21) {
        message = "Wowww!!!You win the game 🥳!!";
        hasBlackJack = true;
    }
    else {
        message = "Sry You lost 😭 !!";
        isAlive = false;
    };
    msg.innerText = message;
};

// create an object player


function newStart() {
    if (isAlive === true && hasBlackJack === false) {


        let cardss = getRandomCard()
        sum += cardss;
        Cards.push(cardss);

        renderGame();
    }

}
//function to get random number and call it where u have took a number before
function getRandomCard() {
    let randomnumber = Math.floor(Math.random() * 12) + 1;
    // 1 to 12
    if (randomnumber > 10) {
        return 10;
    }
    else if (randomnumber === 1) {
        return 11;
    }

    else {
        return randomnumber;
    }

}

