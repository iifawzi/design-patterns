interface flyable {
    fly(): any
}

interface quackable {
    quack(): any
}


// behaviour classes: 
class flyingWithWings implements flyable {
    fly() {
        console.log("I will make you fly with wings");
    }
}


class flyWithNoWings implements flyable {
    fly() {
        console.log("I will make you fly with no-wings");
    }
}

class flyOnRocket implements flyable {
    fly() {
        console.log("I will make you fly using rocket");
    }
}

class FlyNoWay implements flyable {
    fly(){
        console.log("i'm not able to fly");
    }
}

class quack implements quackable {
    quack() {
        console.log("I will make you quack");
    }
}

class squeek implements quackable {
    quack() {
        console.log("I will make you squeek");
    }
}


abstract class duck {
    protected flyBehaviour: flyable;
    protected quackBehaviour: quackable;
    constructor(flyBehaviour: flyable, quackBehaviour: quackable) {
        this.flyBehaviour = flyBehaviour;
        this.quackBehaviour = quackBehaviour;
    }

    public performFlying() {
        this.flyBehaviour.fly();
    }

    public performQuacking() {
        this.quackBehaviour.quack();
    }

    public swimming(){
        console.log("all swims");
    }

    // using this way we can change the behaviour dynamically!!!!!!
    public setflyBehaviour(flyBehaviour: flyable){
        this.flyBehaviour = flyBehaviour;
    }

}


class rubberDuck extends duck {
    constructor() {
        super(new FlyNoWay(), new quack());
    }

}


const rubber = new rubberDuck();
rubber.performFlying(); // initially can't fly
rubber.setflyBehaviour(new flyOnRocket());
rubber.performFlying(); // now it flies!