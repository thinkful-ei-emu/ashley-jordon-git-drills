function getYearOfBirth(age){
    if (age < 0){
        throw new Error("Age can not be negative");
    }
    const yearOfBirth = 2019 - age;
    return `I was born ${yearOfBirth}`;
}

function createGreeting(name, age) {
    return `Hi, my name is ${name} and I'm ${age} years old`;
}

try {
    const myAge = getYearOfBirth(-29);
} catch (Error) {
    console.error(Error);
}

const greeting1 = createGreeting();
console.log(greeting1);

const myAge = getYearOfBirth();
console.log(myAge);