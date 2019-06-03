

function jediName(firstName, lastName) 
{ const newName1 = firstName.slice(0,2); 
const newName2 = lastName.slice(0,3); 
return `${newName2}${newName1}` 
}

console.log(jediName("Ashley", "Jordon"));