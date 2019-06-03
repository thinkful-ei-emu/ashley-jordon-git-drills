//Drill #1
function jediName(firstName, lastName) 
{ const newName1 = firstName.slice(0,2); 
const newName2 = lastName.slice(0,3); 
return `${newName2}${newName1}` 
}

console.log(jediName("Ashley", "Jordon"));

//Drill #2
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

//Drill #3
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

//Drill #4
function howManyDays (month, leapYear) {
    
    switch(month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "September":
        case "October":
        case "December":
           return `${month} has 31 days`
            break;
        case "February":
            if (leapYear = true) {
                return`${month} has 29 days`
            }           
            else {
                return `${month} has 28 days`
            }            
            break;          
        case "April":
        case "June":
        case "November":
            return `${month} has 30 days`
            break;
        default: 
        throw new Error("Must provide a valid month");            
        
    }
   
}
try {
    howManyDays("hello");
}
catch(error){
    console.error(error);
}
console.log(howManyDays("February", true));
console.log(howManyDays("June"));

//Drill #5
function game(num) {        
const computer = Math.floor(Math.random( )* 3) + 1; 
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
}      

try {
    game(5);
}
catch(error) {
    console.error(error);
}
const playerTest = game(3);
console.log(playerTest);

