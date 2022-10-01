"use scrict"

// // function anatomy //

// function update(a,b,c,d="hi"){
//     // a : 7
//     // b = []
//     //c = {}
//     //d = "hi"
//     this; // context : windows or object instance
//     return true;


// }
// update(7,[],{})  // arguments


//Anonymous function used as a setTimeout event callback.

setTimeout(function(){
    console.log("Print something in 1 second");
    console.log(arguments)
},1000);

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

// You can also pass them to the event functions just by their name: // cleaner code
setTimeout(print,1000)
document.addEventListener("click",clicked)

// let clicked = function(event){
//     console.log(event,event.target)
// }

function fun(text,number,array,object,func,misc){
console.log(text);
console.log(number);
console.log(array);
console.log(object);
console.log(volleyball);
console.log(volleyball());

}
fun("text",123, [1,2,4], {count:1},volleyball, volleyball()) // call the function by its parameter name



function fun(func){
    if(typeof(func) == "function"){
    console.log(func())
    }
  }
  
  var fArray =[];
  var f = function(){}
  
  fun(fArray) 
  
  function orange(){
    console.log(this)
  }
  orange()  //windows object will print
  
  let orange = new orange()


  // Higher Order Functions // 
  let mapArray = [0,1,2]
// function that adds 1 to any numeric value
function add_one(v){  
  return v+1
}
let array1 = mapArray.map(add_one)

console.log(array1)



// Arrow function syntax
// () => {}

// create a new arrow function and assign it to a variable
let func_1 =() => {}

// call arrow function by its name 
func_1()

let arguments = [1, 2, 3];
let arr = () => arguments[0];
arr();

// Arrow function as event 
let clicked = (event) => console.log(event.target);


// Arrow function syntax with arguments
let x = (arg1,arg2) => console.log(arg1,arg2);
x(1,2);   // 1,2

let boomarang = a => "returns"
let karma = a => {"returns"}


// Returning from an arrow function 

let boomarang = a => "returns"
console.log(boomarang());

let karma = a => {return "returns"}
console.log(karma());

let prayer = a => {return Math.random() >= 0.5 }
console.log(prayer());

let time = a => {"won't return"}
console.log(time())

// output:
// returns
// returns
// false
// undefined

