// 52 cards 
let suites = ["S", "H", "D", "C"];
let values = ["2" , "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let userHand = [], deck = [], dealerHand = [];
let userCount = 0, dealerCount = 0;

alert("Welcome to the game of Black Jack");
var choice = window.prompt("Do you want to begin the game[y/n]?");

if(choice === "y" || choice === "yes"|| choice === "yes "){
    startGame();
}

function startGame(){
    var currentCount = 0, userCount = 0, dealerCount = 0;
    // create deck and begin to deal
    createDeck();
    shuffle(deck);
    firstDeal();
    nextDeal();
}

// Generates the Deck being used in game
function createDeck(){
    deck = new Array();

    for(var i = 0; i < values.length; i++){
        for(var j = 0; j < suites.length; j++){
            
            //Add value with count to any face card 
            var count = parseInt(values[i]);
            if(values[i] == "J" || values[i] == "Q" || values[i] == "K")
                count = 10;
            
            if(values[i] == "A")
                count = 0;

            var card = { 
                Value: values[i],
                Suit: suites[j], 
                Weight: count
            };
            deck.push(card);
        }
    }
}


// Deals the shuffled deck out to the User & dealer
function firstDeal(){
    // deal two cards to the dealer and the user 
    for(var i = 0; i < 2 ; i++){
        userHand.push(deck.pop(i));
        dealerHand.push(deck.pop(i));
    }
}
// Deals the shuffled deck out to the User & dealer
function deal(){
    // deal two cards to the dealer and the user 
    for(var i = 0; i < 1 ; i++){
        userHand.push(deck.pop(i));
        dealerHand.push(deck.pop(i));
    }
}
// check if the user or dealer has black jack or went over count
function checkBustOrBlackJack(){
    if(userCount === 21){
        alert("The User has Black Jack! The game is over!");
        return;
    }
    if(dealerCount === 21){
        alert("The dealer has Black Jack! The game is over!");
        return;
    }
    if(dealerCount > 21 || userCount > 21){
        alert("The user or the dealer busted; More than 21");
        return;
    }
}

// grabs current count from user
function grabUserCurrentCount(){
    alert("Your current hand count ->" + userCount);
}

// deal again and check if the user wants to bet again 
function nextDeal(){
    
    getCurrentHand();
    userCount = countCards(userHand);
    dealerCount = countCards(dealerHand);
    alert("Your current hand count -> " + userCount);
    checkBustOrBlackJack();
    
    if(userCount < 21 || dealerCount < 21){
        var choice = prompt("Do you want stand or hit[s/h]?");
        
        if(choice === 's' || choice === "stand"){
            alert("The player chose to stand.");
            return;
            
        }else if(choice === 'h' || choice === 'hit'){
            alert("The player chose to hit.");
            
            while (userCount < 21){
                for(var i = 0; i < 1; i++){
                    userHand.push(deck.pop(i));
                }
                getCurrentHand();
                userCount = countCards(userHand);
                grabUserCurrentCount();
                
                if(userCount > 21 || userCount === 21){
                    alert("The User Busted or has Black Jack!");
                    break;
                }
                choice = prompt("Do you want to hit again[h/hit] or stand[s/stand]?");
                
                if(choice === 's' || choice === "stand" ){
                    alert("The user decided to stand; count ->" + userCount);
                    return;
                }
            }
        }
    }else{
        alert("The choice given is not an option thats being accounted for....");
    }
}

function getCurrentHand(){
    
    alert("Your hand:");
    for(var i = 0; i < userHand.length; i++){
        alert(`${userHand[i].Value} of ${userHand[i].Suit}`);
    }    
}

// Deals the shuffled deck out to the User & dealer
function shuffle(deck){
    let randomCardA;
    let randomCardB;
    let temp;
    
    for (let i = 0; i < deck.length; i++) {
        randomCardA = Math.floor(Math.random() * deck.length);
        randomCardB = Math.floor(Math.random() * deck.length);
        temp = deck[randomCardA];
        deck[randomCardA] = deck[randomCardB];
        deck[randomCardB] = temp;
    }
}


//counts the cards and assigns the total
//we are doing ace conversion without asking the user 
function countCards(arr){
    var sum = 0; 
    var aceCount = 0;
    
    for(var i = 0; i < arr.length; i++){
        sum += arr[i].Weight;
        if (arr[i].Weight === 11) {
          aceCount++;
        }
    }
    if (sum > 21 && aceCount > 0) {
      for (var i = 0; i < aceCount; i++) {
        if (sum > 21) {
          sum -= 10;
        }
      }
    }
    return sum;
}