// Array.sort //
var fruits = [
    {nsme : "Apple", count : 13},
    {nsme : "Pears", count : 12},
    {nsme : "Banana", count : 12},
    {nsme : "Strawberry", count : 11},
    {nsme : "Cherry", count : 11},
    {nsme : "Blackberry", count : 10},
    {nsme : "Pineapple", count : 10}
]

let my_sort = (a,b ) =>{a.count - b.count};

let sorted = fruits.sort(my_sort);

console.log(sorted)

// Array.forEach //

let fruit = [
    "pears",
    "banana",
    "orange",
    "apple",
    "pineapple"
]

let print = function(item,index,object){
    console.log(item)
}
fruit.forEach(print)

fruit.forEach((item,index,object)=>
    console.log(item,index,object)
)

// let numbers = [0,10,2,3,4,5,6,7]
// let condition = value => value < 10;
// let some = numbers.some(condition)
// let every = numbers.every(condition)

// console.log(some); // true
// console.log(every) // false

let numbers = [0,10,2,3,4,5,6,7]
let condition = value => value < 10;
let filtered = numbers.filter(condition)
console.log(filtered);
console.log(numbers)

let number = [0,1,256,4,5,6,7]

let result = number.map(value => value = value +1)

console.log(result)
console.log(number)

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(3));
// expected output: [0, 1, 2, [3, 4]]

// array flatmap() //
const arr3 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr3.flatMap(num => num);

console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]


// String.prototype.matchAll() 

var s = "Welcome To My Domain,Once again the user has welcomed";
var results = s.match(/in/g);
console.log(results)


// flatting multidimentional array 

let multi = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]
let multi1=multi.flat()
let multi2 = multi.flat().flat()
let multi3 = multi.flat().flat().flat() // instead we can use flat(3)
console.log(multi1)
console.log(multi2)
console.log(multi3)

let array = [1,2,3,4,5]
var array1 = array.map(x=>[x, x*2])
console.log(array1)

var array2 = array.flatMap(v=> [v, v*2])
console.log(array2)

let string = "hello"
let matches = string.match("l");
console.log(matches[0])

let string1 = "hello"
let matches1 = string.match(/l/);
console.log(matches1[0])   // l

let ret = string.match(/l/g)
console.log(ret)