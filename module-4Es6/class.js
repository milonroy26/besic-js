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
obj2.addname();