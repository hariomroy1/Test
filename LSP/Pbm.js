class bird
{
    fly() {
        console.log("i can fly!")
    }
}

class Sparrow extends bird
{
    //inherit fly method from bird
}


//it violates Liskov substitution principle
//because penguin can not fly, still we inherit them
class Penguin extends bird
{
    fly()
    {
        throw new Error("I can't fly");
    }
}

function letbirdFly(bird)
{
    bird.fly();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

letbirdFly(sparrow); //i can fly

letbirdFly(penguin); // i can't fly