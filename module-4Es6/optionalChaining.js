const person = {
    name : "Milon Chandro",
    age : 19,
    education: {
        ssc: 'Jaldhaka,Nilphamari',
        // graduation: {
        //     diploma: "Computer Since",
        //     year: 2023,
        // }
    }
}

const graduationYear = person.education?.graduation?.year; // object property thakte pare and nao thakte pare.
console.log(graduationYear);