// JAVASCRIPT FUNCTIONS

function addName(){
    const firstName = "Jeson";
    const lastName = "Deo";
    const fullName = firstName + lastName;
    console.log(fullName)
}

addName();

// seme function other way

function fullName(fName, lName){
    return fName + lName;
}
const userName = fullName('jastin', " "+  'Timbar');
console.log(`My name is ${userName}`);
