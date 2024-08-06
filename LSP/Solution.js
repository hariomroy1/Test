class Bird {
    //here eat is common behaviout in each bird
    eat() {
      console.log("I can eat!");
    }
  }
  
  class FlyingBird extends Bird {
    fly() {
      console.log("I can fly!");
    }
  }
  
  class Sparrow extends FlyingBird {
    // Inherits fly method from FlyingBird
  }
  
  class Penguin extends Bird {
    // Penguins don't have a fly method
  }
  
  function letFlyingBirdFly(bird) {
    bird.fly();
  }
  
  const sparrow = new Sparrow();
  const penguin = new Penguin();
  
  letFlyingBirdFly(sparrow); // Outputs: "I can fly!"
  // letFlyingBirdFly(penguin); // This would now result in a type error, avoiding runtime issues.
  