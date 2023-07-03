// dabole it
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2); 

console.log(doubledNumbers); //return korbe new akta array but main array ke change kre na.

// Same work for loop
let dabole = [];
for(let i = 0; i < numbers.length; i++){
    dabole.push(numbers[i] * 2);
}
console.log('forLoop : ', dabole);

// object
const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Mike', age: 35 }
  ];
  
//   const capitalizedNames = people.map(perosn => {
//     let userName = (perosn.name.toUpperCase());
//     return userName;
//   })

const capitalizedNames = people.map(person => ({
    name:  person.name.toUpperCase(),
    age: person.age
}))
  
console.log(capitalizedNames);

const person = [
    {
        name: 'John',
        age: 30,
        isStudent: false,
        hobbies: ['reading', 'playing guitar', 'cooking'],
        address: {
          street: '123 Main St',
          city: 'New York',
          country: 'USA'
        }
    }
]

const mapObj = person.map(element => {
    console.log('My Name Is :', element.name);
}) 


