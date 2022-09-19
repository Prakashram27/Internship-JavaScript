// console.log(1.toString) // This will freeze the execution flow

console.log((1).toString());  // "1"

console.log("hello".toUpperCase()); //  "HELLO"

console.log("HELLO WORLD".toLowerCase()); // "hello world"

console.log(new Number(1).toString());   // "1"

// Chaining method
let s = 'HELLO World JavaScript is Awesome'
// s = s.toLowerCase()
// s = s.replace(/ /g, '|')    // globally replace all spaces with |
// s = s.trim()
// console.log(s)

// s = s.toLowerCase.replace(/ /g, '|').trim()
// console.log(s)

// "hello".toUpperCase().slice(1, 4); // "ELLO"


// TYPE COERCION
console.log(null + {} + true + [] + [5]) //null[object Object]true5
console.log(true + 1) // answer = 2
console.log(true + true) //  answer = 2
console.log(true + false) // becomes 1 (true=1, false=0, 0+1 = 1)
console.log("hello"+" "+ "there.") // becomes "hello there"
console.log('Username' + 1532152) // Becomes Username1532152
console.log(1/"string") // becomes NaN(Not a Number)
console.log(NaN == NaN) // becomes false
console.log([1]+[2]) //becomes "12" <string>
console.log([]+[]) // Becomes "" <string>
console.log(Infinity)  // remains infinity <number>
console.log([]+{}) // [object object]

// initialize some boolean based on an arguements

console.log( Boolean([])) // true
console.log(Boolean({})) // true
console.log( Boolean(true)) // true

console.log( Boolean(false)) //false
console.log( Boolean(NaN))  //false
console.log( Boolean(null))  //false
console.log( Boolean(undefined)) //false
console.log( Boolean(''))  //false
console.log( Boolean(0))  //false
console.log( Boolean(-0))  //false

console.log([]==[]) //false
console.log("[]"=="[]") //true
let a = [];
let b = [];
console.log(a==a)  // Becomes true
console.log(a==b) // becomes false
console.log(a !== b) // true

let string = "Prakash";
console.log(-string)  // NaN

let num = 1
console.log(-num)  // -1

console.log(Number("Text")) // NaN

console.log(5+" "+7)  //12
console.log("1"+1) // becomes 11

console.log(1 + "o1")  //  1o1


// Operators
// Assignment Operators
// Lets take some variables
var x=10
var y=20

x=y // Here, x is equal to 20
y=x // Here, y is equal to 10

// let counter = 0;
// counter = counter + 1;

let counter = 0;
counter += 1;

// Illustration of (==) operator
let val1 = 5;
let val2 = '5';
let val3 = 6

// Checking of operands
console.log(val1 == 5);  // true
console.log(val2 == 5);   // true     
console.log(val1 == val1);  //true
console.log(val1==val3)   // false


console.log(val1 === 6); //false
console.log(val2 === '5'); // true       
console.log(val1 === val1); // true







