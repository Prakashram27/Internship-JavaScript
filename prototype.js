function human(name){}
console.log(typeof(human.prototype)) // object

//object literals
let literal = {
    prop:123,
    meth : function(){}
}
console.log(literal.__proto__)
console.log(literal.__proto__.constructor)
console.log(literal.constructor)


let instance = new object();
instance.prop = 123;
instance.meth = function(){}


let cat = {}

cat.name = "Felix";
cat.hunger = 0;
cat.energy = 1;
cat.state = "idle";


// Sleep to restore energy
cat.sleep = function(amount) {
    this.state = "sleeping";
    console.log('{$this.name} is ${this.state}.');
    this.energy += 1;
    this.hunger += 1;
}
// Wake up
cat.wakeup = function() {
    this.state = "idle";
    console.log('{$this.name} woke up.');
}
// Eat until hunger is quenched
cat.eat = function(amount) {
    this.state = "eating";
    console.log('${this.name} is ${this.state}${amount} unit(s) of food.');
    if (this.hunger -= amount <= 0)
      this.energy += amount;
    else
       this.wakeup();   
// Wandering depletes energy,
// If necessary, sleep for 5 hours to restore energy
cat.wander = function() {
    this.state = "wandering";
    console.log('{$this.name} is ${this.state}.');
    if (--this.energy < 1)
      this.sleep(5);
}
cat.sleep(); // "Felix is sleeping."

function Cat(name, hunger, energy, state) {
    let cat = {}
    
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;
    
    cat.sleep = function(amount) { /* implement */ }
    cat.wakeup = function(amount) { /* implement */ }
    cat.eat = function(amount) { /* implement */ }
    cat.wander = function(amount) { /* implement */ }
    
    return cat;
}

let felix = cat("Felix", 10, 5, "idle");
felix.sleep(); // "Felix is sleeping."
felix.eat(5);  // "Felix is eating 5 unit(s) of food."
felix.wander();// "Felix is wandering."

let luna = cat("luna", 8, 3, "idle");
luna.sleep(); // "luna is sleeping."
luna.wander();// "luna is wandering."
luna.eat(5);  // "luna is eating 5 unit(s) of food."
}

const prototype1 = {
    sleep(amount) { /* implement */ },
    wakeup(amount) { /* implement */ },
    eat(amount) { /* implement */ },
    wander(amount) { /* implement */ }
}


function cat(name, hunger, energy, state){
    
    let cat = {};
    
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;
    
    cat.sleep = prototype.sleep;
    cat.wakeup = prototype.wakeup;
    cat.eat = prototype.eat;
    cat.wander = prototype.wander;
    
    return cat;
}

// Creating objects using Object.create //
const cat = {
    name: "Felix",
    state: "idle",
    hunger: 1,
}

const kitten = Object.create(cat);
kitten.name = "Luna";
kitten.state = "sleeping";

console.log(kitten);
console.log(kitten.hunger);



const prototype = {
    sleep(amount) { /* implement */ },
    wakeup(amount) { /* implement */ },
    eat(amount) { /* implement */ },
    wander(amount) { /* implement */ }
}

   let cat = Object.create(prototype);
   
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;
    
    // We no longer need them here
    //cat.sleep = prototype.sleep;
    //cat.wakeup = prototype.wakeup;
    //cat.eat = prototype.eat;
    //cat.wander = prototype.wander;
    
    return cat;

    
    // let felix = Cat("Felix", 10, 5, "idle");
    // felix sleep(); // "Felix is sleeping."
    
    // let luna = Cat("Luna", 10, 5, "idle");
    // luna sleep(); // "Luna is sleeping."
    
    
console.log(typeof object.prototype); // "object"


function Cat(name, hunger, energy, state){
    
    let cat = Object.create(Cat.prototype);
    
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;
    
    return cat;
}

// Now define methods on actual Cat.prototype object;
Cat.prototype.sleep = function { /* implement */ };
Cat.prototype.wakeup = function { /* implement */ };
Cat.prototype.eat = function  { /* implement / }, { / implement */ };
Cat.prototype.wander = function { /* implement / }, { / implement */ };

// let luna = Cat("Luna", 5, 1, "sleeping");
// felix.wakeup(); // "Luna is sleeping."

// let felix = Cat("Felix", 5, 1, "sleeping");
// felix.wakeup(); // "Felix woke up."

function Cat(name, hunger, energy, state){
    
    let cat = Object.create(Cat.prototype);
    
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;
    
    return cat;
}

// Define some methods on Cat.prototype object:
Cat.prototype.sleep = function { /* implement */ };
Cat.prototype.wakeup = function { /* implement */ };
Cat.prototype.eat = function  { /* implement / }, { / implement */ };
Cat.prototype.wander = function { /* implement / }, { / implement */ };


function Cat(name, hunger, energy, state){
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;
}


// let luna = new Cat("Luna", 8, 3, "idle");
// luna.sleep(); // "Luna is sleeping."

// let felix = new Cat("Felix", 8, 3, "idle");
// luna.sleep(); // "Felix woke up."

class Cat {
    constructor(name,hunger, energy, state) {
        this.name = name;
        this.hunger = hunger;
        this.energy = energy;
        this.state = state;
    }
    sleep()  { /* implement */ };
    wakeup()  { /* implement */ };
    eat()  { /* implement */ };
    wander()  { /* implement */ };
}


let luna = new Cat("Luna", 8, 3, "idle");
luna.sleep(); // "Luna is sleeping."

let felix = new Cat("Felix", 8, 3, "idle");
luna.sleep(); // "Felix woke up."

