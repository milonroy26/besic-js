// Rest Parameter

function myFunction(...numbers){
    let sum = 0;
    for(let num of numbers){
       sum += num;
    }
    console.log(sum);
}

myFunction(1, 2, 3, 4, 5, 5, 6);


