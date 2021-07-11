interface flyable {
    fly(): any
}

interface quackable {
    quack(): any
}


export class duck {
    constructor(public name: string) {
        this.name = name;
    }
    swim() {
        console.log(`i'm ${this.name} and i'm swimming`);
    }
}



class MallardDuck extends duck implements flyable, quackable{ // this need to fly so it implements flyable and quackable
    constructor() {
        super("MallardDuck");
    }
    display() {
        console.log("i'm MallardDuck");
    }
    fly(){
        console.log("i'm MallardDuck and i'm able to fly");
    }
    quack(){
        console.log("i'm MallardDuck and i'm able to quack");
    }
}


class RubberDuck extends duck implements quackable { // this able to quack, it implements quackable
    constructor() {
        super("RubberDuck");
    }
    display() {
        console.log("i'm RubberDuck");
    }
    quack(){
        console.log("i'm RubberDuck and i'm able to quack");
    }
}



const mallard = new MallardDuck();
mallard.quack();
mallard.fly();

const rubber = new RubberDuck();
rubber.quack();
rubber.swim();


// this way we've solved the problem of the inheritance, but we encounter another problem, what if I wanted to change the behaviour of flying a little bit? 
// I would need then, to change the fly method in all the subclasses, this's insane!!!