// object
const person = {
    name: 'jastin',
    age: 30,
    education: {
        ssc: 2019,
        hsc: 2021,
        result: 40,
    }
} 

const {name, age, education: {ssc, hsc}} = person;
console.log(name, age, ssc, hsc );

// array
const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = numbers;
console.log(a);

// value shwap
let number1 = 10;
let number2 = 20;

[number2, number1] = [number1, number2];
console.log(number1, number2);
