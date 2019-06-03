
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