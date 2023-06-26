
//Es6 map 

const myData = new Map();
myData.set('name', 'jeson');
myData.set('age', 30);
myData.set('gender', 'male');

// console.log(myData.values());

// map retruns kre akta array

// object

const myObj = {
    name: 'jeson',
    age: 30,
    gender:'male'
}

// console.log(myObj);
const res = Object.keys(myObj).map(key => {
    for(let i = 0; i < 1; i++) {
        console.log(`key: ${key}, value: ${myObj[key]} `);
    }
})

// delete(key)
// myData.delete('age');
// console.log(myData);

// get(key)
const myAge = myData.get('name');
// console.log(myAge);

// clear(key)
// const allClear = myData.clear();
// console.log(allClear);

//has(key)
const hasName = myData.has('name');
console.log(hasName); //retruns true and false;

