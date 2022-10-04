"use strict"

// 1. Display prime numbers 1 to 200?
function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}
function display(n) {
    let primeNumbers = [];
    for ( let i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            primeNumbers.push(i);
        }
    }
    console.log(primeNumbers); // use arr result on your own
}
display(200);

// 2. From two sorted arrays, how would you find the common numbers?

let list1 = [1,2,4,6,7,8]
let list2 = [2,5,6,8]
let common = []

for(let i=0;i<list1.length;i++){
    for(let j=0;j<list2.length;j++){
        if(list1[i]==list2[j]){
            common.push(list1[i])

        }
    }
}
console.log(common)

// 3. Explain about function Anatomy, Anonymous function and Assigning function to a
// variable with an example?

// function update(a,b,c,d="hi";){
//     a : 7
//     b = []
//     c = {}
//     d = "hi";
//      this; // context : windows or object instance
//      return true;
    
//     }

// Anonymous Functions //
(function() {  
    console.log('Hello');  
})();  

setTimeout(function () {  
    console.log('Execute later after 1 second')  
}, 1000);  

// Anonymous function used to intercept a mouse click event.

// document.addEventListener("click",function(){
//     console.log("Document was clicked");
//     console.log(arguments)
// })

// Assigning Functions To Variables

var print = function(){
    console.log("Print something in 1 second");
    console.log(arguments)
}
var clicked = function(){
    console.log("Document was clicked");
    console.log(arguments)
}
// We can now call these functions by their name:
print();
clicked();


// 4. Show an example ofSafegrounding function parameters?

function fun(func){
    console.log(func())
    }
    var fArray =[];
     var f = function(){}
fun(fArray) // pass array instead of function

// // Output
// c:\Users\Prakash\Desktop\javascript\Internship\new.js:2
// console.log(func())

function fun(func){
    if(typeof(func) == "function"){
    console.log(func())
    }
    }
    var fArray =[];
    var f = function(){}
    fun(fArray)

// 5 .Explain `this` keyword with an example?

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;   // this refers to the person object.
    }

  };

  let xyz = this;
  console.log(xyz == window)

// 7. Difference between map, reduce and filter methods? With an example

// map
let Arr = [3, 4, 5, 6];
let ModifiedArr = Arr.map(function(element){
    return element *3;
});
console.log(ModifiedArr); // [9, 12, 15, 18]

  
//filters
const Numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let Positive_array = Numbers.filter(function(value) {
    return value >= 0; });

console.log(Positive_array);
 
// reduce
var numbers = [1,2,3,4,5];
var initialVal = 0;
let result=numbers.reduce((accu, val) => val + accu , initialVal);
console.log(result) // 15


// 8. Count Total number of zeros from 1 up to 50 

const start = 0;
const end = 100;
//convert input value to strin
// check if type of value is number or not 
if(typeof start === "number" && typeof end === "number" ){
        let count = 0;
        for(let i = start ; i <= end ; i++ ){
            const numberToString = i + "" ;
            count += numberToString.split("0").length - 1;
        }
        console.log(count);
    }


    var arr = [1,2,3,5,6,8];
    var output =[];
    var k = 0;
    
// 9. The following array of numbers show the missing number? ([1,2,3,5,6]) 
    for (var i=arr[0];i<arr[arr.length-1];i++){
      if(arr[k]==i){
      k++
      }
      else{
      output.push(i)}
      
    }
    if(output.length==1){
      console.log(output[0])
    }
    else if(output.length>1){
      console.log(output)
      }
    else{
    console.log("No Missing numbers in the given array")
    }
    

// 10. Write a program for calculating age using Date of birth? (1990)

function CurrentAge(BirthYear){
    const ConvertToString = BirthYear + "";
if(typeof BirthYear === "number" && ConvertToString.indexOf(".") === -1)    {
    const year = new Date();
    const CurrentYear = year.getFullYear();
    const Age = CurrentYear - BirthYear;
    console.log(Age);
}else
 console.log("enter the valid value");
}
CurrentAge(2002);


let Dob = '20020413';
let Year = Number(Dob.substr(0, 4));
let Month = Number(Dob.substr(4, 2)) - 1;
let Day = Number(Dob.substr(6, 2));
let Today = new Date();
let Age = Today.getFullYear() - Year;
if (Today.getMonth() < Month || (Today.getMonth() == Month && Today.getDate() < Day)) {
  Age--;
}
console.log(Age);


// 11. In the Javascript function, what are the differences between call by value and reference?
//call by value
let a = 1;
let b = a;
b = b + 2;
console.log(a); // 1
console.log(b); // 3

// cal by reference 
let x = [1];
let y = x;
y.push(2);
console.log(x); // [1, 2]
console.log(y); // [1, 2]

// 12. What is Arity in Javascript? Explain with a real time example.

function f(a,b,c){}
let arity = f.length;
console.log(arity)

// 13. What is Currying in Javascript? Explain with a real time example.
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



// 16. List the differences between named function and assigning functions to variable with
// examples

// function declaration

hoisted(); // logs "foo" 
  
function hoisted() { 	 
  console.log("foo");  
} 

// Function expression
notHoisted(); // TypeError: notHoisted is not a function  
 
var notHoisted = function() {  
  console.log("bar");  
}; 

