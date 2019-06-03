function getYearOfBirth(age){
    if (age < 0){
        throw new Error("Age can not be negative");
    }
    const yearOfBirth = 2019 - age;
    return `I was born ${yearOfBirth}`;
}

function createGreeting(name, age) {
    if (name === undefined && age === undefined){
        throw new Error("Arguments not vailid")
    }

    if (typeof age !== 'number' || typeof name !== 'string') {
           throw new TypeError("Type not valid");
        }
    return `Hi, my name is ${name} and I'm ${age} years old`;
}

try {
   getYearOfBirth(-29);
} catch (Error) {
    console.error(Error);
}

try {
    createGreeting("Ashley", "twenty nine");
} catch (Error) {
    console.error(Error);
}

const greeting1 = createGreeting("Jordon", 29);
console.log(greeting1);

const myAge = getYearOfBirth();
console.log(myAge);
