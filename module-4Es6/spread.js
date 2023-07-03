//SPREAD OPERATOR
let fruits = ['Apple', 'Banana'];
let products = ['lapto', 'mobile'];

let allProducts = [...fruits, ...products];
// console.log(allProducts);

// object
const person = {
    name: 'jastin',
    age: 30,
    education: {
        ssc: 2019,
        hsc: 21,
        result: 40,
    }
} 

const spreadObj = {...person};
spreadObj.age = 25;
spreadObj.education = {
    ...person.education,
}
spreadObj.education.ssc = 2020;
console.log('Spread :', spreadObj);

console.log(person);

