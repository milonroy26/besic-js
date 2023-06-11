// JavaScript array
const friends = ['joy', 'joni', 'toni', 'roki'];

for(let i = 0; i < friends.length; i++){
    // console.log(`My Best Friend Name is : ${friends[i]},`);
}

// JavaScript array concat()
const number1 = [1, 3, 4, 5, 6];
const number2 = [22, 44, 66, 66];
const fullArray = number1.concat(number2);
// console.log(fullArray); //main array no change.

// from() method
const myName =  "milon Roy";
const fromMethod = Array.from(myName);
// console.log(fromMethod); //From() method Kno akta string ke array convert kre dei, and space ke length and index hisabe count kre.

// filter 
const ages = [16, 22, 44, 24, 45];

function checkAdult(age){
    return age >= 18;                  //🤔akane age peramiter ki array filter kre element gula paice?
}                                      
const result = ages.filter(checkAdult);
// console.log(result);  //filter output hisabe arry return kre

// JavaScript array find()
const findResult = ages.find(a => a > 22);
// console.log(findResult);
// Ami jodi next number acces kori findLast method() use korbo
const findLastResult = ages.findLast(a => a > 22); 
// console.log("Find Last:", findLastResult);

// JavaScript array forEach() method
const array1 = ['Milon', 'Jeson', 'Jastin'];
array1.forEach(element => {
    // console.log(`This is ForEach Element: ${element}`);
});

// JavaScript array includes() 
const arrayIncludes = array1.includes('Sagor');
// console.log(arrayIncludes); //js includes() method array element kuje, and-true false return kre.

// JavaScript array indexOf()
const arrayIndexOf = array1.indexOf('Jastin');
// console.log(`array index of number: ${arrayIndexOf}`);  //array index number kto seta bole dei.

// e JavaScript array pop() 
const arrayPop = array1.pop();
// console.log(`Array Pop Element: ${arrayPop}`);
// console.log(array1); // pop korele array last element ber hoia jai and main array ke change kre. 

// JavaScript array push()
const arrayPush = array1.push('soikot');
console.log(`Array Push Element : ${arrayPush}`); //console korle index number show korbe
// console.log(array1); //Array push method Ahmar Total arrry ke change kore.

// JavaScript array reverse() 
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayReverse = array2.reverse();
// console.log(arrayReverse); //Reverse main array ke change kre and pura array ta ke ultai dei.

// JavaScript array slice()
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arraySlice = array3.slice(3, 6) //akane 456 ke keta nia asbo.Akane slice first number assign korar somai akta kop mare and 2nd number number akta kop mare. 2koper majamaji item gula ke nia ase. but main array change hoi na.
// console.log(arraySlice);

// JavaScript array sort()
const array4 = [33, 55, 22, 44, 66, 35, 30];
const arraySort = array4.sort();
// console.log(arraySort); //Sort method main array ke change kre, and array item gulake scending order sajia nei.

//JavaScript array splice()
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arraySpilice = array5.splice(4, 4, 40, 84, 97); //5 6 7 8 ke delate korbo,
console.log(arraySpilice); //😇 Akane Ami Splice Method vitore je notun item gula add korlam je sob item delate korci tar jaigai item gula add hlo,kintu ami jdi chai amr array last kno item-er pre ai notun item gula add korte chai ta hle ki jabe?
console.log(array5); //splice main array ke change kre, splice first peramiter start number ble dei, 2nd delete Count kre, then items add kre





