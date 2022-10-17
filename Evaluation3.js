// 1. What is the scope of ‘this’ inside the Arrow function? Explain with an example?

obj1 ={
    naming : function(){
        console.log(this)
      },
     arrfunc : () =>{
        console.log(this)   
      }
    
    }
    obj1.naming()   // refers owner object
    obj1.arrfunc()  // refers window object



// 2. How would you create all permutations of a string?

let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  }
  console.log(findPermutations("abcd"))


//   3. What is the difference between when classic and arrow functions are used as event
// callbacks?

// // Tradition function
// let button = document.getElementById('btn');
// button.addEventListener('click', function() {
//   this.classList.toggle('on');
// });

// Arrow function  // here this keyword will not bound 
// let button = document.getElementById('press');
// button.addEventListener('click', () => {
//   this.classList.toggle('on');
// });  


// 4. Look at the code below, you have a for loop if you have setTimeout inside it. If log the
// loop counter inside setTimeout, what will be logged?

for(var i = 0; i < 10; i++) {
  setTimeout(function() {
  console.log(i);
  }, 10);
}     
// output 
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10




// 5. Explain the Class instance method and static method with an example? 

// static method 
const person = {
    name : "Vikram",
    age  : "20",
    say  : function() {return "Hello "+this.name}
} 
person.say(); 

// Creating an object using the object constructor. 

class stud{
    constructor(fname,age,studies){
    this.fname = fname;
    this.age = age;
    this.studies = studies;
  }
  }
  var student = new stud("Chris", 21, "Computer Science");
  console.log(student)




// 6. How does “this” works inside the Class method with an example?


class Mobile  {
    constructor(cost, weight){
    this.cost = cost;
    this.weight = weight;
    }
    };
   let model1 = new Mobile(14000, "14g"); 
   console.log(model1)

// 7. What is the execution order of the following block of code?

const ex1 = () => console.log(ex1)
const ex2 = () => console.log(ex2)
const ex = () => {
console.log(ex)
setTimeout(ex1, 1000)
ex2()
}
ex()




// 8. Explain the event loop with an example? 

console.log('this is the start');

setTimeout(() => {
  console.log('Callback 1: this is a msg from call back');
}); // has a default time value of 0

console.log('this is just a message');

setTimeout(() => {
  console.log('Callback 2: this is a msg from call back');
}, 0);

console.log('this is the end');



// 9. Create a custom event listener and explain? 

let x = 5;
    const event = new Event("start");
     
    document.addEventListener('start', ()=>{
      console.log("Start event triggered")
    });
     
    if(x == 5){
      document.dispatchEvent(event);
    }



// 10. Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example? 


class Garden{
    constructor(name){
        this.familyName = name;
    }
    //method to return the string
    toString(){
        return (`Name of the Family: ${this.familyName}`);
    }
}
class plant extends Garden{
    constructor(familyName,surName){
        //super keyword for calling the above class constructor
        super(familyName);
        this.surName = surName;
    }
    toString(){
        return (`${super.toString()},Plant surName: ${this.surName}`);
    }
}
let plant1 = new plant('Hibiscus',"Rosa");
console.log(plant1.toString());
let plant2 = new plant('Hibiscus',"Mutabilllis");
console.log(plant2.toString());




