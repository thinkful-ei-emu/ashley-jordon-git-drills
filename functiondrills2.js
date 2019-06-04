function jediName(firstName, lastName) 
{ const newName1 = firstName.slice(0,2); 
const newName2 = lastName.slice(0,3); 
return `${newName2}${newName1}` 
}

console.log(jediName("Ashley", "Jordon"));

function beyond (num) {
    if (num === Infinity) {
       console.log("And beyond");
    }
    if (num !== Infinity && num > 0) {
        console.log("To infinity")
    }
    if (num !== Infinity && num < 0) {
        console.log("To negative infinity")
    }
    if (num === 0){
        console.log("Staying home")
    }
    
};

console.log(beyond(-5));

function decode (word) {
    let resultArray = [];
    const splitArray = word.split(" ");
    
   
    for (let i= 0; i < splitArray.length; i++){
        
        if (splitArray[i].charAt(0) === "a"){
            resultArray.push(splitArray[i].charAt(1));          
           
        }
        else if (splitArray[i].charAt(0) === "b"){
            resultArray.push(splitArray[i].charAt(2));
            
        }
        else if (splitArray[i].charAt(0) === "c"){
            resultArray.push(splitArray[i].charAt(3));
           
        }
        else if (splitArray[i].charAt(0) === "d"){
            resultArray.push(splitArray[i].charAt(4));
           
        }
        else {
            
           
            resultArray.push(" ");
        }
    }

    let result = resultArray.join("");
    console.log(result);
   

}

let testVar = "craft block argon meter bells brown croon droop";
console.log(decode(testVar));

/*
function (month, leapYear) {
    switch(leapYear) {
        case leapYear:
    }
    switch(month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "September":
        case "October":
        case "December":
           result = `${month} has 31 days`
            break;
        case "February":
            result = `${month} has 28 days`
        case "April":
        case "June":
        case "November":
            result = 
            
        
    }
}
*/
// ashley's version
function game(num) {        
const randomNo = Math.floor(Math.random( )* 3) + 1; 
let computer = randomNo;
console.log(`The computer chose ${computer}`);
    if (num > 3) {
        throw new Error ("Must choose a number from 1-3");
    }
   else if (num === computer){
       return "you tied";
   }
   else if (num === 1 && computer === 2) {
       return "rock beats scissors, you win!";
   }
   else if (num === 1 && computer === 3){
       return "paper beats rock, you lose";
   }
   else if (num === 2 && computer === 3) {
       return "scissors beats paper, you win!";
   }
   else if (num === 2 && computer === 1) {
       return "rock beats scissors, you lose";
}
   else if (num === 3 && computer === 1) {
       return "paper beats rock, you win!";
   }
   else if (num === 3 && computer === 2) {
       return "scissors beats paper, you lose";
   }
   
 //jordon's version   
function game(num) {
    const computer = Math.floor(Math.random() * 3) + 1;
    let choice1;
    let choice2;

    if(computer == 1){
        choice2 = "rock";
    } else if (computer == 2){
        choice2 = "paper";
    } else {
        choice2 = "scissors";
    }

    if (num == 1){
        choice1 = "rock"
    }else if (num == 2){
        choice1 = "paper"
    }else {
        choice1 = "scissors"
    }


if (choice1 == choice2){
        return "Tie!";
    }

if(choice1 === "paper"){
    if(choice2 === "rock"){
        return "Paper(YOU) Wins!"
    }
}

if(choice1 === "paper"){
    if(choice2 === "scissors"){
        return "Scissors(BOT) Wins"
    }
}

if (choice1 === "rock"){
    if (choice2 === "paper"){
        return "Paper(BOT) Wins!"
    }
}

if (choice1 === "rock"){
    if (choice2 === "scissors"){
        return "Rock(YOU) Wins!";
    }
}

if(choice1 === "scissors") {
     if(choice2 === "rock") {
            return "Rock(BOT) Wins!";
    }
}

if (choice1 === "scissors"){
    if (choice2 === "paper"){
        return "Scissors(YOU) Wins!";
    }
}


}
try {
    game(5);

}
catch(error) {
    console.error(error);
}
const playerTest = game(3);
console.log(playerTest);

// PLAYER CONTROLS
// 1 = rock
// 2 = paper
// 3 = Scissors
// ***CHANGE NUM PARAMETER BELOW ***
console.log(game(2));
