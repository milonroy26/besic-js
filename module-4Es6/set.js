// ES6 SET
// Set is a collection of data
// Set is almost like array
// But it does not contain any duplicates.

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

console.log(mySet); // set returns object

//duplicates values
const duplicate = ['red', 'green', 'blue', 'purple', 'brown', 'red', 'orange', 'brown',];  
const duplicateValues = new Set(duplicate);
console.log(duplicateValues); 

// ES6 SET METHODS

// 1clear(key)
// const clears = mySet.clear();
// console.log(clears);

// 2delete(key)
// const delates = mySet.delete(3);
// console.log(delates);
// console.log(mySet);

// has(key)
const has = mySet.has(4);
// console.log(has);

// values(key)
const values = mySet.values();
// console.log(values);

for (let key of values) {
    // console.log(key);
}

// Set.size

const size = mySet.size;
console.log(size);