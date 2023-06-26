
// for in loop 
//only use object methods for in loop;
// returns key of body

const myInformation = {
    name: 'John Doe',
    age: 20,
    city: 'New York',
}

for(info in myInformation) {
    console.log(`${info}: ${myInformation[info]}`);
}


