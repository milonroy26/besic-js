class Parent {
    parentWealth() {
        let wealth = 20000000;
        console.log(wealth);
    };

    flat() {
        let flat = 5;
        console.log(flat);
    }
}

class Child extends Parent {
    // method over raiding
    flat(){
        let flat = 10;
        console.log(flat);
    }
}

let obj = new Parent;
obj.flat();

// chaild
let obj2 = new Child;
obj2.parentWealth();
// kno parent div hte kno chaild class extends korle parent diver classer property gula chaild div-a acces korte parbo.

// **METHOD OVER RAIDING
const overloding = new Child;
overloding.flat();

// ** Super Keyword
class Child1 extends Parent{
    demo(){
        super.parentWealth();
    }
}

const spers = new Child1;
spers.demo();

