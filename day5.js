// 1.number
//Number data type in javascript can be used to hold decimal values as well as values without decimals.
var num1 = 1;
var num2 = 99.121314
var num3 = -1000
var num4 = -Infinity
var num5 = Infinity
var num6 = NaN;

// here typeof is a inbuilt method used to find type of the variable.

console.log(typeof(num1))  // number
console.log(typeof(num2))  // number
console.log(typeof(num3))  // number
console.log(typeof(num4)) // number
console.log(typeof(num5)) // number
console.log(typeof(num6))


console.log(0 / 0)  // NaN
console.log(0 / 5)  // 0
console.log(3 * 'a') // NaN
console.log('a' * 3) // NaN
console.log('b' + 4) // b4
console.log(4 + 'b') // 4b
console.log(5 - 'c') // NaN
console.log('c' - 5) // NaN

// STRING
// A value written inside double quotes or single quotes is a string in JavaScript.

var mName = "Prakash Ramu";
var mProfession = 'Developer';

console.log(typeof(mName));   // string
console.log(typeof(mProfession)); // string

//BigInt

var bigint = 12345678901896532147759012345678901234567890n;
console.log(bigint);
var sameBigint = BigInt("12345678901896532147759012345678901234567890");
console.log(sameBigint);
var bigintFromNumber = BigInt(20); // same as 20n
console.log(bigintFromNumber);

// Boolean
console.log(typeof(true));
console.log(typeof(false));


var counter;
console.log(counter);        // undefined
console.log(typeof(counter)); // undefined


