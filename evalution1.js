// 1. Check prime number // 
function isPrime(n){
    var result = "I am Prime Number";
    
    if(n <= 1){
        result = "I am not Prime number";
    }
    
    else{
        for(let i = 2; i < n ; i++){
            if(n % i === 0){
                result =  "I am not Prime number";
                break;
            }       
        }   
    } 
    return result
    } 
     console.log(isPrime(12))


// 2. Equality vs Strict Equality //

console.log(0 == false)   // true
console.log(0 === false ) // false, because they are of a different type
console.log(1 == "1")    // true, automatic type conversion for value only
console.log(1 === "1")   // false, because they are of a different type
console.log(null == undefined)// true
console.log(null === undefined) // false
console.log('0' == false) // true
console.log('0' === false) // false



// 3.Reverse a string //
// method1
function reverseString(string){
    return string.split("").reverse().join("")
  }
  console.log(reverseString("Mammals"))
  
  // var string = "Mammals"
  // let string1 = string.split("").reverse().join("")
  // console.log(string1)
  
  // method2
  // function reverse1(str){
  //     var r = "";
  //     for(var i = str.length - 1; i >= 0; i--){
  //       r += str.charAt(i);
  //     }
  //     return r;
  //   }
  //   str = "abcdefg"
  //   console.log(reverse1(str))
  
  //   method3
    // function reverseString(str1) {
    //   if (str1 === "") // This is the terminal case that will end the recursion
    //     return "";
      
    //   else
    //     return reverseString(str1.substr(1)) + str.charAt(0);
        
    // }
    // console.log(reverseString("hello"));
    
//  4.Reverse a word //
function reverseSentence(string){
    return string.split(" ").reverse().join(" ")
  }
  console.log(reverseSentence("The quick brown fox jumps over the lazy dog"))



// 5.Palindrome //
var stringA = "lol";

function palindrome(stringA){
  var revstr = stringA.split("").reverse().join("");

  if(stringA == revstr){
      return ("It was Palindrome")
  }
  else{
      return ("It was not Palindrome")
  }
}
console.log(palindrome("lol"))

// 6. forEach() and Map  //

const exampleArray = [1, 2, 3, 4, 5]
console.log(exampleArray.forEach(x => x)); 
// returns Undefined


console.log(exampleArray.map(x => x)); 
// returns 1,2,3,4,5 // 
// returns new array



// 7.Random number 1 to 5 //
function randomNum(min, max) { 
    var n = []; 
    n.push(Math.floor(Math.random() * max) + min); 
    return n; 
    } 
    console.log(randomNum(1,5))   // [ 7 ]



// 8. remove duplicate from following array //

let re = [1,2,4,4,4,5,5,5,5,4,6,7,6,7]
let result = [];
for(let i = 0 ; i < re.length ; i++){
    for(let j = i+1 ; j < re.length ; j++){
        if(re[i]==re[j]){
        if(result.includes(re[j])){
            continue;
        }
        else {
            result.push(re[j])
        }
    }
    }
}
console.log(result)

// 9.  Sum of Natural numbers //

function sumOfNaturalNum(x){
    let result = 0
    
    for(let i = 0; i < x;i++){
         result += i
    }
    return result
    }
    
    console.log(sumOfNaturalNum(10))

// 10. sum of odd and even numbers
let n = 20
let even = 0;
let odd = 0;
for(let i = 1 ; i <= n;i++){
    if(i % 2 === 0){
        even = even + i
    }
    else {
        odd = odd + i
    }
}
console.log(even,odd)

//11. Merging two arrays //

let mArray1 = [1,2,9,3,5,1,4,5];
let mArray2 = [11,54,70,40];

let resultArray = mArray1.concat(mArray2)
console.log(resultArray)  // [ 1, 2, 9, 3, 5, 1, 4, 5, 11, 54, 70, 40 ]


// 12. Remove duplicate from an array of an object by id and name? //
let arr =[
    {id: 1, name: 'Stephen covey'},
    {id: 2, name: 'Robin Sharma' },
    {id: 3, name:'Tolstoy'},
    {id: 3, name: 'Tolstoy'},
    {id: 5, name: 'James clear'}
  ]
  const uniqueIds = []
  const unique = arr.filter(element => {
  const isDuplicate = uniqueIds.includes(element.id || element.name);
  
  if (!isDuplicate) {
    uniqueIds.push(element.id);
    return true
  }
  
  return false
  
  })
  
  console.log(unique)


  // 13.



  // 14 flattening array
array1 = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]]

array2 = array1.flat(3);
console.log(array2)

// 15.  Group by the id of the following array of objects using the Array.reduce method? //
let employees = [
    {id: 1, name: 'edison' },
    {id: 2, name: 'Annand' },
    {id: 3, name: 'Vasnath'}
    ]
const groupById = employees.reduce((total,item) => item.id+total ,0)
console.log(groupById)

// 16.Write a program in Javascript to display the pattern like right angle triangle using an asterisk.The pattern 

function printStar(n){
    let star = ""
    for(let i = 0;i < n;i++){
        for(let j = 0; j <= i;j++){
            star += "*"
        }
        console.log(star)
        star =""
    }
    } printStar(4)

 // 17.Write a program in Javascript to make such a pattern like right angle triangle with number increased by 1.

 function numSequence(rows){
    let printNumber = 1;
    let result = ''
    
    for(let i = 1 ; i <= rows;i++){
        for(let j = 0; j <= i-1 ; j++){
            result += printNumber + " "
            printNumber++;
        }
        console.log(result)
        result = ""
    }
    }
    numSequence(4)


// 18.  Write a program in Javascript to make such a pattern like a pyramid with numbers
increased by 1
//
let result3 = ""
let h = 1
let n1 = 4

for(let i = 1 ; i <= n1;i++){
  for(let j = 1 ; j <=n1-i;j++){
    result3 += " "
  }
  for(let k = 1 ; k <= i ; k++){
    result3 += h + " "
    h++;
  }
  console.log(result3)
  result3 = ""
}


// 19 . Diamond pattern 

let size = 5;
let star = ""
for(let i = 1; i <= size ;i++){
    for(let j = size ;  j > i;j--){
        star+=" "
    }
    for(let k = 0 ; k < i * 2 -1;k++){
        star+="*"
    }
    console.log(star)
   star = ""
}

for(let i = 1 ; i <= size -1 ;i++){
  for(let j = 0; j < i;j++){
    star+=" "
  }

  for(let k = (size-i)*2-1;k>0;k--){
    star+="*"
    }console.log(star)
    star=""

}

    
    