 // Spread and rest operators //

 var arr1 = [1,2,3,4];
 var arr2 = [5,6];
 var arr3 = arr1.concat(arr2) // Concatination 
 var arr4 = [...arr1,...arr2] // using spread operators

 console.log(arr3)
 console.log(arr4)


function sum(...arg){
    return arg
}
console.log(sum(1,2,3))

// function sun(...arg,a,b){ } // Error
// function sun(a,...arg,b){ } // Error
// function sun(a,b,...arg){ } //  Correct placement of ...rest parameters.

function print(a,...arg){
    console.log(a)
    console.log(arg)
}
print(...[1,2,3],4,5);
//a = 1
//arg = [2,3,4,5]

function exm(a,b,c,...arg){
    console.log(a)
    console.log(b);
    console.log(c)
    console.log(arg);
}
exm(...[1,2,3],4,5)

let names = ["Prakash", "ram", "shiv"];
const cat = [...names,"Meenu"];
console.log(cat)

// let aim = ...[1,2,3] //  SyntaxError: Unexpected token '...'

// Destructuring Assignment //
// Destructure from Array // 


var [a] = [10];
console.log(a)

var [a,b,...rest] = [1,2,3,4,5,6]
console.log(a,b)
console.log(rest)

// Destructure from Object // 
let {orange} = {orange:1}
console.log(orange)

let fruit_basket = {
    grapes : 2,
    banana : 5,
    apple : 3
}
let {grapes} = fruit_basket;
console.log( grapes)


//Accessing inner object //
let {apples, oranges} = {apples: 5 , oranges : 15}
console.log(apples+oranges)

let {cars, bikes} = {cars: 5 , inner : {bikes : 15}}
console.log(bikes)

let deep = {
    basket:{
        fruits: {
            nam : "orange",
            shape : "round",
            weight : 0.2
        }
    }
}
let { nam, shape, weight} = deep.basket.fruits
console.log(nam);
console.log(shape);
console.log(weight);

// destructure and rename at the same time // 
let {automobile: car} = {automobile : "tesla"}
console.log(car)

let aa = {p:1, q:2 , m:()=>{}}
let bb = {r:1, s:2 , n:()=>{}}
let cc = {...aa,...bb}

console.log(cc)

let aaa ={ nest :{eggs : 10}}
let bbb = {eggs : 5 }
let ccc = {...aaa,...bbb}
console.log(ccc)


 // shollow Copy // 

var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
 
 
console.log("Employee=> ", employee);
var newEmployee = employee;  
console.log("New Employee=> ", newEmployee);
      //After Updation

newEmployee.ename = "Beck";

console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

  // Deep Copy // 

//   var employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
// console.log("=========Deep Copy========");
// var newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// // After Updation

// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);














