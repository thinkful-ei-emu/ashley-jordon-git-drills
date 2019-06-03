
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
