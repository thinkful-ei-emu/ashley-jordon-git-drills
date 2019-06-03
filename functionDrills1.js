function createGreeting(name, age) {
    const yearOfBirth = 2019 - age;
    return `I was born ${yearOfBirth}`;
}

const greeting1 = createGreeting();
console.log(greeting1);

