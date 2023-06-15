const d = new Date(); 
// console.log(d); //Return hisabe date dei

const d1 = new Date("October 13, 2014 11:13:00");
// console.log(d1); //output: 2014-10-13T05:13:00.000Z: (2014-10-13)🫡13:00.000Z?

const d2 = new Date(2023);
// console.log(d2); //🫡

const d3 = new Date(200000000000);
// console.log(d3); //🫡

const d4 = new Date(-100000000000);
// console.log(d4);//🫡

const d5 = new Date();
// console.log(typeof(d5), d5); //By Default object return kre.
// console.log(d5.toString()); //output:Wed Jun 14 2023 17:02:14 GMT+0600 (Bangladesh Standard Time)
// console.log(d5.toDateString()); //output: Wed Jun 14 2023

// toUTCString() method
// console.log(d5.toUTCString()); //🫡Wed, 14 Jun 2023 11:08:45 GMT.but akane time millo na kno?

// toISOString() method
// console.log(d5.toISOString()); //output: 2023-06-14T 11:14:06.363Z 🫡(11:14:06.363Z time millo na?)

let msec = Date.parse("March 21, 2012");
// console.log(msec); // outpur🫡1332266400000?

// Get Date Methods
//👍 weekday, hour, minute, second millisecond, mounth, year, day arry mto index 0 hte count kra hoi.

const d6 = new Date("2021-03-25");
// console.log(d6.getMonth()); //output: 2; 0 hte count hoice;date return kre.

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();
let month = months[d.getMonth()];
// console.log(month);//output: june; running months nia aslo
// console.log(date.getDate()); // tarik return korbe.