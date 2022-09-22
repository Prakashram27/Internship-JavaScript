function global(){
    function inner(){
        console.log(inner)
    }
    inner();  // call inner
}
global();  // "inner"


function sendMail(from,sub,Message){
    let msg = `${sub} > ${Message} recieved from ${from}`
    let send = function()
    {console.log(msg)}
    send();
}
sendMail("Prakash", "Re : Subject", "Good news")

// function sendMail(from,sub,Message){
//     let msg = `${sub} > ${Message} recieved from ${from}`
//     let send = function()
//     {console.log(msg)}
//     return send();
// }
// // Create a reference to sendMail()
// let ref = sendMail("Prakash", "Re : Subject", "Good news")
// // call by reference name
// ref();

let print, set , increase , decrease;

function manager(){
    console.log("manager()")
    let number = 15;
    print = function() {console.log(number)};
    set = function(value) {number = value};
    increase = function(){number++}
    decrease = function(){number--}


}
manager();
print();
for(let i=0;i<200;i++) increase();
print();
decrease();
print();
set(755);
print();
let old_print = print // save a reference to a print
manager()  // initialise manager() again
print();
old_print();




// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}
console.log(profile())


//           *         *          //

function init() {
    var name = "Lamborgni";                      // name is a local variable created by init
    function displayName() {           // displayName() is the inner function, a closure
      console.log(name);              // use variable declared in the parent function
    }
    displayName();
  }
  init();
  
  
  
  function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();

// Arity 

  function f(a,b,c){} // define a function with 3 parameters
  // get function arity
  let arity = f.length

  console.log(arity)


// Currying

let planet = function(a){
    return function(b){
        return `Favorite planets are  ${a}  and  ${b} `
    };
};

// let favplanet = planet("jupitar");
// console.log(favplanet("Earth"));
// console.log(favplanet("Mars"));
// console.log(favplanet("Venus"));

// Call the curried function with two argument

console.log(planet("Pluto")("Moon"));


let planets = (c) => (d) => `Favorite planets are  ${c}  and  ${d} `
console.log(planets("venus") ("mars"));


