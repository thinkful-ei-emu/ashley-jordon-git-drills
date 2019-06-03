function getYearOfBirth(age){
    const yearOfBirth = 2019 - age;
    return `I was born ${yearOfBirth}`;
}

function createGreeting(name, age) {
    return `Hi, my name is ${name} and I'm ${age} years old`;
}

const greeting1 = createGreeting();
console.log(greeting1);

console.log(getYearOfBirth(29));