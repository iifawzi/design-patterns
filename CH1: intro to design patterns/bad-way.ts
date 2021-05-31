// THE WRONG WAY: 

export class duck {
    constructor(public name: string) {
        this.name = name;
    }
    quack() {
        console.log(`i'm ${this.name} and i'm quacking`);
    }
    swim() {
        console.log(`i'm ${this.name} and i'm swimming`);
    }

    fly(){
        console.log(`i'm ${this.name} and i'm flying`);
    }
}



class MallardDuck extends duck {
    constructor() {
        super("MallardDuck");
    }
    display() {
        console.log("i'm MallardDuck");
    }
}


class ReadHeadDuck extends duck {
    constructor() {
        super("ReadHeadDuck");
    }
    display() {
        console.log("i'm ReadHeadDuck");
    }
}


class RubberDuck extends duck {
    constructor() {
        super("RubberDuck");
    }
    display() {
        console.log("i'm RubberDuck");
    }
}



const mallard = new MallardDuck();
mallard.quack();
mallard.swim();

const rubber = new RubberDuck();
rubber.quack();
rubber.swim();
rubber.fly(); // the problem is, the rubber duck shouldn't fly!!!!!



// first solution: is to orverride in the classes that diddn't flay
    // this would be a problem, what if we have million subclass that didn't fly??

// secondd solution is to make an interfaces, and whoever need to fly, he should make the implementation his way: 
