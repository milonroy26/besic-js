class Myclass {
    myfun1(){
        console.log('funciton 1')
    }
    myfun2(firstName){
        console.log(firstName)
    }
    myfun3(){
        console.log('funciton 3')
    }
    myfun4(){
        console.log('funciton 4')
    }

}

const obj = new Myclass;
obj.myfun1();
obj.myfun2('Milon');

// constructor

class Myclass2 {
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }
    
    addname(){
        const fullname = this.firstName + ' ' + this.secondName;
        console.log(fullname);
    }
}

const obj2 = new Myclass2('Milon', 'Cahndro');
obj2.addname();


// Static Keyword
class Myclass3 {
    static addSum(num1, num2){
        let sum = num1 + num2;
        console.log(sum);
    }
}

// const obj3 = new Myclass3;
// obj3.addSum(10, 20);

// static kewword: use korele sorasori class ke acces kore class property ke acces kore jabe.
const obj3 = Myclass3.addSum(30, 40)

